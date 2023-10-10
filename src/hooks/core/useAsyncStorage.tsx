import AsyncStorage from "@react-native-async-storage/async-storage";

const useAsyncStorage = () => {
  const asyncStorageSetItem = async <T,>(key: string, value: T): Promise<boolean> => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (exception) {
      return false;
    }
  };

  const asyncStorageGetItem = async <T,>(key: string): Promise<T | null> => {
    try {
      const retrievedItem = await AsyncStorage.getItem(key);
      if (retrievedItem) return JSON.parse(retrievedItem) as T;
      return null;
    } catch (error) {
      return null;
    }
  };

  const asyncStorageRemoveItem = async (key: string): Promise<boolean> => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  };

  return {
    asyncStorageSetItem,
    asyncStorageGetItem,
    asyncStorageRemoveItem,
  };
};

export default useAsyncStorage;
