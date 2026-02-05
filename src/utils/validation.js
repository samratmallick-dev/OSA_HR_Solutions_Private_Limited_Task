export const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
};

export const validatePassword = (password) => {
      return password.length >= 8;
};

export const validatePasswordStrength = (password) => {
      const checks = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /\d/.test(password),
            special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
      };
      
      const strength = Object.values(checks).filter(Boolean).length;
      return { checks, strength };
};

export const validateName = (name) => {
      return name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name.trim());
};

export const validateConfirmPassword = (password, confirmPassword) => {
      return password === confirmPassword;
};

export const validateForm = (formData, formType) => {
      const errors = {};
      
      if (formType === 'register') {
            if (!formData.fullName || !validateName(formData.fullName)) {
                  errors.fullName = 'Name must be at least 2 characters and contain only letters';
            }
            
            if (formData.confirmPassword !== undefined) {
                  if (!validateConfirmPassword(formData.password, formData.confirmPassword)) {
                        errors.confirmPassword = 'Passwords do not match';
                  }
            }
      }
      
      if (!formData.email || !validateEmail(formData.email)) {
            errors.email = 'Please enter a valid email address';
      }
      
      if (!formData.password || !validatePassword(formData.password)) {
            errors.password = 'Password must be at least 8 characters';
      }
      
      return {
            isValid: Object.keys(errors).length === 0,
            errors
      };
};