import '@testing-library/jest-dom'

module.exports = {
  testsEnvironment: 'node',
  testMatch: ['**/*.test.js'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transformIgnorePatterns: ['/node_modules/'],
  verbose: false,
  clearMocks: true
}
