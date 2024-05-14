import AsyncStorage from "@react-native-async-storage/async-storage";

export const _getItem = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return  JSON.parse(value); ;
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
    if (typeof value !== "string") {
      await AsyncStorage.mergeItem(key, JSON.stringify(value));
    }
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
