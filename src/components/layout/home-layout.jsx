import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Header } from '../common/header';

const HomeLayout = () => {
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      
      if (!isAuthenticated) {
            return <Navigate to="/auth/login" replace />;
      }

      return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                  <Header />
                  <main className="container mx-auto px-4 py-8">
                        <Outlet />
                  </main>
            </div>
      );
};

export default HomeLayout;
