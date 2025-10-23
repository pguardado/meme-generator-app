# Meme Generator App

A simple, interactive **React + Vite** application that lets users create custom memes by overlaying text on random meme images.  
Built as a front-end project to demonstrate **React component design, state management, and API integration**.

---

## Features

- **Dynamic Meme Generator** — Fetches random meme images from the [Imgflip API](https://api.imgflip.com/get_memes).
- **Text Overlay** — Add and edit top/bottom text dynamically.
- **React Hooks** — Uses `useState`, `useEffect`, and event handlers to manage meme data.
- **Reusable Components** — Modular design with clear separation of concerns.
- **Responsive Layout** — Clean, simple CSS that adapts to different screen sizes.
- ⚡ **Fast Development** — Powered by Vite for instant updates and modern bundling.

---

## Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | React, Vite, JSX, CSS Modules |
| **API** | Imgflip Meme API |
| **Tooling** | npm, ES Modules, Vite Dev Server |

---

## Project Structure

- **public/** — static assets and Vite logo
- **src/**
  - **components/** — reusable UI components (form, button, meme display)
  - **assets/** — local images or meme backgrounds
  - **App.jsx** — main React component controlling state and layout
  - **App.css** — global styling for layout and meme formatting
  - **main.jsx** — app entry point that mounts React
- **vite.config.js** — Vite configuration (dev server and build)
- **package.json** — dependencies and npm scripts
- **README.md** — documentation for the project


