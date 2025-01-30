module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/**/*.test.{js,jsx}",
  ],
  testEnvironment: "node",
  testMatch: [
    "<rootDir>/tests/**/*.test.{js,jsx}"
  ]
};
