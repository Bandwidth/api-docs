module.exports = {
    env: {
        "browser": true,
        "es6": true
    },
    extends: [
        'airbnb',
        "plugin:@typescript-eslint/eslint-recommended",
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended' // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.

    ],
    globals: {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    settings: {
        "import/resolver": {
            typescript: {} // this loads <rootdir>/tsconfig.json to eslint
        },
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        "no-console": "off",
        eqeqeq: 2,
        '@typescript-eslint/no-unused-vars': ["warn", {
            "vars": "all",
            "args": "after-used",
            "ignoreRestSiblings": false
        }],
        "no-unused-vars": 1,
        "import/extensions": ['error', "never"]
    }
}