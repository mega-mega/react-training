import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoListScreen from './src/screens/MemoListScreen';
import AppBar from './src/components/AppBar';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const RootStack = createStackNavigator(
  {
    MemoList: {
      screen: MemoListScreen,
      navigationOptions: {
        title: 'MemoList',
      },
    },
    MemoEdit: {
      screen: MemoEditScreen,
      navigationOptions: {
        title: 'MemoList',
      },
    },
    MemoDetail: {
      screen: MemoDetailScreen,
      navigationOptions: {
        title: 'MemoList',
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'MemoList',
      },
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        title: 'MemoList',
      },
    },
  },
  {
    initialRouteName: 'MemoList',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#265366',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    },
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
