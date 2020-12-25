import { Injectable } from '@angular/core';
import { GetStorageConflig, StorageConfig, StorageTypeUnit } from './storageModelPermType';



@Injectable({
  providedIn: 'root'
})
export class NgStorage {

  /**
   @LocalStorage Service
   */


  /**
  @setLocalStorage
  * Set data in local storage
  */
  async setLocalStorage(options: StorageConfig): Promise<any> {
    return await new Promise<any>((resolve, reject) => {
      if (options.storageKey && options.storageType && options.storageData) {
        if (options.storageType == StorageTypeUnit.JSON) {
          this.convertJsonToString(options.storageData);
          this.saveDataInLocalStorage(options.storageKey, this.convertJsonToString(options.storageData))
        }
        else if (options.storageType == StorageTypeUnit.STRING) {
          this.saveDataInLocalStorage(options.storageKey, options.storageData);
        }
        resolve({ error: false, message: "data store successfully" });
      }
      else {
        reject({ error: true, message: "Please check parameters" });
      }

    });
  }

  /**
  @getLocalStorage
  * Get data in local storage
  */
  async getLocalStorage(options: GetStorageConflig): Promise<any> {
    return await new Promise((resolve, reject) => {
      if (window.localStorage.getItem(options.storageKey)) {
        if (options.storageType == StorageTypeUnit.JSON) {
          resolve(this.convertStringToJson(window.localStorage.getItem(options.storageKey)))
        } else if (options.storageType == StorageTypeUnit.STRING) {
          resolve(window.localStorage.getItem(options.storageKey));
        }
      }
      else {
        reject({ error: true, message: options.storageKey + " No data found" });
      }
      reject(new TypeError('Something Wrong'));
    });
  }

  /**
  @removeLocalStorageItem
  * Remove data in local storage
  */
  async removeLocalStorageItem(key: string): Promise<any> {
    return await new Promise((resolve, reject) => {
      if (key) {
        window.localStorage.removeItem(key);
        resolve({ error: false, message: key + " removed successfully" });
      }
      else {
        reject({ error: true, message: "Please pass key to remove" });
      }
    })
  }

  /**
  @getLocalStorageLength
  * Get total local storage
  */
  async getLocalStorageLength(): Promise<any> {
    return await new Promise((resolve, reject) => {
      if (window.localStorage.length > 0) {
        resolve({ error: false, session: window.localStorage.length });
      }
      else {
        reject({ error: true, message: " No local storage stored" });
      }
    })
  }

  /**
  @getLocalStorageAllKey
  * Get all local storage KEY list
  */
  async getLocalStorageAllKey(): Promise<any> {
    return await new Promise((resolve, reject) => {
      if (window.localStorage.length > 0) {
        let allLocalStorageKeyList: Array<{ keyName: string, keyIndex: number }> = [];
        for (let index = 0; index < window.localStorage.length; index++) {
          allLocalStorageKeyList.push({
            keyIndex: index,
            keyName: window.localStorage.key(index)
          });
          resolve(allLocalStorageKeyList);
        }
      }
      else {
        reject({ error: true, message: " No local storage stored" });
      }
    })
  }



  /**
     @SessionStorage Service
  */


  /**
  @setSessionStorage
  * Set data in session storage
  */
  async setSessionStorage(options: StorageConfig): Promise<any> {
    return await new Promise<any>((resolve, reject) => {
      if (options.storageKey && options.storageType && options.storageData) {
        if (options.storageType == StorageTypeUnit.JSON) {
          this.convertJsonToString(options.storageData);
          this.saveDataInSessionStorage(options.storageKey, this.convertJsonToString(options.storageData))
        }
        else if (options.storageType == StorageTypeUnit.STRING) {
          this.saveDataInSessionStorage(options.storageKey, options.storageData);
        }
        resolve({ error: false, message: "data store successfully" });
      }
      else {
        reject({ error: true, message: "Please check parameters" });
      }

    });
  }

  /**
  @getSessionStorage
  * Get data in session storage
  */
  async getSessionStorage(options: GetStorageConflig): Promise<any> {
    return await new Promise((resolve, reject) => {
      if (window.sessionStorage.getItem(options.storageKey)) {
        if (options.storageType == StorageTypeUnit.JSON) {
          resolve(this.convertStringToJson(window.sessionStorage.getItem(options.storageKey)))
        } else if (options.storageType == StorageTypeUnit.STRING) {
          resolve(window.sessionStorage.getItem(options.storageKey));
        }
      }
      else {
        reject({ error: true, message: options.storageKey + " No data found" });
      }
      reject(new TypeError('Something Wrong'));
    });
  }

  /**
  @getSessionStorageLength
  * Get total session storage
  */
  async getSessionStorageLength(): Promise<any> {
    return await new Promise((resolve, reject) => {
      if (window.sessionStorage.length > 0) {
        resolve({ error: false, session: window.sessionStorage.length });
      }
      else {
        reject({ error: true, message: " No session stored" });
      }
    })
  }

  /**
  @getSessionStorageAllKey
  * Get all session storage KEY list
  */
  async getSessionStorageAllKey(): Promise<any> {
    return await new Promise((resolve, reject) => {
      if (window.sessionStorage.length > 0) {
        let allSessionStorageKeyList: Array<{ keyName: string, keyIndex: number }> = [];
        for (let index = 0; index < window.sessionStorage.length; index++) {
          allSessionStorageKeyList.push({
            keyIndex: index,
            keyName: window.sessionStorage.key(index)
          });
          resolve(allSessionStorageKeyList);
        }
      }
      else {
        reject({ error: true, message: " No session storage stored" });
      }
    })
  }







  private convertJsonToString(json): string {
    return JSON.stringify(json);
  }

  private convertStringToJson(stringData): JSON {
    return JSON.parse(stringData);
  }

  private saveDataInLocalStorage(storageName, storageData) {
    window.localStorage.setItem(storageName, storageData)
  }

  private saveDataInSessionStorage(storageName, storageData) {
    window.sessionStorage.setItem(storageName, storageData)
  }

}
