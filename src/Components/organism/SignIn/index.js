import React from 'react';
import {StyleSheet, View, Text, Platform, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

import Button from '../../atoms/Button';

import theme from '../../../Theme';

const {colors} = theme;

function SigninForm({setDataFunction, data, navigation, onSubmitFunction}) {
  const {check_textInputChange, secureTextEntry, isValidUser, isValidPassword} = data;

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setDataFunction({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setDataFunction({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setDataFunction({
        ...data,
        isValidUser: true,
      });
    } else {
      setDataFunction({
        ...data,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 4) {
      setDataFunction({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setDataFunction({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setDataFunction({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <Animatable.View animation="fadeInUpBig" style={styles.footer}>
      <Text style={styles.text_footer}>Email</Text>
      <View style={styles.action}>
        <Icon size={20} name="person-outline" color={isValidUser ? colors.darkblue : colors.red} />
        <TextInput
          placeholder="Your Email"
          autoCapitalize="none"
          onChangeText={(val) => textInputChange(val)}
          onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          placeholderTextColor="#666666"
          style={styles.textInput}
        />
        {check_textInputChange ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View>
        ) : null}
      </View>
      {isValidUser ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
        </Animatable.View>
      )}

      <Text style={[styles.text_footer, styles.addMargin]}>Password</Text>
      <View style={styles.action}>
        <Icon size={20} name="lock-closed-outline" color={secureTextEntry ? colors.darkblue : colors.red} />
        <TextInput
          onChangeText={(val) => handlePasswordChange(val)}
          secureTextEntry={!!secureTextEntry}
          placeholder="Your password"
          autoCapitalize="none"
          style={styles.textInput}
        />
        <TouchableOpacity onPress={updateSecureTextEntry}>
          <Feather name={secureTextEntry ? 'eye-off' : 'eye'} color="grey" size={20} />
        </TouchableOpacity>
      </View>
      {isValidPassword ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Password must be 4 characters long.</Text>
        </Animatable.View>
      )}

      <View style={styles.button}>
        <Button
          title="Sign In"
          onPress={() => onSubmitFunction(data)}
          styleBtnContainer={[styles.signIn, styles.btnSignIn]}
          styleBtnText={[styles.textSign, styles.textWhite]}
        />
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('SignUp')}
          styleBtnContainer={[styles.signIn, styles.btnSignUp]}
          styleBtnText={[styles.textSign, styles.colorTxt]}
        />
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  colorTxt: {
    color: colors.primary,
  },
  btnSignIn: {
    backgroundColor: colors.primary,
    marginTop: 15,
  },
  btnSignUp: {
    borderColor: colors.primary,
    borderWidth: 1,
    marginTop: 15,
  },
  addMargin: {
    marginTop: 35,
  },
  textWhite: {
    color: colors.white,
  },
  footer: {
    flex: 3,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_footer: {
    color: colors.primary,
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.ligthgrey,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: colors.primary,
  },
  errorMsg: {
    color: colors.red,
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 75,
  },
  signIn: {
    width: '100%',
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SigninForm;
