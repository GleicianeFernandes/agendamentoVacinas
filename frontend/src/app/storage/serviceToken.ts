import * as SecureStore from "expo-secure-store";

export const getToken = async ( sessionKey: string ) => {
  try {
    return SecureStore.getItem(sessionKey);
  } catch (e) {
    throw e;
  }
};

export const saveToken = async (sessionKey: string, value: string) => {
  try {
    return SecureStore.setItemAsync(sessionKey, value);
  } catch (e) {
    throw e;
  }
};

export const cachedToken = { getToken, saveToken };