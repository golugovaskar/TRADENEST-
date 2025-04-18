import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px', // Added for responsiveness
    height: '100vh',
    backgroundColor: '#ffffff',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  box: {
    background: 'linear-gradient(135deg, #fbc2eb, #a6c1ee)',
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    marginBottom: '25px',
    color: '#003366',
    fontWeight: '600',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '12px 16px',
    marginBottom: '18px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'border 0.3s ease',
  },
  button: {
    padding: '12px 16px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#1e7e34',
  },
  footer: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#003366',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: '500',
    marginLeft: '5px',
  },
};

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://tradenest-backend-h1i5.onrender.com/api/auth/login', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        window.location.href = 'https://tradenest-1dashboard.onrender.com/';
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Error during login:', err);
      alert('Something went wrong');
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Welcome Back</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.button,
              ...(isHovered ? styles.buttonHover : {}),
              opacity: loading ? 0.7 : 1,
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <div style={styles.footer}>
          Don’t have an account?
          <Link to="/signup" style={styles.link}>Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
