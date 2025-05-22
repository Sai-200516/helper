const { app, BrowserWindow, globalShortcut, ipcMain, Menu, screen } = require('electron');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Gemini client with API key from environment variable
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'gemini_api_key');

let mainWindow;

function createWindow() {
  // Get primary display work area (excludes taskbar)
  const { workArea } = screen.getPrimaryDisplay();

  mainWindow = new BrowserWindow({
    width: 400,
    height: 700,
    // x: workArea.x, // Align with left edge
    // y: workArea.y + workArea.height - 700, // Position at bottom of work area
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
    frame: false,
    alwaysOnTop: true,
    skipTaskbar: true,
  });

  mainWindow.loadFile('index.html');
  Menu.setApplicationMenu(null);
  mainWindow.setContentProtection(true);

  // Register global shortcut
  globalShortcut.register('Control+Shift+H', () => {
    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.show();
      mainWindow.focus();
    }
  });
}

// Handle chatbot queries
ipcMain.handle('chatbot-query', async (event, question) => {
  console.log('Received query:', question); // Debug log
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(question);
    return result.response.text();
  } catch (error) {
    console.error('Gemini API error:', error.message); // Debug log
    return '[Gemini API error] ' + error.message;
  }
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});