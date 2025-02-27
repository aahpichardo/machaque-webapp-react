
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import NewPassword from './pages/NewPassword/NewPassword';
import PasswordRecovery from './pages/PasswordRecovery/PasswordRecovery';
import PasswordRecoveryToken from './pages/PasswordRecoveryToken/PasswordRecoveryToken';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import PrivateRoute from './components/PrivateRouter'
import { useAuth } from './contexts/AuthContext'
import Informative from './pages/Informative/Informative'
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import UserProfile from './pages/UserProfile';
import RestaurantProfile from './pages/RestaurantProfile';

const App = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Informative/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route path="/password-recovery-token" element={<PasswordRecoveryToken />} />
        <Route path="/register" element={<Register />} />
        {/*<Route path="/home" element={<Home />} />*/}
        {/* Protegiendo las rutas */}

        <Route 
          path="/user-profile" 
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <UserProfile />
            </PrivateRoute>
          }
        />

        <Route 
          path="/restaurant-profile" 
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <RestaurantProfile />
            </PrivateRoute>
          }
        />

        <Route 
          path="/messages" 
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Messages />
            </PrivateRoute>
          }
        />

        <Route 
          path="/notifications" 
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Notifications />
            </PrivateRoute>
          }
        />

        <Route 
          path="/home" 
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            </PrivateRoute>
          } 
        />
        {/* Agrega una ruta por defecto o un 404 aquí si es necesario */}
      </Routes>
    </Router>

    
  );
};

export default App;

