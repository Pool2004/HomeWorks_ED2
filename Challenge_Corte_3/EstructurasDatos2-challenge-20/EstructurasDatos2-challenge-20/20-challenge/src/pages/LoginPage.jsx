import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../context/AuthContext';
import { registerUser, loginWithGoogle, loginUser } from '../utils/authSlice';
import '../assets/css/LoginPage.css'; // Import CSS

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(loginUser({ email, password })).unwrap();
      if (result) {
        console.log("Login exitoso", result);
        navigate('/dashboard');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(registerUser({ email, password, username })).unwrap();
      if (result) {
        console.log("Registro exitoso", result);
        navigate("/dashboard", { replace: true });
      }
    } catch (err) {
      console.error("Error en registro:", err);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await dispatch(loginWithGoogle()).unwrap();
      if (result) {
        console.log("Google login exitoso", result);
        navigate("/dashboard", { replace: true });
      }
    } catch (err) {
      setError(err.message); // Set error message
      console.error("Error en Google login:", err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={isRegistering ? handleRegister : handleLogin}>
          {isRegistering && (
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
                className="login-input"
              />
            </div>
          )}
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="login-input"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="login-input"
            />
          </div>

          <div>
            <button
              type="submit"
              className="login-button"
            >
              {isRegistering ? "Register" : "Login"}
            </button>
          </div>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="google-login-button"
        >
          Login with Google
        </button>

        {error && <p className="error-message">{error}</p>}

        <button
          onClick={() => setIsRegistering(!isRegistering)}
          className="toggle-register-login"
        >
          {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
        </button>
      </div>
    </div>
  );
}

export default Login;