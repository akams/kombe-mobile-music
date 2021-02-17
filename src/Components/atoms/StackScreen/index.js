/* eslint-disable react/display-name */
import * as React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

function StackScreenComponent({ componentStack, screen, navigation, name, optionsTitle, defaultHeader = true }) {
  return (
    <componentStack.Navigator
      screenOptions={{
        headerShown: defaultHeader === true,
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <componentStack.Screen
        name={name}
        component={screen}
        options={{
          title: optionsTitle,
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()} />
          ),
        }}
      />
    </componentStack.Navigator>
  );
}

export default StackScreenComponent;
