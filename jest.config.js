module.exports = {
    testMatch: [
        '<rootDir>/test/runner.ts'
    ],
    transform: {
        '^.+\\.[tj]s$': ['ts-jest', {
            tsconfig: '<rootDir>/test/tsconfig.json',
        }]
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory: '../coverage/',
};
