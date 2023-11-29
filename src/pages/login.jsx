import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    // Simulating a successful login for demonstration purposes
    // In a real application, you would perform actual authentication logic here
    // For now, let's consider any login attempt as successful

    // Navigate to the payment component
    navigate('/payment');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(to top, #87CEEB, #1E90FF)', // Sky blue gradient
  };

  const formStyle = {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
  };

  const inputStyle = {
    width: '100%',
    marginBottom: '15px',
    padding: '10px',
    boxSizing: 'border-box',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  };

  const toggleLinkStyle = {
    cursor: 'pointer',
    color: '#007BFF',
  };

  return (
    <div style={containerStyle}>
      <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
      <form style={formStyle} onSubmit={handleSubmit}>
        <label style={labelStyle}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
        </label>
        <label style={labelStyle}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
        </label>
        <button type="submit" style={buttonStyle}>
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>
      </form>
      <p onClick={handleToggle} style={toggleLinkStyle}>
        {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
      </p>
    </div>
  );
};

export default Login;

// import React, { useState } from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSignUp, setIsSignUp] = useState(false);

//   const handleToggle = () => {
//     setIsSignUp(!isSignUp);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(email, password);
//     fetch('/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log("aa gya data")
//   })
//   .catch(error => {console.error('error', error)});
//   };

//   const containerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//     background: 'linear-gradient(to top, #87CEEB, #1E90FF)', // Sky blue gradient
//   };

//   const formStyle = {
//     width: '300px',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   };

//   const labelStyle = {
//     display: 'block',
//     marginBottom: '5px',
//   };

//   const inputStyle = {
//     width: '100%',
//     marginBottom: '15px',
//     padding: '10px',
//     boxSizing: 'border-box',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//   };

//   const buttonStyle = {
//     width: '100%',
//     padding: '10px',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     borderRadius: '4px',
//     border: 'none',
//     cursor: 'pointer',
//   };

//   const toggleLinkStyle = {
//     cursor: 'pointer',
//     color: '#007BFF',
//   };

//   return (
//     <div style={containerStyle}>
//       <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
//       <form style={formStyle} onSubmit={handleSubmit}>
//         <label style={labelStyle}>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={inputStyle}
//             required
//           />
//         </label>
//         <label style={labelStyle}>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={inputStyle}
//             required
//           />
//         </label>
//         <button type="submit" style={buttonStyle}>
//           {isSignUp ? 'Sign Up' : 'Login'}
//         </button>
//       </form>
//       <p onClick={handleToggle} style={toggleLinkStyle}>
//         {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
//       </p>
//     </div>
//   );
// };

// export default Login;