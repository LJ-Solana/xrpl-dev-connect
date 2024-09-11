import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import AuthLayout from './auth/AuthLayout';
import LoginPage from './auth/LoginPage';
import SignUpPage from './auth/SignupPage';
import MainLayout from './components/MainLayout';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import ExplorePage from './components/ExplorePage';
import DeveloperProfilePage from './components/DeveloperProfilePage';

const App = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
        
        <Route
          path="/*"
          element={
            session ? (
              <MainLayout onLogout={logout}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/explore" element={<ExplorePage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/developer/:id" element={<DeveloperProfilePage />} />
                </Routes>
              </MainLayout>
            ) : (
              <Navigate to="/auth/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;