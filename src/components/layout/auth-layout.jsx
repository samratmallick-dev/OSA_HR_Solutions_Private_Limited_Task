import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
      return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
                  <div className="w-full max-w-md">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                              <Outlet />
                        </div>
                  </div>
            </div>
      );
}

export default AuthLayout;
