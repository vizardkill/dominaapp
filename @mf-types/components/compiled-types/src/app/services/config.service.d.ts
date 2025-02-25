export interface EnvConfigurationModel {
    userApiUrl?: string;
    userApiToken?: string;
    userApiRef?: string;
}
export declare const EnvConfiguration: () => EnvConfigurationModel;
export declare class ConfigService {
    private static instance;
    private readonly environment;
    private constructor();
    static getInstance(): ConfigService;
    get(env: keyof EnvConfigurationModel): string | undefined;
    getOrThrow(env: keyof EnvConfigurationModel): string;
}
