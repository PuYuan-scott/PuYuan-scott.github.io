#!/usr/bin/env python3

from __future__ import annotations

import argparse
from pathlib import Path

from PyPDF2 import PdfReader, PdfWriter
from PyPDF2.generic import (
    ArrayObject,
    DecodedStreamObject,
    DictionaryObject,
    NameObject,
)


WHITE = (1.0, 1.0, 1.0)
NAVY = (7 / 255, 26 / 255, 43 / 255)
BLUE = (23 / 255, 105 / 255, 166 / 255)
BANNER = (127 / 255, 167 / 255, 207 / 255)
MUTED = (88 / 255, 102 / 255, 117 / 255)

SKIPPED_OUTLINE_TITLES = {
    "Mega-Cap Technology Drawdown and Accumulation Framework",
    (
        "A Historical Study of Long-Term Returns, Drawdown Frequency, "
        "Recovery Characteristics, and Staged Buying Strategies"
    ),
}


def rgb(values: tuple[float, float, float]) -> str:
    return " ".join(f"{value:.5f}" for value in values)


def stream(data: str) -> DecodedStreamObject:
    result = DecodedStreamObject()
    result.set_data(data.encode("ascii"))
    return result


def pdf_string(value: str) -> str:
    return value.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def add_font_resource(page: object, name: str, reference: object) -> None:
    resources = page[NameObject("/Resources")].get_object()
    fonts = resources.get(NameObject("/Font"))
    if fonts is None:
        font_dictionary = DictionaryObject()
        resources[NameObject("/Font")] = font_dictionary
    else:
        font_dictionary = fonts.get_object()
    font_dictionary[NameObject(name)] = reference


def find_primary_heading(page: object, page_index: int) -> dict[str, float | str] | None:
    if page_index == 0:
        return {"text": "EXECUTIVE SUMMARY", "x": 78.0, "y": 578.2}

    result: dict[str, float | str] | None = None

    def visit(
        text: str,
        current_matrix: list[float],
        text_matrix: list[float],
        _font: object,
        font_size: float,
    ) -> None:
        nonlocal result
        value = text.strip()
        if not value or result is not None:
            return
        scale = max(abs(current_matrix[0]), abs(current_matrix[3]))
        effective_size = font_size * scale
        if effective_size < 17.5:
            return
        if not (value[:1].isdigit() or value == "Conclusion"):
            return
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
        result = {"text": value, "x": x, "y": y}

    page.extract_text(visitor_text=visit)
    return result


def copy_outline(
    reader: PdfReader,
    writer: PdfWriter,
    page_offset: int,
) -> None:
    def add_items(items: list[object], parent: object | None = None) -> None:
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
            if title in SKIPPED_OUTLINE_TITLES:
                last_item = parent
                continue
            last_item = writer.add_outline_item(
                title,
                page_index + page_offset,
                parent=parent,
            )

    writer.add_outline_item("Cover", 0)
    writer.add_outline_item("Contents", 1)
    if reader.outline:
        add_items(reader.outline)
    writer.set_page_mode("/UseOutlines")


def style_report(source: Path, front_matter: Path, destination: Path) -> None:
    source_reader = PdfReader(source)
    front_reader = PdfReader(front_matter)
    if len(front_reader.pages) != 2:
        raise ValueError("Expected the generated front matter to contain two pages")

    writer = PdfWriter()
    regular_font = DictionaryObject(
        {
            NameObject("/Type"): NameObject("/Font"),
            NameObject("/Subtype"): NameObject("/Type1"),
            NameObject("/BaseFont"): NameObject("/Helvetica"),
            NameObject("/Encoding"): NameObject("/WinAnsiEncoding"),
        }
    )
    bold_font = DictionaryObject(
        {
            NameObject("/Type"): NameObject("/Font"),
            NameObject("/Subtype"): NameObject("/Type1"),
            NameObject("/BaseFont"): NameObject("/Helvetica-Bold"),
            NameObject("/Encoding"): NameObject("/WinAnsiEncoding"),
        }
    )
    regular_reference = writer._add_object(regular_font)
    bold_reference = writer._add_object(bold_font)

    for page in front_reader.pages:
        writer.add_page(page)

    total_pages = len(front_reader.pages) + len(source_reader.pages)

    for source_index, source_page in enumerate(source_reader.pages):
        heading = find_primary_heading(source_page, source_index)
        writer.add_page(source_page)
        page = writer.pages[-1]
        width = float(page.mediabox.width)
        height = float(page.mediabox.height)
        add_font_resource(page, "/SYR", regular_reference)
        add_font_resource(page, "/SYRB", bold_reference)

        background = stream(
            f"q {rgb(WHITE)} rg 0 0 {width:.3f} {height:.3f} re f Q\n"
        )
        commands = [
            f"q {rgb(WHITE)} rg 0 0 {width:.3f} 50 re f Q",
            f"q 0 0 0 rg 52 752 {width - 104:.3f} 16 re f Q",
            f"q {rgb(BANNER)} rg 52 750 {width - 104:.3f} 1.5 re f Q",
            (
                "q 1 1 1 rg BT /SYRB 7.5 Tf 1 0 0 1 57 757 Tm "
                "(SCOTT YUAN RESEARCH) Tj ET Q"
            ),
            (
                "q 1 1 1 rg BT /SYR 7.2 Tf 1 0 0 1 398 757 Tm "
                "(MEGA-CAP TECHNOLOGY) Tj ET Q"
            ),
            f"q {rgb(BANNER)} rg 52 40 {width - 104:.3f} 0.8 re f Q",
            (
                f"q {rgb(MUTED)} rg BT /SYR 7.2 Tf 1 0 0 1 52 24 Tm "
                "(Independent research | Not investment advice) Tj ET Q"
            ),
            (
                f"q {rgb(MUTED)} rg BT /SYR 7.2 Tf 1 0 0 1 497 24 Tm "
                f"(Page {source_index + 3} of {total_pages}) Tj ET Q"
            ),
        ]

        if heading is not None:
            x = float(heading["x"])
            y = float(heading["y"])
            title = pdf_string(str(heading["text"]))
            banner_y = y - 5
            commands.extend(
                [
                    f"q {rgb(WHITE)} rg {x - 6:.3f} {banner_y - 2:.3f} {width - x - 66:.3f} 31 re f Q",
                    f"q {rgb(BANNER)} rg {x - 2:.3f} {banner_y:.3f} {width - x - 72:.3f} 27 re f Q",
                    (
                        f"q 1 1 1 rg BT /SYRB 15 Tf 1 0 0 1 {x + 4:.3f} "
                        f"{y + 1:.3f} Tm ({title}) Tj ET Q"
                    ),
                ]
            )

        overlay = stream(
            f"q 1 0 0 -1 0 {height:.3f} cm\n"
            + "\n".join(commands)
            + "\nQ\n"
        )
        background_reference = writer._add_object(background)
        overlay_reference = writer._add_object(overlay)
        existing_contents = page.get(NameObject("/Contents"))
        if isinstance(existing_contents, ArrayObject):
            content_items = list(existing_contents)
        elif existing_contents is None:
            content_items = []
        else:
            content_items = [existing_contents]
        page[NameObject("/Contents")] = ArrayObject(
            [background_reference, *content_items, overlay_reference]
        )

    writer.add_metadata(
        {
            "/Title": "Mega-Cap Technology Drawdown and Accumulation Framework",
            "/Author": "Scott Yuan Research",
            "/Subject": "Equity Research",
            "/Creator": "Scott Yuan Research",
        }
    )
    copy_outline(source_reader, writer, len(front_reader.pages))
    destination.parent.mkdir(parents=True, exist_ok=True)
    with destination.open("wb") as handle:
        writer.write(handle)


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Apply the institutional blue, white and black report style."
    )
    parser.add_argument("source", type=Path)
    parser.add_argument("front_matter", type=Path)
    parser.add_argument("destination", type=Path)
    args = parser.parse_args()
    style_report(args.source, args.front_matter, args.destination)


if __name__ == "__main__":
    main()
