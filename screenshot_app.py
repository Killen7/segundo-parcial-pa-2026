#!/usr/bin/env python3
from playwright.sync_api import sync_playwright
import os

base_url = "http://localhost:8080/app-estudio-pa/"
output_dir = "screenshots"
os.makedirs(output_dir, exist_ok=True)

views = [
    ("dashboard", "Dashboard"),
    ("exams", "Exámenes"),
    ("patterns", "Patrones"),
    ("tutoriales", "Paso a Paso"),
    ("flashcards", "Flashcards"),
    ("quiz", "Quiz"),
    ("checklist", "Checklist"),
]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 900})
    
    for view_id, view_name in views:
        page.goto(base_url)
        page.wait_for_load_state("networkidle")
        # Click on nav item
        nav = page.locator(f".nav-item[data-view='{view_id}']")
        if nav.count() > 0:
            nav.click()
            page.wait_for_timeout(500)
        
        # Special handling for exam detail
        if view_id == "exams":
            # Click first exam
            page.locator("button[onclick*=\"openExam\"]").first.click()
            page.wait_for_timeout(800)
        
        # Special handling for flashcards: flip it
        if view_id == "flashcards":
            page.locator(".flashcard").click()
            page.wait_for_timeout(500)
        
        # Special handling for quiz: answer first question
        if view_id == "quiz":
            page.locator(".quiz-option").first.click()
            page.wait_for_timeout(500)
        
        # Special handling for patterns: open first pattern
        if view_id == "patterns":
            page.locator(".pattern-header").first.click()
            page.wait_for_timeout(500)
        
        # Special handling for tutoriales: select first tutorial and show steps
        if view_id == "tutoriales":
            page.locator(".exam-card").first.click()
            page.wait_for_timeout(600)
            page.locator(".tutorial-tabs button", has_text="Paso a paso").click()
            page.wait_for_timeout(400)
        
        path = os.path.join(output_dir, f"{view_id}.png")
        page.screenshot(path=path, full_page=True)
        print(f"Saved {path}")
    
    browser.close()

print("All screenshots saved to screenshots/")
