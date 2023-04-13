/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["../layouts/**/*.html"],
    darkMode: "class",
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            theme: "#94615c",
            "light-primary": "#ffffff",
            "light-secondary": "#f4f4f4",
            "light-tertiary": "#0b0b0b40",
            "light-text": "#0b0b0b",
            "dark-primary": "#222222",
            "dark-secondary": "#2d2d2d",
            "dark-tertiary": "#e4e4e440",
            "dark-text": "#e4e4e4",
            "no-script": "#ff6600",
        },
        extend: {}
    },
    plugins: []
};
