<div align="center">

<br/>

# 🐛 GitHub Issues Tracker

**A login-protected issue management dashboard powered by the GitHub API**

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub API](https://img.shields.io/badge/GitHub%20API-181717?style=flat&logo=github&logoColor=white)](https://docs.github.com/en/rest)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Complete-brightgreen)]()

<br/>

> *A sleek, GitHub-themed issue tracker with real login flow, live API data, search, filtering, and modal detail views — built entirely in vanilla JS.*

<br/>

</div>

---

## 🌟 What is This?

**GitHub Issues Tracker** is a fully client-side web app that mimics a real GitHub-style issue management interface. Built for **Programming Hero (Batch-13, Assignment 5)**, it demonstrates real API consumption, async JavaScript, ES6+ features, and clean UI state management — no frameworks, no build tools.

Users log in with demo credentials, then browse, search, and filter live GitHub issues — with full detail modals on click.

---

## ✨ Features at a Glance

| Feature | Description |
|---|---|
| 🔐 **Login Page** | Credential-protected entry with demo autofill |
| 🌐 **Live GitHub API** | Fetches real issues from the GitHub REST API |
| 🔍 **Search** | Filter issues by keyword in real time |
| 🗂️ **Tab Filtering** | Toggle between All / Open / Closed issues |
| 🪟 **Issue Modal** | Click any card to see full issue details in a modal overlay |
| ⏳ **Loading Spinner** | Smooth fetch indicator while data loads |
| 📭 **Empty State** | Clean "no results" UI when search finds nothing |

---

## 🖥️ App Flow

```
┌─────────────────────────────────────────────────────┐
│              🔐 Login Page                          │
│                                                     │
│   Username: [ admin        ]                        │
│   Password: [ ••••••••     ]                        │
│                                                     │
│   [  Sign in  ]    [ Use demo → ]                   │
└───────────────────┬─────────────────────────────────┘
                    │ authenticated
                    ▼
┌─────────────────────────────────────────────────────┐
│  🐙 GitHub Issues Tracker          [🔍 Search]      │
├─────────────────────────────────────────────────────┤
│  [ All ] [ Open ] [ Closed ]                        │
│                                                     │
│  ┌──────────────────┐  ┌──────────────────┐         │
│  │ 🟢 #42 Bug fix   │  │ 🔴 #41 Crash...  │         │
│  │ opened 2d ago    │  │ closed 5d ago    │         │
│  └──────────────────┘  └──────────────────┘         │
│                                                     │
│         [ click card → full modal ]                 │
└─────────────────────────────────────────────────────┘
```

---

## 🧠 JavaScript Concepts Demonstrated

This project covers core ES6+ concepts in a real-world context:

### 📦 `var` vs `let` vs `const`
```js
var oldWay = 'function-scoped, can be redeclared';   // avoid
let counter = 0;                                      // block-scoped, updatable
const API_URL = 'https://api.github.com/repos/...';  // block-scoped, fixed
```

### 🌊 Spread Operator
```js
// Expanding arrays & objects
const allIssues = [...openIssues, ...closedIssues];

const updatedIssue = { ...issue, state: 'closed' };
```

### 🔁 `map()`, `filter()`, `forEach()`
```js
// map() — transform each item into a new value
const titles = issues.map(issue => issue.title);

// filter() — keep only items matching a condition
const openOnly = issues.filter(issue => issue.state === 'open');

// forEach() — loop without returning anything
issues.forEach(issue => renderCard(issue));
```

### ➡️ Arrow Functions
```js
// Shorter, cleaner function syntax
const getLabel = (issue) => issue.labels.map(l => l.name).join(', ');

document.getElementById('btnLogin').addEventListener('click', () => {
  validateAndLogin();
});
```

### 🧵 Template Literals
```js
// Embed variables directly into strings
const cardHTML = \`
  <div class="issue-card" data-id="\${issue.number}">
    <h3>\${issue.title}</h3>
    <span class="badge \${issue.state}">\${issue.state}</span>
    <p>Opened by \${issue.user.login}</p>
  </div>
\`;
```

> 📚 Sources: [MDN Web Docs](https://developer.mozilla.org), [Google](https://google.com), [ChatGPT](https://chatgpt.com)

---

## 📁 Project Structure

```
Github-Issue-Tracker/
│
├── index.html          ← Login page + main app shell + modal overlay
├── app.js              ← Auth logic, API fetch, rendering, search, tabs
├── style.css           ← Full styling: login card, navbar, grid, modal
│
├── github-logo.png     ← Navbar & login branding
├── Aperture.png        ← Issues panel header icon
├── Open-Status.png     ← Open issue status badge
└── Closed-Status.png   ← Closed issue status badge
```

---

## 🔑 Demo Credentials

```
Username :  admin
Password :  admin123
```

> Click **"Use demo →"** on the login page to autofill instantly.

---

## 🚀 Getting Started

No dependencies. No setup. Just clone and open.

**Option 1 — Direct open:**
```bash
git clone https://github.com/Safin313-stack/Assingment-B13-A5-Github-Issue-Tracker.git
cd Assingment-B13-A5-Github-Issue-Tracker
open index.html
```

**Option 2 — Live Server (VS Code):**
1. Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Right-click `index.html` → **Open with Live Server**
3. Login with demo credentials and explore ✅

---

## 🎨 Tech Stack

```
Frontend Only — Zero Dependencies
─────────────────────────────────
  HTML5          →  Semantic structure, modal overlay
  CSS3           →  Custom properties, flexbox, animations
  JavaScript     →  Vanilla ES6+, Fetch API, async/await
  GitHub REST API→  Live issue data
  Google Fonts   →  Inter typeface
```

---

## 📖 ES6+ Quick Reference

> **`var`** → Function-scoped. Can be redeclared and updated. Avoid in modern code.

> **`let`** → Block-scoped. Can be updated but not redeclared in the same scope.

> **`const`** → Block-scoped. Cannot be updated or redeclared. Use for fixed values.

> **Spread `...`** → Expands an array or object's elements into another. Great for copying and merging.

> **`map()`** → Returns a new array where each item has been transformed by a callback.

> **`filter()`** → Returns a new array with only the items that pass a condition.

> **`forEach()`** → Loops through items and runs a callback. Returns nothing.

> **Arrow function `=>`** → Concise function syntax. Inherits `this` from its surrounding context.

> **Template literals** → Backtick strings with `${}` for embedding expressions inline.

---

## 👤 Developer

<div align="center">

**Saharia Hassan Safin**

[![GitHub](https://img.shields.io/badge/GitHub-Safin313--stack-181717?style=flat&logo=github)](https://github.com/Safin313-stack)

*Turning API responses into clean interfaces, one fetch() at a time 🚀*

</div>

---

## 📜 License

```
MIT License — Free to use, modify, and distribute.
© 2025 Saharia Hassan Safin
```

---

<div align="center">

⭐ **Found this useful? Star the repo — it helps a lot!**

</div>







QUESTION SOLUTION ->>>>>>


1. Answer:-> "var" is function-scoped and can be redeclared, "let" is block-scoped and can be updated but not redeclared, and "const" is block-scoped and cannot be updated or redeclared.

2. Answer:-> The spread operator is used to expand elements of an array or object into another array or object.

3. Answer:-> "map()" creates a new array by transforming items, "filter()" creates a new array based on a condition, and "forEach()" simply loops through items without returning a new array.

4. Answer:-> An arrow function is a shorter syntax for writing functions in JavaScript using "=>".

5. Answer:-> Template literals are strings written with backticks (`) that allow embedding variables using "${}".
