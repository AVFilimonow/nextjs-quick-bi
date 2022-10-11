const { fonts, colors } = require("./theme");
module.exports = {
    content: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: colors,
            fontSize: fonts,
            screens: {
                md: "800px",
                // => @media (min-width: 992px) { ... }
            },
        },
    },
    variants: {
        extend: {},
    },
};
