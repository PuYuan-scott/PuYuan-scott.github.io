#!/usr/bin/env python3

from __future__ import annotations

import argparse
import re
from pathlib import Path

from PyPDF2 import PdfReader, PdfWriter
from PyPDF2.generic import (
    ArrayObject,
    DecodedStreamObject,
    DictionaryObject,
    NameObject,
)


PAPER = (248 / 255, 247 / 255, 243 / 255)
INK = (16 / 255, 24 / 255, 32 / 255)
GOLD = (165 / 255, 123 / 255, 66 / 255)

PART_TITLES = {
    1: "Five-Dimension Economic Cycle Summary Table",
    2: "Growth Indicators and Growth-State Assessment",
    3: "Employment Indicators and Employment-State Assessment",
    4: "Inflation Indicators and Inflation-State Assessment",
    5: "Financial Conditions Indicators and State Assessment",
    6: "Credit Indicators and Credit-State Assessment",
    7: "Five-Dimension Indicators and Economic Cycle Mapping",
    8: "Economic Cycle and Equity-Market Performance",
    9: "Typical Sequence of the Economic Cycle",
    10: "Causes of the Three Late-Cycle Pathways",
    11: "Comparison of the Three Late-Cycle Paths",
    12: "Final Decision Rules",
}


def rgb(values: tuple[float, float, float]) -> str:
    return " ".join(f"{value:.5f}" for value in values)


def stream(data: str) -> DecodedStreamObject:
    result = DecodedStreamObject()
    result.set_data(data.encode("ascii"))
    return result


def roman_to_int(value: str) -> int:
    values = {"I": 1, "V": 5, "X": 10}
    total = 0
    previous = 0

    for character in reversed(value):
        current = values[character]
        if current < previous:
            total -= current
        else:
            total += current
            previous = current

    return total


def pdf_string(value: str) -> str:
    return value.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def find_part_heading(page: object) -> dict[str, float | int | str] | None:
    result: dict[str, float | int | str] | None = None

    def visit(
        text: str,
        current_matrix: list[float],
        text_matrix: list[float],
        _font: object,
        font_size: float,
    ) -> None:
        nonlocal result
        match = re.match(r"^Part ([IVX]+): (.+)$", text.strip())
        if not match or result is not None:
            return

        number = roman_to_int(match.group(1))
        x = (
            current_matrix[0] * text_matrix[4]
            + current_matrix[2] * text_matrix[5]
            + current_matrix[4]
        )
        y = (
            current_matrix[1] * text_matrix[4]
            + current_matrix[3] * text_matrix[5]
            + current_matrix[5]
        )
        scale = max(abs(current_matrix[0]), abs(current_matrix[3]))
        result = {
            "number": number,
            "text": f"Part {number}: {match.group(2)}",
            "x": x,
            "y": y,
            "font_size": font_size * scale,
        }

    page.extract_text(visitor_text=visit)
    return result


def add_font_resource(page: object, font_reference: object) -> None:
    resources = page[NameObject("/Resources")].get_object()
    fonts = resources.get(NameObject("/Font"))

    if fonts is None:
        font_dictionary = DictionaryObject()
        resources[NameObject("/Font")] = font_dictionary
    else:
        font_dictionary = fonts.get_object()

    font_dictionary[NameObject("/SYRB")] = font_reference


def add_economic_cycle_outline(
    writer: PdfWriter,
    bookmark_pages: list[tuple[int, int]],
) -> None:
    found_parts = {number for number, _page_index in bookmark_pages}
    expected_parts = set(PART_TITLES)
    if found_parts != expected_parts:
        missing = sorted(expected_parts - found_parts)
        raise ValueError(f"Could not locate Part headings: {missing}")

    for number, page_index in sorted(bookmark_pages):
        writer.add_outline_item(
            f"Part {number}: {PART_TITLES[number]}",
            page_index,
            color=GOLD,
            bold=True,
        )

    writer.set_page_mode("/UseOutlines")


def copy_source_outline(reader: PdfReader, writer: PdfWriter) -> None:
    def add_items(
        items: list[object],
        parent: object | None = None,
    ) -> None:
        last_item: object | None = None
        for item in items:
            if isinstance(item, list):
                add_items(item, last_item or parent)
                continue

            try:
                page_index = reader.get_destination_page_number(item)
            except Exception:
                continue
            if page_index is None or page_index < 0:
                continue

            title = getattr(item, "title", str(item))
            last_item = writer.add_outline_item(
                title,
                page_index,
                parent=parent,
            )

    source_outline = reader.outline
    if source_outline:
        add_items(source_outline)
        writer.set_page_mode("/UseOutlines")


def style_pdf(
    source: Path,
    destination: Path,
    *,
    economic_cycle_outline: bool = False,
) -> None:
    reader = PdfReader(source)
    writer = PdfWriter()
    bookmark_pages: list[tuple[int, int]] = []
    heading_font = DictionaryObject(
        {
            NameObject("/Type"): NameObject("/Font"),
            NameObject("/Subtype"): NameObject("/Type1"),
            NameObject("/BaseFont"): NameObject("/Helvetica-Bold"),
            NameObject("/Encoding"): NameObject("/WinAnsiEncoding"),
        },
    )
    heading_font_reference = writer._add_object(heading_font)

    for page_index, source_page in enumerate(reader.pages):
        part_heading = (
            find_part_heading(source_page)
            if economic_cycle_outline
            else None
        )
        writer.add_page(source_page)
        page = writer.pages[-1]
        width = float(page.mediabox.width)
        height = float(page.mediabox.height)

        background = stream(
            f"q {rgb(PAPER)} rg 0 0 {width:.3f} {height:.3f} re f Q\n",
        )
        accent_commands = [
            f"q {rgb(INK)} rg 0 {height - 10:.3f} {width:.3f} 10 re f Q",
            f"q {rgb(GOLD)} rg 0 {height - 12:.3f} {width:.3f} 2 re f Q",
            f"q {rgb(GOLD)} rg 78 18 52 1.5 re f Q",
            f"q {rgb(INK)} rg 130 18 {max(width - 208, 0):.3f} 0.5 re f Q",
        ]

        if part_heading is not None:
            number = int(part_heading["number"])
            x = float(part_heading["x"])
            y = float(part_heading["y"])
            font_size = float(part_heading["font_size"])
            replacement = pdf_string(str(part_heading["text"]))
            add_font_resource(page, heading_font_reference)
            accent_commands.extend(
                [
                    (
                        f"q {rgb(PAPER)} rg {x - 4:.3f} {y - 5:.3f} "
                        f"{width - x - 70:.3f} {font_size + 11:.3f} re f Q"
                    ),
                    (
                        f"q {rgb(INK)} rg BT /SYRB {font_size:.3f} Tf "
                        f"1 0 0 1 {x:.3f} {y:.3f} Tm "
                        f"({replacement}) Tj ET Q"
                    ),
                ],
            )
            bookmark_pages.append((number, page_index))

        accents = stream(
            f"q 1 0 0 -1 0 {height:.3f} cm\n"
            + "\n".join(accent_commands)
            + "\nQ\n",
        )

        background_reference = writer._add_object(background)
        accents_reference = writer._add_object(accents)
        existing_contents = page.get(NameObject("/Contents"))

        if isinstance(existing_contents, ArrayObject):
            content_items = list(existing_contents)
        elif existing_contents is None:
            content_items = []
        else:
            content_items = [existing_contents]

        page[NameObject("/Contents")] = ArrayObject(
            [background_reference, *content_items, accents_reference],
        )

    source_metadata = reader.metadata or {}
    writer.add_metadata(
        {
            "/Title": source_metadata.get(
                "/Title",
                "Economic Cycle Framework",
            ),
            "/Author": "Scott Yuan",
            "/Subject": "Economic Analysis",
            "/Creator": "Scott Yuan Research",
        },
    )

    if economic_cycle_outline:
        add_economic_cycle_outline(writer, bookmark_pages)
    else:
        copy_source_outline(reader, writer)

    destination.parent.mkdir(parents=True, exist_ok=True)
    with destination.open("wb") as output:
        writer.write(output)


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Apply Scott Yuan Research paper, ink, and gold styling.",
    )
    parser.add_argument("source", type=Path)
    parser.add_argument("destination", type=Path)
    parser.add_argument(
        "--economic-cycle-outline",
        action="store_true",
        help="Use Arabic Part numbers and add twelve PDF bookmarks.",
    )
    args = parser.parse_args()
    style_pdf(
        args.source,
        args.destination,
        economic_cycle_outline=args.economic_cycle_outline,
    )


if __name__ == "__main__":
    main()
