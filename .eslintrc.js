module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "linebreak-style": 0,
    "jsx-a11y/media-has-caption": [ 2, {
            "audio": [ "Audio" ],
            "video": [ "Video" ],
            "track": [ "Track" ],
          }],
  }
};
