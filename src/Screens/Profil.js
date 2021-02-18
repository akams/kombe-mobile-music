import React, {useEffect, useContext} from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

import theme from '../Theme';

const {colors} = theme;

function Profil({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Step One Profil</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Profil;
