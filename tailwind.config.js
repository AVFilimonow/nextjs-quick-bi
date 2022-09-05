const { fonts, colors } = require("./theme");
module.exports = {
    content: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: colors,
            fontSize: fonts,
        },
    },
    variants: {
        extend: {},
    },
};
