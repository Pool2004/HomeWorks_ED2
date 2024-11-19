import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../assets/css/Dashboard.css'; // Import CSS

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      console.log("No hay usuario, redirigiendo a login...");
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  if (!user) {
    return <div>Redirigiendo al login...</div>;
  }
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-subtitle">
          Información personal y detalles de la cuenta
        </p>
      </div>

      {user && (
        <div className="dashboard-content">
          <div className="dashboard-item">
            <span className="dashboard-item-title">Nombre de usuario</span>
            <span className="dashboard-item-value">{user.displayName || "No especificado"}</span>
          </div>

          <div className="dashboard-item">
            <span className="dashboard-item-title">Correo electrónico</span>
            <span className="dashboard-item-value">{user.email}</span>
          </div>

          <div className="dashboard-item">
            <span className="dashboard-item-title">ID de usuario</span>
            <span className="dashboard-item-value">{user.uid}</span>
          </div>
        </div>
      )}

      {!user && (
        <div className="dashboard-error">
          <p className="text-red-500">
            No hay usuario autenticado. Redirigiendo al login...
          </p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
