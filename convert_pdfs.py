#!/usr/bin/env python3
import fitz  # PyMuPDF
import os
from pathlib import Path

pdf_dir = Path("/Users/nicolasguillen/Documents/Repositories/Personal/segundo-parcial-pa-2026/PA 2026")
output_dir = Path("/Users/nicolasguillen/Documents/Repositories/Personal/segundo-parcial-pa-2026/imagenes_pa2026")
output_dir.mkdir(exist_ok=True)

pdf_files = sorted(pdf_dir.glob("*.pdf"))
print(f"Found {len(pdf_files)} PDF files")

dpi = 200
zoom = dpi / 72  # PDF default resolution is 72 dpi
mat = fitz.Matrix(zoom, zoom)

for pdf_path in pdf_files:
    print(f"\nProcessing: {pdf_path.name}")
    doc = fitz.open(pdf_path)
    base_name = pdf_path.stem
    pdf_output_dir = output_dir / base_name
    pdf_output_dir.mkdir(exist_ok=True)
    
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        pix = page.get_pixmap(matrix=mat)
        output_filename = f"{base_name}_pagina_{page_num + 1:03d}.png"
        output_path = pdf_output_dir / output_filename
        pix.save(str(output_path))
        print(f"  Saved {output_filename} ({pix.width}x{pix.height})")
    
    doc.close()

print(f"\nDone! Images saved to: {output_dir}")
