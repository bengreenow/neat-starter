module.exports = {
    purge: {
        mode: "all",
        content: ["./**/*.html"],
        options: {
            whitelist: [],
        },
    },
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {},
        },
        fontFamily: {
            sans: ["Roboto", "sans-serif"],
            display: ["Work Sans", "sans-serif"],
        },
    },
    variants: {},
    plugins: [require("@tailwindcss/typography")],
};
