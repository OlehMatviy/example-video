module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@app": "./src",
        },
      },
    ],
    [
      "react-native-reanimated/plugin",
      {
        globals: ["__scanCodes"],
      },
    ],
  ],
  presets: ["module:metro-react-native-babel-preset"],
};
