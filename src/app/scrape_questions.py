import requests
from bs4 import BeautifulSoup
import json
import re
import time

BASE_URL = "https://foreignvasi.com/leben-in-deutschland-test/"
CATEGORIES = [
    # General parts
    "part-1-1-history", "part-1-2-history", "part-2", "part-3", "part-4-1", "part-4-2", "part-5", "part-6-1", "part-6-2",
    # States (add/remove as needed)
    "baden-wurttemberg", "bayern", "berlin", "brandenburg", "bremen", "hamburg", "hessen", "mecklenburg-vorpommern",
    "niedersachsen", "nordrhein-westfalen", "rheinland-pfalz", "saarland", "sachsen", "sachsen-anhalt",
    "schleswig-holstein", "thuringen"
]

def get_all_links():
    # Manually construct all URLs for general and state-specific questions
    links = []
    # General parts (1-1, 1-2, 2, 3, 4-1, 4-2, 5, 6-1, 6-2)
    for part in [
        "part-1-1-history", "part-1-2-history", "part-2", "part-3", "part-4-1", "part-4-2", "part-5", "part-6-1", "part-6-2"
    ]:
        links.append((part, f"{BASE_URL}{part}.html"))
    # State-specific
    for state in [
        "baden-wurttemberg", "bayern", "berlin", "brandenburg", "bremen", "hamburg", "hessen", "mecklenburg-vorpommern",
        "niedersachsen", "nordrhein-westfalen", "rheinland-pfalz", "saarland", "sachsen", "sachsen-anhalt",
        "schleswig-holstein", "thuringen"
    ]:
        links.append((state, f"{BASE_URL}{state}-questions.html"))
    return links

def parse_questions_from_page(url):
    resp = requests.get(url)
    soup = BeautifulSoup(resp.text, "html.parser")
    questions = []
    for card in soup.select(".card.question-container"):
        qtext_tag = card.select_one(".question-text h5")
        if not qtext_tag:
            continue
        question_text = qtext_tag.get_text(strip=True)
        answers = []
        for choice in card.select(".choice"):
            answer_text = choice.select_one(".choice-text")
            if not answer_text:
                continue
            text = answer_text.get_text(strip=True)
            correct = choice.select_one(".answer-indicator") is not None
            answers.append({"text": text, "correct": correct})
        if answers:
            questions.append({"question": question_text, "answers": answers})
    return questions

def main():
    all_questions = {}
    for category, url in get_all_links():
        print(f"Scraping {category} from {url}")
        try:
            questions = parse_questions_from_page(url)
            all_questions[category] = questions
            time.sleep(1)  # Be polite to the server
        except Exception as e:
            print(f"Failed to scrape {url}: {e}")
    with open("all-test-questions.json", "w", encoding="utf-8") as f:
        json.dump(all_questions, f, ensure_ascii=False, indent=2)
    print("Done! Saved to all-test-questions.json")

if __name__ == "__main__":
    main()