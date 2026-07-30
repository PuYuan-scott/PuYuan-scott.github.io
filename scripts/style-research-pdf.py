#!/usr/bin/env python3

from __future__ import annotations

import argparse
from pathlib import Path

from PyPDF2 import PdfReader, PdfWriter
from PyPDF2.generic import ArrayObject, DecodedStreamObject, NameObject


PAPER = (248 / 255, 247 / 255, 243 / 255)
INK = (16 / 255, 24 / 255, 32 / 255)
GOLD = (165 / 255, 123 / 255, 66 / 255)


def rgb(values: tuple[float, float, float]) -> str:
    return " ".join(f"{value:.5f}" for value in values)


def stream(data: str) -> DecodedStreamObject:
    result = DecodedStreamObject()
    result.set_data(data.encode("ascii"))
    return result


def style_pdf(source: Path, destination: Path) -> None:
    reader = PdfReader(source)
    writer = PdfWriter()

    for source_page in reader.pages:
        writer.add_page(source_page)
        page = writer.pages[-1]
        width = float(page.mediabox.width)
        height = float(page.mediabox.height)

        background = stream(
            f"q {rgb(PAPER)} rg 0 0 {width:.3f} {height:.3f} re f Q\n",
        )
        accents = stream(
            f"q 1 0 0 -1 0 {height:.3f} cm\n"
            + "\n".join(
                [
                    f"q {rgb(INK)} rg 0 {height - 10:.3f} {width:.3f} 10 re f Q",
                    f"q {rgb(GOLD)} rg 0 {height - 12:.3f} {width:.3f} 2 re f Q",
                    f"q {rgb(GOLD)} rg 78 18 52 1.5 re f Q",
                    f"q {rgb(INK)} rg 130 18 {max(width - 208, 0):.3f} 0.5 re f Q",
                ],
            )
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

    destination.parent.mkdir(parents=True, exist_ok=True)
    with destination.open("wb") as output:
        writer.write(output)


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Apply Scott Yuan Research paper, ink, and gold styling.",
    )
    parser.add_argument("source", type=Path)
    parser.add_argument("destination", type=Path)
    args = parser.parse_args()
    style_pdf(args.source, args.destination)


if __name__ == "__main__":
    main()
