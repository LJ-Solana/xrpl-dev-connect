import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const ConfirmEmail = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const confirmEmail = async () => {
      const queryParams = new URLSearchParams(location.hash.slice(1)); 
      const accessToken = queryParams.get('access_token');
      const refreshToken = queryParams.get('refresh_token');

      if (accessToken && refreshToken) {
        const { error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });

        if (error) {
          setError('Failed to confirm email. Please try again.');
        } else {
          // Email confirmed successfully
          navigate('/');
        }
      } else {
        setError('Invalid confirmation link.');
      }
      setLoading(false);
    };

    confirmEmail();
  }, [location, navigate]);

  if (loading) {
    return <div>Confirming your email...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return null;
};

export default ConfirmEmail;
