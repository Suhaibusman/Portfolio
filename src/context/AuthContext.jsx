import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const ADMIN_CREDENTIALS_KEY = "portfolio_admin_creds";
const AUTH_STATE_KEY = "portfolio_admin_auth";

const DEFAULT_CREDENTIALS = {
  username: "admin",
  password: "suhaib123",
  name: "Muhammad Suhaib Usman",
  role: "Lead Developer & Owner",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check local storage for persistent session
    try {
      const savedAuth = localStorage.getItem(AUTH_STATE_KEY);
      if (savedAuth) {
        setUser(JSON.parse(savedAuth));
      }
      // Ensure default credentials exist
      if (!localStorage.getItem(ADMIN_CREDENTIALS_KEY)) {
        localStorage.setItem(ADMIN_CREDENTIALS_KEY, JSON.stringify(DEFAULT_CREDENTIALS));
      }
    } catch (e) {
      console.error("Failed to load auth session", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = (username, password) => {
    try {
      const storedCreds = JSON.parse(
        localStorage.getItem(ADMIN_CREDENTIALS_KEY) || JSON.stringify(DEFAULT_CREDENTIALS)
      );

      if (
        (username.trim().toLowerCase() === storedCreds.username.toLowerCase() ||
          username.trim().toLowerCase() === "suhaib") &&
        password === storedCreds.password
      ) {
        const authUser = {
          username: storedCreds.username,
          name: storedCreds.name,
          role: storedCreds.role,
          avatar: storedCreds.avatar,
          loggedInAt: new Date().toISOString(),
        };
        setUser(authUser);
        localStorage.setItem(AUTH_STATE_KEY, JSON.stringify(authUser));
        return { success: true, message: "Welcome back, Suhaib!" };
      }
      return { success: false, message: "Invalid username or password. Default is admin / suhaib123" };
    } catch (err) {
      return { success: false, message: "An error occurred during authentication" };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_STATE_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
