import React from 'react';
import {AuthProvider} from './AuthProvider';
import Routes from '../Routes/Routes';

const Providers = () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);

export default Providers;
