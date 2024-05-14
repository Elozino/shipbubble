import AsyncStorage from "@react-native-async-storage/async-storage";

export const _getItem = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.log(error);
  }
};

export const _setItem = async (
  key: string,
  value: { [x: string]: unknown }
) => {
  try {
    if (typeof value === "string") {
      await AsyncStorage.setItem(key, value);
    } else {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    }
  } catch (error) {
    console.log("error: ", error);
  }
};

export const _mergeItem = async (
  key: string,
  value: { [x: string]: unknown }
) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.mergeItem(key, jsonValue);
  } catch (error) {
    console.log("error: ", error);
  }
};

export const _removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log("error: ", error);
  }
};

export const _addObjectToArray = async (key: string, newObj: object) => {
  try {
    const existingArrayString = await AsyncStorage.getItem(key);
    let updatedArray = [];
    if (existingArrayString) {
      updatedArray = JSON.parse(existingArrayString);
    }
    updatedArray.push(newObj);
    const updatedArrayString = JSON.stringify(updatedArray);
    await AsyncStorage.setItem(key, updatedArrayString);
  } catch (error) {
    console.log("Error adding object to array in AsyncStorage:", error);
  }
};

export const _clearAllItems = async () => AsyncStorage.clear();
