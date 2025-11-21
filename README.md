# Professional Portfolio

A high-performance, interactive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Glassmorphism, gradients, and smooth animations.
- 🌓 **Dark/Light Mode**: Fully supported with persistent preference.
- 📱 **Responsive**: Flawless experience on mobile, tablet, and desktop.
- ⚡ **Fast**: Optimized with Vite and lazy loading.
- ♿ **Accessible**: Keyboard navigation and reduced motion support.

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion + React Spring
- **3D**: React Three Fiber
- **Icons**: Lucide React
- **Forms**: React Hook Form

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Configuration

Update the data files in `src/data/` to customize the content:
- `skills.js`: Your technical skills.
- `education.js`: Your academic background.
- `projects.js`: Your portfolio projects.

## Environment Variables

Create a `.env` file for EmailJS configuration:
```env
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```
