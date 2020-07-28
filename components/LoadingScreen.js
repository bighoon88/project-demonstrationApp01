import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import firebase from 'firebase';

export default class LoadingScreen extends React.Component {
    /*
    static navigationOptions = {
        header: null,
      };
    */
    
    state = { currentUser: null}

    componentDidMount() {
            console.log('componentDidMount')
            setTimeout(
                this.checkIfLoggedIn, 3000
            )
    }

    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(function(user) {
            console.log('checkIfLoggedIn first')
            if(user) {
                const isLogin = true
                const { currentUser } = firebase.auth()
                
                this.setState({ currentUser })
                
                console.log('currentUser.uid')             
                console.log(currentUser.uid)
                this.props.navigation.navigate('DashboardScreen', {
                    displayName: currentUser.displayName,
                    email: currentUser.email,
                    isLogin: isLogin,
                });
                
            } else {
                const isLogin = false
                const displayName = 'NO NAME'
                const email = 'NO EMAIL'
                this.props.navigation.navigate('DashboardScreen', {
                    isLogin: isLogin,
                    displayName: displayName,
                    email: email
                })
            }
        }.bind(this));
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/AMANDA_LOGO.png')} style={{resizeMode: 'stretch', width: '40%', height: '14%'}}/>
                <ActivityIndicator size = 'large' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0BC904',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
});
