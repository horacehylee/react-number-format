module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
    // "^.+\\.jsx?$": "babel-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupTestFrameworkScriptFile: "./node_modules/jest-enzyme/lib/index.js"
};
