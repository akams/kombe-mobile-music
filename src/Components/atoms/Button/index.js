import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, title, styleBtnContainer, styleBtnText }) => (
  <TouchableOpacity onPress={onPress} style={styleBtnContainer}>
    <Text style={styleBtnText}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
