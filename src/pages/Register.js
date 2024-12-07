import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';

function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 py-16 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center text-purple-800 mb-6">Register</h1>
        <RegisterForm />
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? {' '}
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;

