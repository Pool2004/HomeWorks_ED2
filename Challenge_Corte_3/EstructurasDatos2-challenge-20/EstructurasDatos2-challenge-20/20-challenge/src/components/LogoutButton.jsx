import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../utils/authSlice";
import { auth } from "../utils/firebase";
import '../assets/css/LogoutButton.css'; // Import CSS

function LogoutButton() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    auth.signOut();
    dispatch(logout());
  };

  return <button onClick={handleLogout} className="logout-button">Logout</button>;
}

export default LogoutButton;
