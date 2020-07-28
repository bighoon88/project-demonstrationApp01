import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from 'firebase';



export default class DashboardScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const displyName = navigation.getParam('displayName', 'NO NAME');
    const email = navigation.getParam('email', 'NO EMAIL')

    return (
      <View style={styles.container}>
      <Text>DashboardScreen!</Text>
      <Text>{displyName}</Text>
      <Text>{email}</Text>
      <Button title='로그아웃' onPress={()=>firebase.auth().signOut()} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
