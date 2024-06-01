import { useCallback, useState } from "react";
import { useUserProvider } from "../providers/UserProvider";
import { login, signup, getUserData, updateUser } from "../services/usersApiService";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
  setInfoInLocalStorage,
} from "../services/localStorageService";

import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";


export default function useUserProfile(){
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();
  const { setUser, setToken, user} = useUserProvider();


  
  const handleLogin = useCallback(
    async (userLoginData) => {
      setIsLoading(true);
      try {
        const token = await login(userLoginData);
        setTokenInLocalStorage(token);
        setToken(token);
        setUser(getUser());
        navigate(ROUTES.CARDS);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [setToken, setUser, navigate]);

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
  }, [setUser]);

  const handleSignup = useCallback(
    async (userDataFromClient) => {
      setIsLoading(true);
      try {
        const normalizedUserData = normalizeUser(userDataFromClient);
        await signup(normalizedUserData);
        await handleLogin({
          email: userDataFromClient.email,
          password: userDataFromClient.password,
        });
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [handleLogin]);

  const handleGetUserInfo = useCallback(
    async () => {
      setIsLoading(true);
      try {
        const userInfo = await getUserData(user._id);
        setInfoInLocalStorage(userInfo);
        setUserInfo(userInfo);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [user]);


  const handleEditSubmit =  useCallback(
    async (userDataFromClient) => {
      setIsLoading(true);
      try {
        const normalizedUserData = normalizeUser(userDataFromClient);
        await updateUser(normalizedUserData);
        await handleLogin({
          email: userDataFromClient.email,
          password: userDataFromClient.password,
        });
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [handleLogin]);

  return {userInfo, isLoading, error, handleLogin, handleLogout, handleSignup , handleGetUserInfo, handleEditSubmit};
}

