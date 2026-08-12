#!/usr/bin/env python3

from __future__ import annotations

import argparse
from pathlib import Path

from PyPDF2 import PdfReader, PdfWriter
from PyPDF2.generic import ArrayObject, DecodedStreamObject, NameObject


def add_white_background(source: Path, destination: Path) -> None:
    reader = PdfReader(source)
    writer = PdfWriter()
    for source_page in reader.pages:
        writer.add_page(source_page)

    for page in writer.pages:
        width = float(page.mediabox.width)
        height = float(page.mediabox.height)
        background = DecodedStreamObject()
        background.set_data(
            f"q 1 1 1 rg 0 0 {width:.3f} {height:.3f} re f Q\n".encode("ascii")
        )
        background_reference = writer._add_object(background)
        existing_contents = page.get(NameObject("/Contents"))
        if isinstance(existing_contents, ArrayObject):
            content_items = list(existing_contents)
        elif existing_contents is None:
            content_items = []
        else:
            content_items = [existing_contents]
        page[NameObject("/Contents")] = ArrayObject(
            [background_reference, *content_items]
        )

    if reader.metadata:
        writer.add_metadata(
            {
                key: str(value)
                for key, value in reader.metadata.items()
                if value is not None
            }
        )

    def copy_outline(items: list[object], parent: object | None = None) -> None:
        last_item: object | None = None
        for item in items:
            if isinstance(item, list):
                copy_outline(item, last_item or parent)
                continue
            try:
                page_index = reader.get_destination_page_number(item)
            except Exception:
                continue
            if page_index is None or page_index < 0:
                continue
            last_item = writer.add_outline_item(
                getattr(item, "title", str(item)),
                page_index,
                parent=parent,
            )

    if reader.outline:
        copy_outline(reader.outline)
    page_mode = reader.trailer["/Root"].get("/PageMode")
    if page_mode:
        writer.set_page_mode(str(page_mode))

    destination.parent.mkdir(parents=True, exist_ok=True)
    with destination.open("wb") as handle:
        writer.write(handle)


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Paint an explicit white background behind every PDF page."
    )
    parser.add_argument("source", type=Path)
    parser.add_argument("destination", type=Path)
    args = parser.parse_args()
    add_white_background(args.source, args.destination)


if __name__ == "__main__":
    main()
