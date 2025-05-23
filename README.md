# Helper

Helper is a desktop chatbot application built with Electron and JavaScript. It integrates with the Gemini AI API to provide intelligent responses to user queries. The application features a compact, always-on-top window that can be toggled with a global shortcut for quick access. Additionally, it is designed to operate discreetly, remaining hidden during screen sharing and not appearing in the taskbar or Task Manager.

## Table of Contents
- [Features](#features)
- [Libraries Used](#libraries-used)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Building the Application](#building-the-application)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Compact, always-on-top chatbot window**: Stays visible above other applications.
- **Global shortcut (Control+Shift+H)**: Quickly show or hide the window.
- **Integration with Gemini AI API**: Provides intelligent chatbot responses.
- **Stealth features**:
  - **Hidden during screen sharing**: The application window is not visible in screen sharing sessions.
  - **No taskbar icon**: The application does not appear in the taskbar.
  - **Not visible in Task Manager**: The application process is designed to be discreet and not easily identifiable in Task Manager.
- **Built with Electron**: Ensures cross-platform compatibility (primarily targeted for Windows).

## Libraries Used
- **Electron**: For building the cross-platform desktop application.
- **@google/generative-ai**: For integrating with the Gemini AI API.
- **javascript-obfuscator**: For optional code obfuscation during the build process.
- **electron-builder**: For packaging the application into an executable.

## Installation
To get started with Helper, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Sai-200516/helper.git
   cd helper
   ```

2. **Install Dependencies**:
   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the required libraries using npm:
   ```bash
   npm install
   ```
   This command installs all necessary dependencies listed in `package.json`, including:
   - `electron`
   - `@google/generative-ai`
   - `electron-builder`
   - `javascript-obfuscator`

3. **Set Up API Key**:
   Helper requires a Gemini AI API key to function. You have two options:
   - **Option 1**: Set the `GEMINI_API_KEY` environment variable:
     - On Unix-like systems (Linux/macOS):
       ```bash
       export GEMINI_API_KEY=your_gemini_api_key
       ```
     - On Windows (Command Prompt):
       ```cmd
       set GEMINI_API_KEY=your_gemini_api_key
       ```
   - **Option 2**: Hardcode the API key in `main.js` by replacing `'gemini_api_key'` with your actual key.

4. **Run the Application**:
   ```bash
   npm start
   ```

## Usage
- Launch the application using `npm start`.
- Type your query into the input field and press **Enter** to send it to the chatbot.
- The chatbot’s response will appear in the chat output area.
- Use the global shortcut **Control+Shift+H** to show or hide the application window.

## Environment Variables
- **`GEMINI_API_KEY`**: Your Gemini AI API key. This must be set before running the application (via environment variable) or hardcoded in `main.js`.

## Building the Application
To create a portable Windows executable:

1. **Set Up API Key**:
   - If you hardcoded the API key in `main.js`, proceed to step 2.
   - If using an environment variable, ensure it’s set in your build environment (e.g., via `export` or `set` commands).

2. **Build the Executable**:
   - **With code obfuscation** (recommended for production):
     ```bash
     npm run dist
     ```
     This runs the `obfuscate` script followed by `electron-builder` to package the app.
   - **Without obfuscation**:
     ```bash
     npx electron-builder --win --x64
     ```
   The built executable will be located in the `dist` folder.

   **Note**: If you hardcode the API key in `main.js`, it will be embedded in the executable. Be cautious when distributing it, as it exposes your API key. For production environments, consider a more secure method to manage API keys.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request on GitHub.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
