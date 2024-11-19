import React, { createContext, useReducer, useContext, useEffect } from "react";

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  username: null,
  lastPage: localStorage.getItem("lastPage") || "/",
};

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true, username: payload?.username };
    case "LOGOUT":
      return { ...initialState, lastPage: "/" };
    case "SET_LAST_PAGE":
      return { ...state, lastPage: payload };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    localStorage.setItem("lastPage", state.lastPage);
  }, [state.lastPage]);

  const value = { state, dispatch };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
