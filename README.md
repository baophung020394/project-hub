# Project Hub

## Overview

This project is built using a component-based architecture. Each section of the website, such as the header, filter, tabs, profile card, and more, is designed as a separate component to promote code reusability and maintainability. The project requires a local server to load components dynamically.

## Prerequisites

- [Visual Studio Code (VS Code)](https://code.visualstudio.com/)
- [Live Server Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## Setup Instructions

1. **Install Live Server Extension**
   - Open VS Code.
   - Go to the Extensions view by clicking on the square icon in the sidebar or by pressing `Ctrl+Shift+X`.
   - Search for "Live Server" and click "Install" to add the extension.

2. **Run the Project**
   - Right-click on the `index.html` file in the root folder.
   - Select "Open with Live Server" from the context menu.
   - The project should now be accessible at: [http://127.0.0.1:5500/%20index.html](http://127.0.0.1:5500/%20index.html).

   > **Note:** The project cannot be run directly by opening the `index.html` file in the browser because it is built using a component-based design. The components are loaded dynamically through JavaScript, requiring a local server to serve the files.

## Project Structure

```plaintext
project-root/
├── components/        # Contains individual component files (HTML, CSS, JavaScript)
│   ├── header.html
│   ├── filter.html
│   ├── tabs.html
│   └── ...
├── css/               # Global and component-specific styles
│   ├── styles.css
│   ├── header/
│   │   └── index.css
│   └── ...
├── js/                # JavaScript files for loading components and adding interactive behavior
│   ├── header/
│   │   └── index.js
│   └── ...
├── assets/            # Images and icons
│   ├── icons/
│   └── images/
└── index.html         # Main entry point
