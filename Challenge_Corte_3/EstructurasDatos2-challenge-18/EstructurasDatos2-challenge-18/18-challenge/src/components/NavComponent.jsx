import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/NavComponent.css";
import logo from "../assets/react.svg";
import { useAuth } from "../context/AuthContext";

const NavComponent = () => {
  const { state, dispatch } = useAuth();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <>
      {!state.isAuthenticated ? (
        <>
          <nav className="nav-bar">
            <Link to="/" className="nav-logo">
              
              <p className="textLogo">Rutas</p>
            </Link>
            <div className="nav-links">
              <Link
                to="/"
                className="nav-link"
              >
                Principal
              </Link>
              <Link
                to="/about"
                className="nav-link"
              >
                Acerca
              </Link>
              <Link
                to="/login"
                className="nav-link"
              >
                Inicio Sesión
              </Link>
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav className="nav-bar">
            <Link to="/" className="nav-logo">
              
              <p className="textLogo">Rutas</p>
            </Link>
            <div className="nav-links">
              <Link
                to="/"
                className="nav-link"
              >
                Principal
              </Link>
              <Link
                to="/dashboard"
                className="nav-link"
              >
                Dashboard
              </Link>
              <Link
                to="/about"
                className="nav-link"
              >
                Acerca 
              </Link>
              {state.isAuthenticated && (
                <>
                  <button
                    onClick={handleLogout}
                    className="nav-link2 logout-button"
                  >
                    Cerrar Sesión
                  </button>
                </>
              )}
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default NavComponent;