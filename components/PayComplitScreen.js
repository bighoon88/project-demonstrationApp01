import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class PayComplit extends React.Component {
  render() {
    console.log('PayComplit.js')
    console.log(this.props.screenProps.displayName)
    console.log(this.props.screenProps.email)
    const { navigation } = this.props;
    let newEmail = navigation.getParam('newEmail')
    let newPhone = navigation.getParam('newPhone')
    let newDisplayName = navigation.getParam('newDisplayName')
    let radioValue = navigation.getParam('radioValue')
    let newPrice = navigation.getParam('newPrice')
    return (
      <View style={styles.container}>
        <Text>Hello from PayComplit</Text>
        <Text>{newDisplayName}님이 결제를 완료하였습니다.</Text>
        <Text>{radioValue}로 {newPrice}원을 결제 하였습니다.</Text>
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
