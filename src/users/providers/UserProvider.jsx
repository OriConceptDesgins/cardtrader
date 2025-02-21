import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getToken, getUser } from "../services/localStorageService";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(getToken());

  useEffect(() => {
    if (!user) {
      const userFromLocalStorage = getUser();
      setUser(userFromLocalStorage);
    }
  }, [user]);

  const value = useMemo(
    () => ({ user, setUser, token, setToken }),
    [user, token]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUserProvider = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUserProvider must be used within a Provider");
  return context;
};
