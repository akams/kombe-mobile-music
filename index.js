import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import Providers from './src/Navigation';
import {name as appName} from './app.json';

export default function Main() {
  return <Providers />;
}

AppRegistry.registerComponent(appName, () => Main);
