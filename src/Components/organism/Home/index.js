import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';

import Header from '../../atoms/Header';

import theme from '../../../Theme';

const {colors} = theme;

function Home({navigation, user}) {
  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Step One Home</Text>
      </ScrollView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
