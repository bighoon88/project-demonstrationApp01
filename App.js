import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoadingScreen from './components/LoadingScreen';
import LoginScreen from './components/LoginScreen';
import DashboardScreen from './components/DashboardScreen';
import TestScreen from './components/TestScreen';
import AfterLogin from './components/AfterLogin';
import MyPage from './components/MyPage';

import firebase from 'firebase'
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig)


// StackNavigator를 App에 추가
const AppSwitchNavigator = createSwitchNavigator( 
  {
    LoadingScreen: {
      screen: LoadingScreen,
    },
    LoginScreen: {
      screen: LoginScreen,
    },
    DashboardScreen: {
      screen: TestScreen,
    },
    AfterLogin: {
      screen: AfterLogin,
    },
    MyPage: {
      screen: MyPage,
    },
  },
  {
    initialRouteName: 'LoadingScreen',
  }   
)

// 앱상태를 관리하고 최상위 레벨 navigator를 앱 환경에 연결
const AppNavigator = createAppContainer(AppSwitchNavigator)

export default class App extends React.Component {
  constructor() {
    super();
    console.ignoredYellowBox = [
    'Setting a timer'
    ];
  }
  render() {
    console.log('App.js')
    return (
      <AppNavigator />
    );
  }
}

// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
