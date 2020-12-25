
export const enum StorageTypeUnit {
    JSON = "JSON",
    STRING = "STRING"
}


export interface StorageConfig {
    storageType: StorageTypeUnit;
    storageKey: string;
    storageData: JSON | string;
}

export interface GetStorageConflig {
    storageType: StorageTypeUnit;
    storageKey: string;
}