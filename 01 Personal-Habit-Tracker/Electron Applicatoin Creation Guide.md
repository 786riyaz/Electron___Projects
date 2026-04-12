Here is the **Complete Electron + React Desktop App Commands Cheat Sheet** 🚀

---

# 🧱 1. Create Electron App

```bash
npx create-electron-app my-app
```

Go inside project:

```bash
cd my-app
```

Run Electron app:

```bash
npm start
```

---

# ⚛️ 2. Create React App (Vite)

Go outside Electron project:

```bash
npm create vite@latest react-app
```

Select:

```
React
JavaScript
```

Install dependencies:

```bash
cd react-app
npm install
```

Run React:

```bash
npm run dev
```

---

# 🔗 3. Move React App into Electron Project

Move React folder inside Electron project:

```
my-app/
 ├── react-app
 ├── src
```

---

# 🏗️ 4. Build React App

```bash
cd react-app
npm run build
```

This creates:

```
react-app/dist
```

---

# ⚙️ 5. Configure React for Electron

Update `vite.config.js`

```js
export default defineConfig({
  base: './',
  plugins: [react()],
})
```

---

# 🧭 6. Use HashRouter (Important)

Install React Router (if not installed):

```bash
npm install react-router-dom
```

Change:

```js
BrowserRouter
```

To:

```js
HashRouter
```

---

# 🖥️ 7. Configure Electron main.js

```js
import { app, BrowserWindow } from 'electron'
import path from 'path'

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800
  })

  if (app.isPackaged) {
    mainWindow.loadFile(
      path.join(process.resourcesPath, 'dist', 'index.html')
    )
  } else {
    mainWindow.loadFile(
      path.join(app.getAppPath(), 'react-app/dist/index.html')
    )
  }
}

app.whenReady().then(createWindow)
```

---

# 📦 8. Configure forge.config.js

```js
module.exports = {
  packagerConfig: {
    extraResource: [
      "react-app/dist"
    ]
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        createDesktopShortcut: true,
        createStartMenuShortcut: true
      }
    }
  ]
}
```

---

# 🏗️ 9. Build React Again

```bash
cd react-app
npm run build
```

---

# 🧪 10. Run Electron

```bash
npm start
```

---

# 📦 11. Create EXE File

```bash
npm run make
```

---

# 📁 EXE File Location

```
my-app/out/make/squirrel.windows/x64/
```

Files:

```
Setup.exe
RELEASES
.nupkg
```

---

# 🔧 12. Fix Network Errors (If Needed)

Clear cache:

```bash
npm cache clean --force
```

Install electron:

```bash
npm install electron --save-dev
```

Run again:

```bash
npm run make
```

---

# 🎨 13. Change App Name

Edit `package.json`

```json
{
  "name": "personal-activity-tracker",
  "productName": "Personal Activity Tracker"
}
```

---

# 🖼️ 14. Add App Icon (Optional)

Create folder:

```
assets/icon.ico
```

Update forge config:

```js
packagerConfig: {
  icon: './assets/icon'
}
```

---

# 🖥️ 15. Install App

Run:

```
my-app-1.0.0 Setup.exe
```

---

# 🧭 16. Open Installed App

Search:

```
Personal Activity Tracker
```

---

# 🚀 Final Build Commands (Production)

```bash
cd react-app
npm run build

cd ..
npm run make
```

---

# 📌 Full Workflow (Short Version)

```bash
npx create-electron-app my-app
npm create vite@latest react-app
cd react-app
npm install
npm run build
cd ..
npm start
npm run make
```

---

# 🎯 What You Achieved

✅ Electron app
✅ React integration
✅ Desktop app
✅ Installer
✅ Desktop shortcut
✅ Installed app

