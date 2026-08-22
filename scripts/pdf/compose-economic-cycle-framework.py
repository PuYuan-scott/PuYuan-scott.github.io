#!/usr/bin/env python3

from __future__ import annotations

import argparse
import re
import textwrap
from pathlib import Path

from PyPDF2 import PdfReader, PdfWriter
from PyPDF2.generic import (
    ArrayObject,
    DecodedStreamObject,
    DictionaryObject,
    NameObject,
)


NAVY = (7 / 255, 26 / 255, 43 / 255)
BLUE = (23 / 255, 105 / 255, 166 / 255)
BANNER = (127 / 255, 167 / 255, 207 / 255)
MUTED = (88 / 255, 102 / 255, 117 / 255)

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


def pdf_string(value: str) -> str:
    return (
        value.replace("\\", "\\\\")
        .replace("(", "\\(")
        .replace(")", "\\)")
    )


def make_stream(data: str) -> DecodedStreamObject:
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


def find_part_heading(page: object) -> tuple[int, float] | None:
    result: tuple[int, float] | None = None

    def visit(
        text: str,
        current_matrix: list[float],
        text_matrix: list[float],
        _font: object,
        _font_size: float,
    ) -> None:
        nonlocal result
        match = re.match(r"^Part ([IVX]+):", text.strip())
        if not match or result is not None:
            return
        y = (
            current_matrix[1] * text_matrix[4]
            + current_matrix[3] * text_matrix[5]
            + current_matrix[5]
        )
        result = (roman_to_int(match.group(1)), y)

    page.extract_text(visitor_text=visit)
    return result


def add_font_resource(page: object, key: str, reference: object) -> None:
    resources = page.get(NameObject("/Resources"))
    if resources is None:
        resources = DictionaryObject()
        page[NameObject("/Resources")] = resources
    else:
        resources = resources.get_object()

    fonts = resources.get(NameObject("/Font"))
    if fonts is None:
        font_dictionary = DictionaryObject()
        resources[NameObject("/Font")] = font_dictionary
    else:
        font_dictionary = fonts.get_object()
    font_dictionary[NameObject(key)] = reference


def style_body_page(
    writer: PdfWriter,
    page: object,
    *,
    final_page_number: int,
    part_heading: tuple[int, float] | None,
    regular_font: object,
    bold_font: object,
) -> None:
    width = float(page.mediabox.width)
    height = float(page.mediabox.height)
    add_font_resource(page, "/SYRH", regular_font)
    add_font_resource(page, "/SYRHB", bold_font)

    background = make_stream(
        f"q 1 1 1 rg 0 0 {width:.3f} {height:.3f} re f Q\n"
    )
    commands = [
        f"q 1 1 1 rg 0 {height - 43:.3f} {width:.3f} 43 re f Q",
        f"q {rgb(NAVY)} rg BT /SYRHB 8.5 Tf 1 0 0 1 42 {height - 28:.3f} Tm "
        f"(SCOTT YUAN RESEARCH) Tj ET Q",
        f"q {rgb(MUTED)} rg BT /SYRH 8.5 Tf 1 0 0 1 {width - 210:.3f} {height - 28:.3f} Tm "
        f"(ECONOMIC CYCLE FRAMEWORK) Tj ET Q",
        f"q {rgb(BLUE)} rg 42 {height - 35:.3f} {width - 84:.3f} 1.2 re f Q",
        "q 1 1 1 rg 0 0 %.3f 31 re f Q" % width,
        f"q {rgb(MUTED)} rg BT /SYRH 7.5 Tf 1 0 0 1 42 17 Tm "
        f"(Independent research | Not investment advice) Tj ET Q",
        f"q {rgb(MUTED)} rg BT /SYRH 7.5 Tf 1 0 0 1 {width - 74:.3f} 17 Tm "
        f"(Page {final_page_number}) Tj ET Q",
    ]

    if part_heading is not None:
        number, baseline = part_heading
        title = f"{number}. {PART_TITLES[number]}"
        lines = textwrap.wrap(title, width=58, break_long_words=False)
        line_height = 14
        bar_height = 20 + line_height * (len(lines) - 1)
        bar_bottom = baseline - bar_height + 13
        commands.append(
            f"q 1 1 1 rg 72 {bar_bottom - 4:.3f} {width - 144:.3f} "
            f"{bar_height + 8:.3f} re f Q"
        )
        commands.append(
            f"q {rgb(BANNER)} rg 72 {bar_bottom:.3f} {width - 144:.3f} "
            f"{bar_height:.3f} re f Q"
        )
        text_y = bar_bottom + bar_height - 14
        for line in lines:
            commands.append(
                f"q 1 1 1 rg BT /SYRHB 11.5 Tf 1 0 0 1 81 {text_y:.3f} Tm "
                f"({pdf_string(line)}) Tj ET Q"
            )
            text_y -= line_height

    overlay = make_stream("\n".join(commands) + "\n")
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


def compose(frontmatter: Path, source: Path, destination: Path) -> None:
    front_reader = PdfReader(frontmatter)
    source_reader = PdfReader(source)
    if len(front_reader.pages) < 2:
        raise ValueError("Frontmatter PDF must contain a title page and contents page")

    writer = PdfWriter()
    regular_font = writer._add_object(
        DictionaryObject(
            {
                NameObject("/Type"): NameObject("/Font"),
                NameObject("/Subtype"): NameObject("/Type1"),
                NameObject("/BaseFont"): NameObject("/Helvetica"),
                NameObject("/Encoding"): NameObject("/WinAnsiEncoding"),
            }
        )
    )
    bold_font = writer._add_object(
        DictionaryObject(
            {
                NameObject("/Type"): NameObject("/Font"),
                NameObject("/Subtype"): NameObject("/Type1"),
                NameObject("/BaseFont"): NameObject("/Helvetica-Bold"),
                NameObject("/Encoding"): NameObject("/WinAnsiEncoding"),
            }
        )
    )

    for page_index in range(2):
        writer.add_page(front_reader.pages[page_index])
        page = writer.pages[-1]
        if NameObject("/Annots") in page:
            del page[NameObject("/Annots")]

    part_pages: dict[int, int] = {}
    for source_index, source_page in enumerate(source_reader.pages):
        part_heading = find_part_heading(source_page)
        writer.add_page(source_page)
        page = writer.pages[-1]
        final_page_number = len(writer.pages)
        style_body_page(
            writer,
            page,
            final_page_number=final_page_number,
            part_heading=part_heading,
            regular_font=regular_font,
            bold_font=bold_font,
        )
        if part_heading is not None:
            part_pages[part_heading[0]] = source_index + 2

    if set(part_pages) != set(PART_TITLES):
        missing = sorted(set(PART_TITLES) - set(part_pages))
        raise ValueError(f"Could not locate source headings for parts: {missing}")

    writer.add_metadata(
        {
            "/Title": "Economic Cycle Framework: Five-Dimension Assessment, Market Performance, and Late-Cycle Pathways",
            "/Author": "Scott Yuan",
            "/Subject": "Economic Analysis",
            "/Creator": "Scott Yuan Research",
        }
    )
    writer.add_outline_item("Cover", 0, color=NAVY, bold=True)
    writer.add_outline_item("Contents", 1, color=BLUE, bold=True)
    for number in sorted(PART_TITLES):
        writer.add_outline_item(
            f"{number}. {PART_TITLES[number]}",
            part_pages[number],
            color=BLUE,
            bold=True,
        )
    writer.set_page_mode("/UseOutlines")

    destination.parent.mkdir(parents=True, exist_ok=True)
    with destination.open("wb") as handle:
        writer.write(handle)


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Combine an institutional cover and contents with the original economic-cycle report."
    )
    parser.add_argument("frontmatter", type=Path)
    parser.add_argument("source", type=Path)
    parser.add_argument("destination", type=Path)
    args = parser.parse_args()
    compose(args.frontmatter, args.source, args.destination)


if __name__ == "__main__":
    main()
