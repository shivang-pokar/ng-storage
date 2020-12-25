# NgStorage

[![GitHub license](https://img.shields.io/github/license/shivang-pokar/ng-storage)](https://github.com/shivang-pokar/ng-storage/blob/master/LICENSE)
[![NgStorage](https://img.shields.io/badge/NgStorage-V.1.0.0-blueviolet)](https://github.com/shivang-pokar/ng-storage)


An Angular module that makes Web Storage working in Angular way.

##  Install

### NPM
```bash
npm i ng-storage-local
```

##  Setup

Then edit your NgModule declaration in `src/app/app.module.ts` to add `NgStorageModule` as an import:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// Import It
import { NgStorageModule } from 'ng-storage-local';

 
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgStorageModule], //  Include here
  bootstrap: [AppComponent],
})
export class MyAppModule {}
```

## Usage

Now, you can easily use `NgStorage` into a component:

```typescript
import { Component } from '@angular/core';
import { NgStorage, StorageConfig, StorageTypeUnit } from 'ng-storage-local'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class AppComponent {
    storageOption: StorageConfig;
    getStorageOption: GetStorageConflig;
    constructor(public ngStorage: NgStorage) {
    
    }
}

```
To store item use `setLocalStorage`

```javascript
this.storageOption = {
    storageData: "data you want to store",
    storageKey: "KEY",
    storageType: StorageTypeUnit.STRING // Type STRING || JSON  
}
this.ngStorage.setLocalStorage(this.storageOption).then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
});
```

To get item use `getLocalStorage`

```javascript
this.getStorageOption = {
    storageKey: "KEY",
    storageType: StorageTypeUnit.STRING // Type STRING || JSON  
}
this.ngStorage.getLocalStorage(this.getStorageOption).then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
});
```

### Other Functions

| Functions | Description |
| --- | --- |
| `removeLocalStorageItem(key).then(() => { })` | To **remove** Local Store Item |
| `getLocalStorageLength().then(() => { })` | To get **Local Store length** |
| `getLocalStorageAllKey().then(() => { })` | To get **All Local Store** |
| `clearAllLocalStorage().then(() => { })` | To clear **All Local Store** |
| `setSessionStorage(options).then(() => { })` | To set **Session Store** and **options** same as local storage |
| `getSessionStorage(options).then(() => { })` | To get **Session Store** and **options** same as local storage |
| `getSessionStorageLength().then(() => { })` | To get **Session Store length** |
| `getSessionStorageAllKey().then(() => { })` | To get **All Session Store** |
| `removeSessionStorageItem(key).then(() => { })` | To **remove** Session Store Item |
| `clearAllSessionStorage().then(() => { })` | To clear **All Session Store** |