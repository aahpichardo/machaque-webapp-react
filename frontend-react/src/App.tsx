import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import NewPassword from './pages/NewPassword/NewPassword';
import PasswordRecovery from './pages/PasswordRecovery/PasswordRecovery';
import PasswordRecoveryToken from './pages/PasswordRecoveryToken/PasswordRecoveryToken';
import Register from './pages/Register/Register';
import UserProfile from './pages/UserProfile/UserProfile';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route path="/password-recovery-token" element={<PasswordRecoveryToken />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/home" element={<Home />} />
        {/* Agrega una ruta por defecto o un 404 aquí si es necesario */}
      </Routes>
    </Router>
  );
};

export default App;

