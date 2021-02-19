import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const theme = {
  colors: {
    primary: '#00932D',
    white: '#fff',
    black: '#000',
    red: '#FF0000',
    darkblue: '#05375a',
    ligthgrey: '#f2f2f2',
    darkgrey: '#C4C4C4',
    lightGray2: '#F5F5F6',
    lightGray3: '#F6F6F7',
    lightGray4: '#EFEFF1',
    lightGray5: '#F8F8F9',
  },
  sizes: {
    width,
    height,
    padding: 10,
    padding2: 12,
  },
};

export default theme;
