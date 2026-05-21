# LeetStat

A clean, minimal web app to view your LeetCode stats — see how many Easy, Medium, and Hard problems you've solved, along with your overall submission counts.

🔗 **Live Demo:** [leet-stat-phi.vercel.app](https://leet-stat-phi.vercel.app)

---

## Features

- 🔍 Search any LeetCode username
- 📊 Visual progress circles for Easy, Medium, and Hard problems
- 📋 Submission stats cards (Overall, Easy, Medium, Hard)
- ⚡ Fast and lightweight — no frameworks, just vanilla HTML, CSS, and JS

---

## Tech Stack

- HTML
- CSS
- JavaScript (Vanilla)
- Deployed on **Vercel**

---

## How It Works

The app calls LeetCode's GraphQL API via a Vercel rewrite proxy (`/leetcode-api/graphql`) to avoid CORS issues in the browser. The response is parsed and displayed as progress circles and stat cards.

---

## Run Locally

```bash
git clone https://github.com/KumudKSharma/LeetStat.git
cd LeetStat
```

Then just open `index.html` in your browser — no build step needed.

---

## Project Structure

```
LeetStat/
├── index.html      # Main UI
├── style.css       # Styling
├── script.js       # Logic & API calls
└── vercel.json     # Vercel rewrite config for API proxy
```
