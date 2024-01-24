export default {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'node'],
  testRunner: 'jest-circus/runner',
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['/node_modules/'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};
