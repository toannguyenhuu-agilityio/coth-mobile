module.exports = {
  preset: 'jest-expo',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native|@react-navigation|expo(nent)?|@expo(nent)?/.*|react-clone-referenced-element|react-native-svg))',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],

  // Include only these directories for coverage
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    'src/screens/**/*.{ts,tsx}',
    'src/hooks/**/*.{ts,tsx}',
    'src/utils/**/*.{ts,tsx}',
    'src/stores/**/*.{ts,tsx}',
    'src/lib/**/*.{ts,tsx}',
  ],

  // Exclude patterns
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'src/constants/',
    'src/mocks/',
    'src/types/',
    'jest.config.js',
    'src/storybook/',
    `\\.stories\\.(ts|tsx|js|jsx)$`,
    `\\.storybook/`,
  ],
};
