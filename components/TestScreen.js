import React, { Component } from "react";

import AppNavigator from './AppNavigtor';

export default class HomeActivity extends Component {
  render() {
    const { navigation } = this.props;
    const displayName = navigation.getParam('displayName', 'NO NAME');
    const email = navigation.getParam('email', 'NO EMAIL');
    const isLogin = navigation.getParam('isLogin');
    console.log('TestScreen.js');
    console.log(isLogin);
    return(
        <AppNavigator
            screenProps={ {
              email: email,
              displayName: displayName,
              isLogin: isLogin,
            } }
        />
    )
  }
}