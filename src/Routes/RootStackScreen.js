import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {createStackNavigator} from '@react-navigation/stack';

import {SignIn, SignUp} from '../Screens';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => {
  const [isFirstLaunch, setFirstLaunch] = useState(false);
  let routeName = null;

  async function fetchStorage() {
    const value = await AsyncStorage.getItem('alreadyLaunched');
    if (value === null) {
      AsyncStorage.setItem('alreadyLaunched', 'true');
      setFirstLaunch(true);
    } else {
      setFirstLaunch(false);
    }
  }

  useEffect(() => {
    // fetchStorage();
  }, []);

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch === true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'SignIn';
  }

  return (
    <RootStack.Navigator initialRouteName={routeName}>
      <RootStack.Screen name="SignIn" component={SignIn} options={{header: () => null}} />
      <RootStack.Screen name="SignUp" component={SignUp} options={{header: () => null}} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
