import React, {createContext, useState} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            if (email.length === 0 || password.length === 0) {
              Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [{text: 'Done'}]);
              return;
            }
            await auth().signInWithEmailAndPassword(email, password);
          } catch (error) {
            let errorMsg = '';
            switch (error.code) {
              case 'auth/wrong-password':
                errorMsg = 'The password is invalid or the user does not have a password.';
                break;
              case 'auth/user-not-found':
                errorMsg = 'There is no user record corresponding to this identifier.';
                break;
              default:
                errorMsg = 'The password is invalid or the user does not have a password.';
                break;
            }
            Alert.alert(error.code, errorMsg, [{text: 'Done'}]);
          }
        },
        register: async (email, password) => {
          try {
            if (email.length === 0 || password.length === 0) {
              Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [{text: 'Okay'}]);
              return;
            }
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (error) {
            let errorMsg = '';
            if (error.code === 'auth/weak-password') {
              errorMsg = 'That password is too weak';
            }
            if (error.code === 'auth/email-already-in-use') {
              errorMsg = 'That email address is already in use!';
            }
            if (error.code === 'auth/invalid-email') {
              errorMsg = 'That email address is invalid!';
            }
            Alert.alert(error.code, errorMsg, [{text: 'Okay'}]);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
