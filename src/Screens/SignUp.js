import React, {useState, useContext} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

import {AuthContext} from '../Navigation/AuthProvider';
import SignUpForm from '../Components/organism/SignUp';

import theme from '../Theme';

const {colors} = theme;

function SignUp({navigation}) {
  const {register} = useContext(AuthContext);
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
    confirm_secureTextEntry: true,
    isValidUser: true,
  });

  const submit = (dataValues) => {
    const {email, password: pwd} = dataValues;
    register(email, pwd);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Enregistrez-vous gratuitement</Text>
      </View>
      <SignUpForm data={data} onSubmitFunction={submit} setDataFunction={setData} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  text_header: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 30,
  },
});
export default SignUp;
