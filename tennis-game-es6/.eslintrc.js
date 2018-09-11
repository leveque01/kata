module.exports = {
    extends: 'airbnb-base',
    env: {
        es6: true,
        browser: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 6,
    },
    rules: {
        "import/prefer-default-export": "off"
    }
};