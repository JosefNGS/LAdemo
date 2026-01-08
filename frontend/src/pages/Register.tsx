import React, { useState } from 'react';

interface RegisterProps {
  onSuccess: () => void;
  onSwitchToLogin: () => void;
}

const Register: React.FC<RegisterProps> = ({ onSuccess, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    referralCode: '',
    acceptTerms: false
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const calculatePasswordStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    return strength;
  };

  const getPasswordStrengthLabel = (strength: number): string => {
    if (strength <= 2) return 'Weak';
    if (strength <= 4) return 'Medium';
    if (strength <= 5) return 'Strong';
    return 'Very Strong';
  };

  const getPasswordStrengthColor = (strength: number): string => {
    if (strength <= 2) return 'bg-red-500';
    if (strength <= 4) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
    
    if (field === 'password') {
      const strength = calculatePasswordStrength(value as string);
      setPasswordStrength(strength);
    }

    // Clear error for this field
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (passwordStrength < 3) {
      newErrors.password = 'Password is too weak';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    
    // Simulate API call with referral code processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Process referral code if provided
    if (formData.referralCode) {
      console.log('Processing referral code:', formData.referralCode);
      // In real app, this would validate and link the referral
    }
    
    setLoading(false);
    onSuccess();
  };

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h1 className="text-3xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-600 to-cyan-400">BitNexus</h1>
          </div>
          <p className="text-gray-500">Join the Revolution</p>
        </div>

        <div className="glass-card p-8 rounded-[2rem] border-white/5">
          <h2 className="text-2xl font-bold font-display mb-6 text-center">Create Account</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => {
                  if (formData.email && !validateEmail(formData.email)) {
                    setErrors({ ...errors, email: 'Please enter a valid email address' });
                  }
                }}
                placeholder="agent@nexus.io"
                className={`w-full bg-white/5 border rounded-xl px-4 py-3 focus:outline-none transition-colors ${
                  errors.email 
                    ? 'border-red-500/50 focus:border-red-500' 
                    : 'border-white/10 focus:border-purple-500/50'
                }`}
                required
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                placeholder="••••••••"
                className={`w-full bg-white/5 border rounded-xl px-4 py-3 focus:outline-none transition-colors ${
                  errors.password 
                    ? 'border-red-500/50 focus:border-red-500' 
                    : 'border-white/10 focus:border-purple-500/50'
                }`}
                required
              />
              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-gray-500">Password Strength:</span>
                    <span className={`font-bold ${
                      passwordStrength <= 2 ? 'text-red-400' :
                      passwordStrength <= 4 ? 'text-yellow-400' : 'text-green-400'
                    }`}>
                      {getPasswordStrengthLabel(passwordStrength)}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getPasswordStrengthColor(passwordStrength)} transition-all`}
                      style={{ width: `${(passwordStrength / 6) * 100}%` }}
                    />
                  </div>
                </div>
              )}
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                Confirm Password
              </label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                placeholder="••••••••"
                className={`w-full bg-white/5 border rounded-xl px-4 py-3 focus:outline-none transition-colors ${
                  errors.confirmPassword 
                    ? 'border-red-500/50 focus:border-red-500' 
                    : 'border-white/10 focus:border-purple-500/50'
                }`}
                required
              />
              {errors.confirmPassword && (
                <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                Referral Code <span className="text-gray-600 normal-case">(Optional)</span>
              </label>
              <input
                type="text"
                value={formData.referralCode}
                onChange={(e) => handleChange('referralCode', e.target.value.toUpperCase())}
                placeholder="NEXUS-XXXX-XXXX"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500/50 transition-colors"
              />
              <p className="text-xs text-gray-500 mt-1">Enter a referral code to join someone's alliance network</p>
            </div>

            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.acceptTerms}
                  onChange={(e) => handleChange('acceptTerms', e.target.checked)}
                  className="w-5 h-5 rounded accent-purple-600 mt-0.5"
                  required
                />
                <span className="text-sm text-gray-400">
                  I agree to the{' '}
                  <a href="#" className="text-purple-400 hover:text-purple-300 font-bold">Terms & Conditions</a>
                  {' '}and{' '}
                  <a href="#" className="text-purple-400 hover:text-purple-300 font-bold">Privacy Policy</a>
                </span>
              </label>
              {errors.acceptTerms && (
                <p className="text-red-400 text-xs mt-1 ml-8">{errors.acceptTerms}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl font-bold shadow-xl shadow-purple-900/40 hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </span>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/5 text-center">
            <p className="text-sm text-gray-400">
              Already have an account?{' '}
              <button
                onClick={onSwitchToLogin}
                className="text-purple-400 hover:text-purple-300 font-bold"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;



