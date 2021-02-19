/* eslint-disable react/display-name */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Home, Profil} from '../Screens';
import theme from '../Theme';

const {colors} = theme;

const InAppStack = createStackNavigator();
const InAppTab = createBottomTabNavigator();

const HomeStackScreen = ({navigation}) => (
  <InAppStack.Navigator
    screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: colors.white,
        // shadowColor: 'transparent', // border bottom
      },
      headerTintColor: '#fff',
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
    <InAppStack.Screen
      options={{
        title: 'Profil',
        headerLeft: () => (
          <View style={styles.marginLeft}>
            <Icon name="chevron-back" size={25} color={colors.black} onPress={() => navigation.goBack()} />
          </View>
        ),
        headerRight: () => (
          <View style={styles.marginRight}>
            <MaterialCommunityIcons
              name="account-edit"
              size={25}
              backgroundColor={colors.background}
              color={colors.black}
              onPress={() => navigation.navigate('EditProfile')}
            />
          </View>
        ),
      }}
      name="Profil"
      component={Profil}
    />
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

const styles = StyleSheet.create({
  marginLeft: {marginLeft: 10},
  marginRight: {marginRight: 10},
});

export default InAppStackScreen;
