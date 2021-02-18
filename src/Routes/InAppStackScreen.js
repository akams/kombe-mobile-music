/* eslint-disable react/display-name */
import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {Home, Profil} from '../Screens';
import theme from '../Theme';

const {colors} = theme;

const InAppStack = createStackNavigator();
const InAppTab = createBottomTabNavigator();

const HomeStackScreen = ({navigation}) => (
  <InAppStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.white,
        // shadowColor: 'transparent', // border bottom
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: colors.black,
      },
    }}>
    <InAppStack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Home',
      }}
    />
  </InAppStack.Navigator>
);

const ProfilStackScreen = ({navigation}) => (
  <InAppStack.Navigator>
    <InAppStack.Screen name="Profil" component={Profil} />
  </InAppStack.Navigator>
);

const getTabBarVisibility = (route) => {
  console.log({route});
  const routeName = route.state ? route.state.routes[route.state.index].name : '';
  if (routeName === 'Chat') {
    return false;
  }
  return true;
};

const InAppStackScreen = () => (
  <InAppTab.Navigator
    tabBarOptions={{
      activeTintColor: colors.white,
      inactiveTintColor: colors.darkgrey,
      style: {
        backgroundColor: colors.primary,
      },
    }}>
    <InAppTab.Screen
      name="Home"
      component={HomeStackScreen}
      options={({route}) => ({
        // tabBarVisible: getTabBarVisibility(route),
        tabBarIcon: ({color, size}) => <Icon name="home" color={color} size={size} />,
      })}
    />
    <InAppTab.Screen
      name="Profil"
      component={ProfilStackScreen}
      options={({route}) => ({
        // tabBarVisible: getTabBarVisibility(route),
        tabBarIcon: ({color, size}) => <Icon name="person" color={color} size={size} />,
      })}
    />
  </InAppTab.Navigator>
);

export default InAppStackScreen;
