module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/**/*.test.{js,jsx}",
  ],
  testEnvironment: "node",
  testMatch: [
    "<rootDir>/_tests_/**/*.test.{js,jsx}"
  ],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        "outputDirectory": "test-reports",
        "outputName": "junit.xml"
      }
    ]
  ]
};
