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
import firebase from 'firebase';
export type ENV = typeof import('./assets/env.json');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: this.ENV.FIREBASE_API_KEY,
  authDomain: 'memoapp-1f6a1.firebaseapp.com',
  databaseURL: 'https://memoapp-1f6a1.firebaseio.com',
  projectId: 'memoapp-1f6a1',
  storageBucket: 'memoapp-1f6a1.appspot.com',
  messagingSenderId: '579648334197',
  appId: '1:579648334197:web:664fa263d6146189858b3c',
  measurementId: 'G-KPKW6TPRKW',
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
//     // firebase.analytics();

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
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#265366',
      },
      headerTintColor: '#fff',
      headerBackTitle: ' ',
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
