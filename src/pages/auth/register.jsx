import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CommonForm from '../../components/common/form';
import { registerFormControls } from '../../config/form-index';
import { validateForm } from '../../utils/validation';
import { UserPlus } from 'lucide-react';

const Register = () => {
      const [formData, setFormData] = useState({
            fullName: '',
            email: '',
            password: '',
            confirmPassword: ''
      });
      const [errors, setErrors] = useState({});
      const navigate = useNavigate();

      const handleSubmit = (e) => {
            e.preventDefault();
            const validation = validateForm(formData, 'register');
            
            if (validation.isValid) {
                  localStorage.setItem('isAuthenticated', 'true');
                  localStorage.setItem('user', JSON.stringify({
                        name: formData.fullName,
                        email: formData.email
                  }));
                  navigate('/home');
            } else {
                  setErrors(validation.errors);
            }
      };

      const isFormValid = !formData.fullName || !formData.email || !formData.password || !formData.confirmPassword;

      return (
            <div className="space-y-6">
                  <div className="text-center">
                        <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                              <UserPlus className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Create Account</h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">Join us today</p>
                  </div>

                  <CommonForm
                        formControls={registerFormControls}
                        formData={formData}
                        setFormData={setFormData}
                        onSubmit={handleSubmit}
                        buttonText="Create Account"
                        isFormValid={isFormValid}
                        errors={errors}
                        showPasswordStrength={true}
                  />

                  <div className="text-center">
                        <p className="text-gray-600 dark:text-gray-400">
                              Already have an account?{' '}
                              <Link to="/auth/login" className="text-green-600 hover:text-green-700 font-medium">
                                    Sign in
                              </Link>
                        </p>
                  </div>
            </div>
      );
};

export default Register;
