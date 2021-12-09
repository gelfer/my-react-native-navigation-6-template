import React from 'react';
import { useColorScheme } from 'react-native';
import {
  DefaultTheme,
  DarkTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FeedScreen1 from '../screens/FeedScreen1';
import FeedScreen2 from '../screens/FeedScreen2';
import ProfileScreen1 from '../screens/ProfileScreen1';
import ProfileScreen2 from '../screens/ProfileScreen2';
import SettingsScreen from '../screens/SettingsScreen';

export default function Navigation() {
  const scheme = useColorScheme();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
      text: '#009688',
      border: '#009688',
    },
  };

  const RootStack = createNativeStackNavigator();
  const Tabs = createBottomTabNavigator();
  const FeedStack = createNativeStackNavigator();
  const ProfileStack = createNativeStackNavigator();

  const FeedStackScreens = () => {
    return (
      <FeedStack.Navigator screenOptions={{ headerTintColor: '#08776c' }}>
        <FeedStack.Screen name='Feed1' component={FeedScreen1} />
        <FeedStack.Screen name='Feed2' component={FeedScreen2} />
      </FeedStack.Navigator>
    );
  };

  const ProfileStackScreens = () => {
    return (
      <ProfileStack.Navigator screenOptions={{ headerTintColor: '#08776c' }}>
        <ProfileStack.Group screenOptions={{ presentation: 'modal' }}>
          <ProfileStack.Screen name='Profile1' component={ProfileScreen1} />
          <ProfileStack.Screen name='Profile2' component={ProfileScreen2} />
        </ProfileStack.Group>
      </ProfileStack.Navigator>
    );
  };

  const HomeTabs = () => {
    return (
      <Tabs.Navigator>
        <Tabs.Screen
          name='Feed'
          component={FeedStackScreens}
          options={{
            title: 'FeedStack',
            headerShown: false,
            tabBarActiveTintColor: '#08776c',
            tabBarIcon: ({ color, size }) => {
              return <Feather name='globe' size={size} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name='Profile'
          component={ProfileStackScreens}
          options={{
            title: 'ProfileStack',
            headerShown: false,
            tabBarActiveTintColor: '#08776c',
            tabBarIcon: ({ color, size }) => {
              return <Feather name='user' size={size} color={color} />;
            },
          }}
        />
      </Tabs.Navigator>
    );
  };

  // RootStack ->> HomeTabs & other screens
  // HomeTabs -> FeedStack & ProfileStack
  // FeedStack: Feed1 Screen & Feed2 Screen
  // ProfileStack: Profile1 Screen & Profile2 Screen

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : MyTheme}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name='Home' component={HomeTabs} />
        <RootStack.Screen name='Settings' component={SettingsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
