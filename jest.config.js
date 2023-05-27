module.exports = {
    projects: ['<rootDir>/src'],
    testMatch: [
        '**/__tests__/**/*.(ts|tsx)',
        '**/?(*.)+(spec|test).(ts|tsx)',
    ],
    transform: {
        '^.+\\.[tj]s$': ['ts-jest', {
            tsconfig: '<rootDir>/tsconfig.spec.json',
        }]
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory: '../coverage/',
};
