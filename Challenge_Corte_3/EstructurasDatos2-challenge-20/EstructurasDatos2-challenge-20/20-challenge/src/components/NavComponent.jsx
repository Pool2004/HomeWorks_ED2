import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/NavComponent.css";
import logo from "../assets/react.svg";
import { useAuth } from "../context/AuthContext";
import { useDispatch } from "react-redux";
import { logout } from "../utils/authSlice";
import { auth } from "../utils/firebase";

const NavComponent = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await auth.signOut();
    dispatch(logout());
  };

  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-logo">
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Principal
        </Link>
        <Link to="/about" className="nav-link">
          Acerca de
        </Link>
        {user ? (
          <>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
            <button onClick={handleLogout} className="nav-link2 logout-button">
              Cerrar Sesión
            </button>
          </>
        ) : (
          <Link to="/login" className="nav-link">
            Inicio Sesión
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavComponent;