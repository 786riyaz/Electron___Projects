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