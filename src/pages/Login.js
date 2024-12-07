import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 py-16 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center text-purple-800 mb-6">Log In</h1>
        <LoginForm />
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account? {' '}
          <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

