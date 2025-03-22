import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Assurez-vous d'installer react-icons


function Register() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    birthDate: '',
    address: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation des champs
    const validationErrors = {};
    if (!user.firstName.trim()) validationErrors.firstName = 'First Name is required';
    if (!user.lastName.trim()) validationErrors.lastName = 'Last Name is required';
    if (!user.email.trim()) validationErrors.email = 'Email is required';
    if (!user.password.trim()) validationErrors.password = 'Password is required';
    if (user.password !== user.confirmPassword) validationErrors.confirmPassword = 'Passwords do not match';
    if (!user.phoneNumber.trim()) validationErrors.phoneNumber = 'Phone Number is required';
    if (!user.birthDate.trim()) validationErrors.birthDate = 'Birth Date is required';
    if (!user.address.trim()) validationErrors.address = 'Address is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post('https://127.0.0.1:8000/api/users', {
        email: user.email,
        plainPassword: user.password,
        lastname: user.lastName,
        firstname: user.firstName,
        address: user.address,
        phoneNumber: user.phoneNumber,
        birthDate: new Date(user.birthDate).toISOString(),
      });

      // Rediriger ou afficher un message de succès
      //console.log('User registered successfully:', response.data);
      navigate('/login'); // Redirige vers la page de connexion après l'inscription
    } catch (error) {
      //console.error('Error registering user:', error);
      console.error('Error registering user:', error.response.data['description']);
      setErrors({ api: 'Error registering user. Please try again.' });
    }
  };

  return (
    <div className="pageRegister">
      <div className="left-section">
        <div className='flex'>
          {/* Logo or illustration can be added here */}
        </div>
      </div>
      <div className="right-section">
        <form onSubmit={handleSubmit}>
          <h2>Join us</h2>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={user.firstName}
                onChange={handleChange}
                style={{
                  marginTop: '10px',
                  marginBottom: '8px',
                  width: '100%',
                  borderRadius: '20px',
                  borderColor: '#628ECB',
                  padding: '3px 15px 3px',
                  fontSize: '15px',
                }}
              />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={user.lastName}
                onChange={handleChange}
                style={{
                  marginTop: '10px',
                  marginBottom: '8px',
                  width: '100%',
                  borderRadius: '20px',
                  borderColor: '#628ECB',
                  padding: '3px 15px 3px',
                  fontSize: '15px',
                }}
              />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                value={user.email}
                onChange={handleChange}
                style={{
                  marginTop: '10px',
                  marginBottom: '8px',
                  width: '100%',
                  borderRadius: '20px',
                  borderColor: '#628ECB',
                  padding: '3px 15px 3px',
                  fontSize: '15px',
                }}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group" style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                style={{
                  marginTop: '10px',
                  marginBottom: '8px',
                  width: '100%',
                  borderRadius: '20px',
                  borderColor: '#628ECB',
                  padding: '3px 15px 3px',
                  fontSize: '15px',
                }}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group" style={{ position: 'relative' }}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={user.confirmPassword}
                onChange={handleChange}
                style={{
                  marginTop: '10px',
                  marginBottom: '8px',
                  width: '100%',
                  borderRadius: '20px',
                  borderColor: '#628ECB',
                  padding: '3px 15px 3px',
                  fontSize: '15px',
                }}
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={user.phoneNumber}
                onChange={handleChange}
                style={{
                  marginTop: '10px',
                  marginBottom: '8px',
                  width: '100%',
                  borderRadius: '20px',
                  borderColor: '#628ECB',
                  padding: '3px 15px 3px',
                  fontSize: '15px',
                }}
              />
              {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="date"
                name="birthDate"
                placeholder="Birth Date"
                value={user.birthDate}
                onChange={handleChange}
                style={{
                  marginTop: '10px',
                  marginBottom: '8px',
                  width: '100%',
                  borderRadius: '20px',
                  borderColor: '#628ECB',
                  padding: '3px 15px 3px',
                  fontSize: '15px',
                }}
              />
              {errors.birthDate && <span className="error">{errors.birthDate}</span>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={user.address}
                onChange={handleChange}
                style={{
                  marginTop: '10px',
                  marginBottom: '8px',
                  width: '100%',
                  borderRadius: '20px',
                  borderColor: '#628ECB',
                  padding: '3px 15px 3px',
                  fontSize: '15px',
                }}
              />
              {errors.address && <span className="error">{errors.address}</span>}
            </div>
          </div>
          <div className="clickable">
            <button id="sub_btn" type="submit">
              Register
            </button>
            <h4>
              Already a member? <Link to="/login">Sign in now</Link>
            </h4>
          </div>
        </form>
      </div>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          .pageRegister {
            display: flex;
            background-color: #d5deef;
            width: 100%;
            min-height: 100vh;
            margin: 0;
            padding: 0;
          }
          .left-section {
            flex: 1;
            padding: 80px;
            box-sizing: border-box;
          }
          .right-section {
            flex: 1;
            padding: 20px;
            padding-bottom: 10px;
            box-sizing: border-box;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 20px;
            background-color: #d5deef;
            backdrop-filter: blur(15px);
            background: rgba(255, 255, 255, 0.2);
            margin: 20px 80px;
          }
          .right-section h2 {
            font-family: 'Times New Roman', Times, serif;
            color: #395886;
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .form-row {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          .form-row .form-group {
            flex: 1;
          }
          .form-group input {
            margin-top: 10px;
            margin-bottom: 8px;
            width: 100%;
            border-radius: 20px;
            border-color: #628ECB;
            padding: 3px 15px 3px;
            font-size: 15px;
          }
          .error {
            color: red;
            font-size: 12px;
          }
          .clickable {
            margin-top: 25px;
          }
          .clickable button {
            background-color: #395886;
            border: none;
            color: white;
            padding: 5px 40px 5px;
            display: inline-block;
            font-size: 16px;
            cursor: pointer;
            transition-duration: 0.4s;
            border-radius: 20px;
            position: relative;
            margin-left: auto;
            margin-right: auto;
          }
          .clickable h4 {
            font-size: 15px;
          }
          .clickable a {
            font-size: 15px;
            color: #395886;
            text-decoration: none;
          }
          .clickable a:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
}

export default Register;
