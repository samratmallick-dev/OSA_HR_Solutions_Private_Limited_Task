import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AuthLayout from './components/layout/auth-layout';
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import HomeLayout from './components/layout/home-layout';
import Home from './pages/home/home';

const App = () => {
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

      return (
            <div>
                  <Routes>
                        <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/auth/login"} replace />} />
                        <Route path="/auth" element={<AuthLayout />}>
                              <Route path="" element={<Navigate to="login" replace />} />
                              <Route path="register" element={<Register />} />
                              <Route path="login" element={<Login />} />
                        </Route>
                        <Route path='/' element={<HomeLayout />}>
                              <Route path='home' element={<Home />} />
                        </Route>
                        <Route path="*" element={<Navigate to={isAuthenticated ? "/home" : "/auth/login"} replace />} />
                  </Routes>
            </div>
      );
};

export default App;
