const { app, BrowserWindow, ipcMain } = require("electron")
const path = require("path");

/* Main crate window */
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  /* Main app read */
  mainWindow.loadFile(path.join(__dirname, "./index.html"));
  //mainWindow.webContents.openDevTools();
}

/* Electron app activate  */
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

/* Electron app quit */
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

/* IPC
ipcMain.handle(<cannel>, (event, <args>) => {
  return <args>;
});
*/
ipcMain.handle("docText", (event, data) => {
  return data;
});
