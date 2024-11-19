import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import { HomePage, Dashboard, AboutPage, LoginPage } from "./pages/index";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
import { useAuth } from "./context/AuthContext";

const App = () => {
  return (
    <>
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

const AppWithRouter = () => {
  const location = useLocation();
  const { setLastPage } = useAuth();

  useEffect(() => {
    if (location.pathname !== "/login") {
      setLastPage(location.pathname);
    }
  }, [location.pathname, setLastPage]);

  return <App />;
};

const MainApp = () => (
  <AuthProvider>
    <Router>
      <AppWithRouter />
    </Router>
  </AuthProvider>
);

export default MainApp;