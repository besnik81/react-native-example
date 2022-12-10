import {createContext, useState, useCallback, useContext, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const INITIAL = {
  user: {
    isLoggedIn: false,
    username: null,
  },
  login: () => {},
  logout: () => {},
};

const UserContext = createContext(INITIAL);

export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    isLoggedIn: false,
    username: null,
  });

  useEffect(() => {
    AsyncStorage.getItem("token").then(token => {
      setUser({
        isLoggedIn: !!token,
        username: null,
      });
    });
  }, []);

  const logout = useCallback(() => {
    AsyncStorage.removeItem("token").then(() => {
      setUser({
        isLoggedIn: false,
        username: null,
      });
    })
  }, []);

  console.log({ user });

  const login = useCallback(() => {
    setUser({
      isLoggedIn: true,
      username: null,
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
