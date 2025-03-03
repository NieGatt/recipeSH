import type { Config } from 'jest';

const config: Config = {
    extensionsToTreatAsEsm: [".ts"],
    moduleFileExtensions: ["ts", "js"],
    verbose: true,
    preset: "ts-jest",
    rootDir: "src",
    testRegex: "*\\.spec\\.ts$"
};

export default config;