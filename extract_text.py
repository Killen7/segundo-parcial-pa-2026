#!/usr/bin/env python3
import fitz
import json
from pathlib import Path

pdf_dir = Path("/Users/nicolasguillen/Documents/Repositories/Personal/segundo-parcial-pa-2026/PA 2026")
output_dir = Path("/Users/nicolasguillen/Documents/Repositories/Personal/segundo-parcial-pa-2026/textos_extraidos")
output_dir.mkdir(exist_ok=True)

results = []

for pdf_path in sorted(pdf_dir.glob("*.pdf")):
    print(f"Extracting: {pdf_path.name}")
    doc = fitz.open(pdf_path)
    pages_text = []
    for i, page in enumerate(doc):
        text = page.get_text()
        pages_text.append({
            "page_num": i + 1,
            "text": text
        })
    doc.close()
    
    exam_data = {
        "filename": pdf_path.name,
        "pages": pages_text,
        "full_text": "\n\n".join(p["text"] for p in pages_text)
    }
    results.append(exam_data)
    
    # Save individual text file
    txt_path = output_dir / f"{pdf_path.stem}.txt"
    txt_path.write_text(exam_data["full_text"], encoding="utf-8")

# Save combined JSON
json_path = output_dir / "all_exams.json"
json_path.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")

print(f"\nDone! Extracted text from {len(results)} PDFs to {output_dir}")
