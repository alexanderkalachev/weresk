const plugin = require("tailwindcss/plugin");

const utils = plugin(
    function ({ addVariant }) {
        // Base
        // const baseStyles = {};

        // Create styles
        // addBase(sortStyles(baseStyles));

        addVariant("svg", "& > svg");
    }
    // {
    //     theme: {}
    // }
);

module.exports = utils;
