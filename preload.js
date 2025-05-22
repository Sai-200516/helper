const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  chatbotQuery: (question) => ipcRenderer.invoke('chatbot-query', question)
});

