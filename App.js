import React from 'react';
import { Button, Image } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import AddPatientScreen from './pages/AddPatientScreen';
import ProfileScreen from './pages/ProfileScreen';

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    AddPatients: { screen: AddPatientScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#006666',
      },
      headerTintColor: '#fff',
      title: 'Home',
    },
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: { screen: SettingsScreen },
    AddPatients: { screen: AddPatientScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#006666',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
    },
  }
);

const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    AddPatients: { screen: AddPatientScreen },
    Settings: { screen: SettingsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={
                focused
                  ? require('./asset/logo1.png')
                  : require('./asset/logo1.png')
              }
              style={{
                width: 30,
                height: 30,
                borderRadius: 30 / 2,
              }}
            />
          );
        } else if (routeName === 'AddPatients') {
          return (
            <Image
              source={
                focused
                  ? require('./asset/logo4.png')
                  : require('./asset/logo4.png')
              }
              style={{
                width: 30,
                height: 30,
                borderRadius: 30 / 2,
              }}
            />
          );
        } else if (routeName === 'Settings') {
          return (
            <Image
              source={
                focused
                  ? require('./asset/logo2.png')
                  : require('./asset/logo2.png')
              }
              style={{
                width: 25,
                height: 25,
                borderRadius: 30 / 2,
              }}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: '#000',
    },
  }
);
export default createAppContainer(App);