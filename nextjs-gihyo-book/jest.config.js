const nextJest = require('next/jest')
const createJestConfig = nextJest({dir: './'})
const customJestConfig = {
    testPathIgnorePatterns:['<rootDir>/.next','<rootDir>/node_module'],
    setupFilesAfterEnv:['<rootDir>/jest.setup.js'],
    moduleDirectories:['node_modules','<rootDir>/src'],
    testEnvironment:'jsdom',
}
module.exports = createJestConfig(customJestConfig)