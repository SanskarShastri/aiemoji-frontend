'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AuthModalsProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModals: React.FC<AuthModalsProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[100]">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md mx-4 sm:mx-auto"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="relative bg-black/90 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent rounded-2xl blur-xl"></div>
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05] rounded-2xl"></div>

              {/* Content */}
              <div className="relative">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg"></div>
                    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="14" fill="url(#emojiGradient)" />
                      <path d="M10 18C10 18 12 22 16 22C20 22 22 18 22 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="11" cy="13" r="2" fill="white" />
                      <circle cx="21" cy="13" r="2" fill="white" />
                      <path d="M4 16C4 16 8 10 16 10C24 10 28 16 28 16" stroke="#4299E1" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="2 2" />
                      <defs>
                        <linearGradient id="emojiGradient" x1="2" y1="2" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#3182CE" />
                          <stop offset="100%" stopColor="#1A365D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
                  {isLogin ? 'Welcome Back!' : 'Create Account'}
                </h2>
                <p className="text-gray-400 text-center mb-8">
                  {isLogin ? 'Login to create amazing emojis' : 'Sign up to start creating emojis'}
                </p>

                {/* Form */}
                <form className="space-y-4">
                  {!isLogin && (
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-black/50 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-500 transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-black/50 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-500 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 bg-black/50 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-500 transition-colors"
                      placeholder="Enter your password"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 hover:from-blue-600 hover:via-blue-500 hover:to-cyan-500
                    text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/20
                    hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-0.5 relative group overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></span>
                    <span className="relative">{isLogin ? 'Login' : 'Sign Up'}</span>
                  </button>

                  {/* Social Login */}
                  <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-black text-gray-400">Or continue with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      className="flex items-center justify-center px-4 py-3 border border-blue-500/20 rounded-lg hover:bg-blue-500/5 transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-300" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center px-4 py-3 border border-blue-500/20 rounded-lg hover:bg-blue-500/5 transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                      </svg>
                    </button>
                  </div>
                </form>

                {/* Switch between login/signup */}
                <p className="mt-6 text-center text-gray-400">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    {isLogin ? 'Sign Up' : 'Login'}
                  </button>
                </p>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute -top-4 -right-4 w-8 h-8 bg-black/80 border border-blue-500/20 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuthModals; 