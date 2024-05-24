import { jwtDecode } from "jwt-decode";

const TOKEN = "my token";
const INFO = "info";	

export const setTokenInLocalStorage = (encryptedToken) => {
  localStorage.setItem(TOKEN, encryptedToken);
};

export const setInfoInLocalStorage = (userInfo) => {
  localStorage.setItem(INFO, userInfo);
}

export const removeToken = () => localStorage.removeItem(TOKEN);

export const removeInfo = () => localStorage.removeItem(INFO);

export const getToken = () => localStorage.getItem(TOKEN);

export const getUser = () => {
  try {
    const myToken = getToken();
    return jwtDecode(myToken);
  } catch (error) {
    return null;
  }
};

export const getInfo = () => localStorage.getItem(INFO);
