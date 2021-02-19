import React, {useEffect, useContext} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import HomeOrganisms from '../Components/organism/Home';

import theme from '../Theme';

const {colors} = theme;

function Home({navigation}) {
  const user = {};
  return (
    <SafeAreaView style={styles.container}>
      <HomeOrganisms user={user} navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Home;
