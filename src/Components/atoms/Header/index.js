import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import theme from '../../../Theme';

const {sizes} = theme;

function Header({navigation, isBackComponent = false, displayMarket = true}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.centerIconLeft}>
        <Icon name="chevron-back" size={25} onPress={() => navigation.goBack()} />
      </TouchableOpacity>

      <View style={styles.middle} />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },
  centerIconLeft: {
    paddingLeft: sizes.padding * 2,
    justifyContent: 'center',
  },
  centerIconRight: {
    paddingRight: sizes.padding * 2,
    justifyContent: 'center',
  },
  middle: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
