const js = require("@eslint/js");

module.exports = [
    {
        files: ["js/**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                window: "readonly",
                document: "readonly",
                console: "readonly",
                alert: "readonly",
                localStorage: "readonly",
                fetch: "readonly"
            }
        },
        rules: js.configs.recommended.rules
    }
];