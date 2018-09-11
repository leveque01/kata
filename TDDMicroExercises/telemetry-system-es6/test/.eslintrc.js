module.exports = {
    extends: 'airbnb-base',
    env: {
        mocha: true,
    },
    parserOptions: {
        ecmaVersion: 6,
    },
    "plugins": [
        "chai-friendly"
    ],
    "rules": {
        "no-unused-expressions": 0,
        "chai-friendly/no-unused-expressions": 2
    }
};