/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["../layouts/**/*.html"],
    darkMode: "class",
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            theme: "#94615c",
            "light-primary": "#FAF7F5",
            "light-secondary": "#EEEAE6",
            "light-tertiary": "#26143240",
            "light-text": "#261432",
            "dark-primary": "#20161F",
            "dark-secondary": "#120C12",
            "dark-tertiary": "#D8C7D940",
            "dark-text": "#D8C7D9",
            "no-script": "#ff6600",
        },
        extend: {}
    },
    plugins: []
};
