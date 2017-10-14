module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "linebreak-style":["error", "windows"],
        "no-console":0,
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
        "react/jsx-no-undef":0,
        "no-nested-ternary":0,
        "no-shadow":0,
        "react/prop-types":0,
        "no-underscore-dangle":0,
        "class-methods-use-this":0,
    },
};
