#  Online Health Care Management System

This repository contains the frontend code for the **Online Healthcare Management System**, built using modern JavaScript tools. The project includes reusable components, UI pages, and functionality required for the healthcare portal.

---

##  Project Structure

```
Hospital/
├── cards_compo/          # UI card components
├── function/             # JS logic & helper functions
├── ui_project/           # UI pages and layouts
├── node_modules/         # Dependencies
├── package.json          # Project metadata & dependencies
└── package-lock.json     # Dependency lockfile
```

---

##  Features (Frontend Only)

- User-friendly interfaces for:
  - Patients  
  - Doctors  
  - Admins  
- Components for appointments, profiles, dashboards
- Organized UI layout stored in `ui_project`
- Reusable components inside `cards_compo`
- Helper functions inside `function` folder

---

##  Tech Stack

- **JavaScript**
- **Node.js**
- **npm**
- HTML, CSS (inside components)
- React-like component structure (if React is used — modify as needed)

---

##  Installation & Setup

### 1️⃣ Install Node.js  
Make sure Node.js & npm are installed.

Check version:
```bash
node -v
npm -v
```

---

### 2️⃣ Install Dependencies

Inside the `Hospital` folder, run:

```bash
npm install
```

This installs everything listed in `package.json`.

---

### 3️⃣ Start the Project

If a start script exists in `package.json`, run:

```bash
npm start
```

Typical URLs:
```
http://localhost:3000/
```

If there is no start script, manually open HTML files from the `/ui_project` folder in the browser.

---

##  Scripts

Run available npm scripts using:
```bash
npm run <script-name>
```

Check all scripts in `package.json`.

---

##  How to Modify

### Components (`/cards_compo`)
Add or update UI card components here.

### Functions (`/function`)
Place reusable JavaScript logic here.

### UI Pages (`/ui_project`)
Edit main pages, layouts, and templates.

---

##  Requirements

- Node.js 16+
- npm 8+
- Browser (Chrome recommended)
- Code editor (VS Code recommended)

---

##  Contributing

1. Fork this repo  
2. Create a new branch  
3. Make your updates  
4. Submit a pull request  

---

##  License

This project is for learning and development use.

