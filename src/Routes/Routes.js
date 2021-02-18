/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../Navigation/AuthProvider';

import RootStackScreen from './RootStackScreen';
import InAppStackScreen from './InAppStackScreen';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (userVal) => {
    setUser(userVal);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => {
      subscriber();
    };
  }, []);

  console.log('initializing', initializing);

  if (initializing) return null;

  console.log('user', user);

  return <NavigationContainer>{user ? <InAppStackScreen /> : <RootStackScreen />}</NavigationContainer>;
};

export default Routes;
