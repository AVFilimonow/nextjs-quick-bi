const { fonts, colors } = require("./theme");
module.exports = {
    content: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: colors,
            fontSize: fonts,
            screens: {
                sm: "550px",
                // => @media (min-width: 800px) { ... }
                md: "800px",
                // => @media (min-width: 800px) { ... }
                lg: "1600px",
                // => @media (min-width: 1600px) { ... }
            },
            animation: {
                "spin-slow": "spin 35s linear infinite",
            },
        },
    },
    variants: {
        extend: {},
    },
};
