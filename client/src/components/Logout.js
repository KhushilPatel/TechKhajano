import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Logout = () => {
  const { LogoutUser } = useAuth();

  useEffect(() => {
    const logout = async () => {
      await LogoutUser();
    };
    logout();
  }, [LogoutUser]);

  return (
    <div>
      <Navigate to='/login' replace />
    </div>
  );
};

export default Logout;
