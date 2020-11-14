const { BrowserWindow, Menu } = require("electron");
const path = require("path");

let mainWindow;
let menuTemplate = [
  {
    label: "menu2",
  },
  {
    label: "quit",
    role: "quit",
    accelerator: "Ctrl+Q",
  },
];
const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });
  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "index.html"));
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

module.exports = { createWindow };
