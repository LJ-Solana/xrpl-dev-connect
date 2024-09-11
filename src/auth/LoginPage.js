import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      onLogin();
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full bg-gray-900 p-8 border border-green-500 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-green-500 font-mono">&gt; Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-700 text-green-400 border border-green-500 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-700 text-green-400 border border-green-500 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-mono py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-green-400 font-mono">
          Don't have an account? <Link to="/auth/signup" className="text-green-500 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;