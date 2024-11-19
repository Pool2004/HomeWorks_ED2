import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../context/AuthContext';
import { registerUser, loginWithGoogle, loginUser } from '../utils/authSlice';
import '../assets/css/LoginPage.css';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  });
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  // Manejo genérico de cambios en los campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Función genérica para login y registro
  const handleAuth = async (e) => {
    e.preventDefault();
    const { email, password, username } = formData;
    const action = isRegistering
      ? registerUser({ email, password, username })
      : loginUser({ email, password });

    try {
      const result = await dispatch(action).unwrap();
      if (result) {
        console.log(`${isRegistering ? 'Registro' : 'Login'} exitoso`, result);
        navigate('/dashboard', { replace: true });
      }
    } catch (err) {
      setError(err.message);
      console.error(`Error en ${isRegistering ? 'registro' : 'login'}:`, err);
    }
  };

  // Login con Google
  const handleGoogleLogin = async () => {
    try {
      const result = await dispatch(loginWithGoogle()).unwrap();
      if (result) {
        console.log("Google login exitoso", result);
        navigate('/dashboard', { replace: true });
      }
    } catch (err) {
      setError(err.message);
      console.error("Error en Google login:", err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={handleAuth}>
          {isRegistering && (
            <div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                required
                className="login-input"
              />
            </div>
          )}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="login-input"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="login-input"
            />
          </div>

          <div>
            <button type="submit" className="login-button">
              {isRegistering ? 'Registrarse' : 'Inicio Sesión'}
            </button>
          </div>
        </form>

        <button onClick={handleGoogleLogin} className="google-login-button">
          Ingrese con la cuenta de google 
        </button>

        {error && <p className="error-message">{error}</p>}

        <button
          onClick={() => setIsRegistering((prev) => !prev)}
          className="toggle-register-login"
        >
          {isRegistering
            ? 'Ya tenes una cuenta ve? Ingresar'
            : "No tenes una cuenta???? Registrese ;)"}
        </button>
      </div>
    </div>
  );
};

export default Login;
