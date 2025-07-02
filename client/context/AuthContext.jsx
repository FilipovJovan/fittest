// context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import customFetch from "../src/utils/customFetch";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;

      try {
        const res = await customFetch.get("/users/current-user", {
          headers: { "x-api-key": apiKey },
        });
        setUser(res.data.user);
        setIsAuthenticated(true);
      } catch (err) {
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setAuthChecked(true);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, authChecked }}>
      {children}
    </AuthContext.Provider>
  );
};
