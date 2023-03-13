/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["../layouts/**/*.html"],
    darkMode: "media",
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            theme: "#94615c",
            "light-primary": "#fdf2e6",
            "light-secondary": "#efe0d0",
            "light-tertiary": "#11111140",
            "light-text": "#111111",
            "dark-primary": "#272a32",
            "dark-secondary": "#202022",
            "dark-tertiary": "#cccccc40",
            "dark-text": "#cccccc",
            "no-script": "#ff6600",
        },
        extend: {}
    },
    plugins: []
};
