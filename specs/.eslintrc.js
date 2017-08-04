var OFF = 0, WARN = 1, ERROR = 2;
module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "max-len": [ERROR, 140],
    "indent": [
      "error",
      4
    ],
    "brace-style": [ERROR, "stroustrup"],
    "func-call-spacing": [ERROR, "never"],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};