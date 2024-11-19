import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/NavComponent.css";

class NavComponent extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <NavLink to="/" className="nav-logo">
            <h1>Rutas</h1>
        </NavLink>
        <div className="nav-links">
          <NavLink exact to="/" activeClassName="active-link" className="nav-link">
            Principal
          </NavLink>
          <NavLink to="/about" activeClassName="active-link" className="nav-link">
            Sobre
          </NavLink>
          <NavLink to="/login" activeClassName="active-link" className="nav-link">
            Iniciar Sesión
          </NavLink>
          <div className="dropdown">
            <NavLink to="/more" activeClassName="active-link" className="nav-link dropbtn">
              Más
            </NavLink>
            <div className="dropdown-content">
              <NavLink to="/contact" className="nav-link-drop">
                Contacto
              </NavLink>
              <NavLink to="/faq" className="nav-link-drop">
                Pregunta y Respuesta
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavComponent;