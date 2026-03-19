<div align="center">

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,50:161b22,100:21262d&height=200&section=header&text=GitHub+Issue+Tracker&fontSize=48&fontColor=ffffff&fontAlignY=38&desc=Login+protected+issue+dashboard+powered+by+the+GitHub+API&descAlignY=60&descSize=15&descColor=8b949e" width="100%"/>

<br/>

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub API](https://img.shields.io/badge/GitHub%20API-181717?style=flat-square&logo=github&logoColor=white)](https://docs.github.com/en/rest)
[![MIT License](https://img.shields.io/badge/License-MIT-22c55e?style=flat-square)](LICENSE)
[![Deployed](https://img.shields.io/badge/Deployed-GitHub%20Pages-0ea5e9?style=flat-square&logo=github)](https://safin313-stack.github.io/Assingment-B13-A5-Github-Issue-Tracker/)
[![PH Batch](https://img.shields.io/badge/Programming%20Hero-Batch%2013-f97316?style=flat-square)](https://web.programming-hero.com)

<br/>

<a href="https://safin313-stack.github.io/Assingment-B13-A5-Github-Issue-Tracker/">
  <img src="https://img.shields.io/badge/-%F0%9F%90%9B%20%20LIVE%20DEMO%20%20%E2%86%92-21262d?style=for-the-badge&logoColor=white" alt="Live Demo" height="42"/>
</a>

<br/>
<sub>✦ No login &nbsp;·&nbsp; No install &nbsp;·&nbsp; Opens instantly in your browser ✦</sub>

<br/><br/>

</div>

---

<div align="center">

### 🐛 What You Get

| 🔐 Login Page | 🌐 GitHub API | 🔍 Search | 🗂️ Tab Filter | 🪟 Issue Modal | ⏳ Spinner |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Credential-protected entry with demo autofill | Fetches real live issues from GitHub REST API | Filter issues by keyword in real time | Toggle between All / Open / Closed | Full issue details on click in overlay modal | Smooth loading indicator while data fetches |

</div>

---

## 🖥️ App Flow

```
╔══════════════════════════════════════════════════════════╗
║                  🔐 Login Page                           ║
║                                                          ║
║   Username :  [ admin         ]                          ║
║   Password :  [ •••••••••     ]                          ║
║                                                          ║
║        [ Sign in ]     [ Use demo → ]                    ║
╠══════════════════════════════════════════════════════════╣
║            authenticated  ↓                             ║
╠══════════════════════════════════════════════════════════╣
║  🐙 GitHub Issues Tracker         [ 🔍 Search ]          ║
╠══════════════════════════════════════════════════════════╣
║   [ All ]  [ Open ]  [ Closed ]                          ║
║                                                          ║
║  ╔══════════════════════╗  ╔══════════════════════╗      ║
║  ║  🟢 #42  Bug fix     ║  ║  🔴 #41  Crash fix   ║      ║
║  ║  opened  2 days ago  ║  ║  closed  5 days ago  ║      ║
║  ╚══════════════════════╝  ╚══════════════════════╝      ║
║                                                          ║
║         [ click any card → full detail modal ]           ║
╚══════════════════════════════════════════════════════════╝
```

---

## 🔑 Demo Credentials

```
Username :  admin
Password :  admin123
```

> Click **"Use demo →"** on the login page to autofill instantly

---

## 🧠 JavaScript Concepts in Action

> This project covers core ES6+ concepts applied in a real API-driven app.

### 📦 var vs let vs const

```js
var oldWay  = 'function-scoped, can be redeclared';  // avoid
let counter = 0;                                      // block-scoped, updatable
const API   = 'https://api.github.com/repos/...';    // block-scoped, fixed
```

### 🌊 Spread Operator

```js
const allIssues    = [...openIssues, ...closedIssues];
const updatedIssue = { ...issue, state: 'closed' };
```

### 🔁 map · filter · forEach

```js
const titles  = issues.map(i => i.title);              // transform
const open    = issues.filter(i => i.state === 'open'); // condition
issues.forEach(i => renderCard(i));                    // loop, no return
```

### ➡️ Arrow Functions

```js
const getLabel = (issue) => issue.labels.map(l => l.name).join(', ');

btnLogin.addEventListener('click', () => validateAndLogin());
```

### 🧵 Template Literals

```js
cardsGrid.innerHTML += \`
  <div class="issue-card" data-id="\${issue.number}">
    <h3>\${issue.title}</h3>
    <span class="badge \${issue.state}">\${issue.state}</span>
  </div>
\`;
```

> 📚 References: [MDN Web Docs](https://developer.mozilla.org) · [Google](https://google.com) · [ChatGPT](https://chatgpt.com)

---

## 📁 Project Structure

```
Assingment-B13-A5-Github-Issue-Tracker/
│
├── 📄 index.html          ← Login page · app shell · modal overlay
├── ⚙️  app.js             ← Auth · API fetch · render · search · tabs
├── 🎨 style.css           ← Login card · navbar · grid · modal
│
├── 🖼️  github-logo.png    ← Navbar and login branding
├── 🖼️  Aperture.png       ← Issues panel header icon
├── 🟢 Open-Status.png     ← Open issue status indicator
└── 🔴 Closed-Status.png   ← Closed issue status indicator
```

---

## 🚀 Run It Yourself

**Option 1 — Live (instant, no setup)**

> 🔗 **[https://safin313-stack.github.io/Assingment-B13-A5-Github-Issue-Tracker/](https://safin313-stack.github.io/Assingment-B13-A5-Github-Issue-Tracker/)**

**Option 2 — Clone and open locally**

```bash
git clone https://github.com/Safin313-stack/Assingment-B13-A5-Github-Issue-Tracker.git
cd Assingment-B13-A5-Github-Issue-Tracker
open index.html
```

**Option 3 — VS Code Live Server**

```
1. Install Live Server extension
2. Right-click index.html → Open with Live Server
3. Login with demo credentials and explore ✅
```

---

## 🛠️ Tech Stack

```
┌──────────────────────────────────────────────────┐
│           Frontend · Zero Dependencies           │
├─────────────────┬────────────────────────────────┤
│  HTML5          │  Semantic structure            │
│  CSS3           │  Custom props · flexbox        │
│  JavaScript     │  Vanilla ES6+ · Fetch API      │
│  GitHub REST API│  Live issue data               │
│  Google Fonts   │  Inter typeface                │
└─────────────────┴────────────────────────────────┘
```

---

## 📖 ES6+ Quick Reference

```
var           → function-scoped · can be redeclared · avoid in modern code
let           → block-scoped · updatable · not redeclarable
const         → block-scoped · fixed · use for values that never change

spread ...    → expands array or object into another
map()         → returns new transformed array
filter()      → returns new filtered array matching a condition
forEach()     → loops through items · returns nothing

arrow =>      → concise function · inherits this from surrounding context
template ``   → backtick strings with ${} for inline expressions
```

---

<div align="center">

## 👤 Developer

<br/>

**Saharia Hassan Safin**
Front-end Developer · Programming Hero Batch 13

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-Safin313--stack-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Safin313-stack)
&nbsp;
[![Live Project](https://img.shields.io/badge/Live%20Project-Visit%20Now-21262d?style=for-the-badge&logo=vercel&logoColor=white)](https://safin313-stack.github.io/Assingment-B13-A5-Github-Issue-Tracker/)

<br/>

*"Turning API responses into clean interfaces, one fetch() at a time"* 🚀

<br/>

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:21262d,50:161b22,100:0d1117&height=120&section=footer" width="100%"/>

<sub>MIT License · © 2025 Saharia Hassan Safin · ⭐ Star this repo if it helped you!</sub>

</div>
