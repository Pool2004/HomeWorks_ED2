import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Login from "../pages/LoginPage"; // Add this import

function AuthControl() {
  const { user } = useSelector((state) => state.auth);

  const isAuthenticated = useMemo(() => !!user, [user]);

  return (
    <div>
      <Login />
      <button disabled={isAuthenticated}>Registrarse</button>
      <button disabled={isAuthenticated}>Inicio Sesión</button>
    </div>
  );
}

export default AuthControl;
