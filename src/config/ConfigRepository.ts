export interface ConfigRepository {

    hasNewConfig(): Promise<boolean>
    fetchNewConfig(): Promise<void>

    saveArtifact(name: string, path: string, data: object): Promise<void>
    loadArtifact(name: string, path: string): Promise<object | undefined>
}