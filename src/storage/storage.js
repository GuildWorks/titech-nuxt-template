import LocalStorage from "./local-storage.js";
import MemoryStorage from "./memory-storage.js";

export default function StorageFactory(options) {
  switch (options.storageType) {
    case "localStorage":
      try {
        window.localStorage.setItem("testKey", "test");
        window.localStorage.removeItem("testKey");
        return new LocalStorage(options.storageNamespace);
      } catch (e) {
        console.log("localStorageが未対応のブラウザです");
      }
      break;
    case "memoryStorage":
    default:
      return new MemoryStorage(options.storageNamespace);
  }
}
