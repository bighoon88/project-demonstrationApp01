import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NecessaryCardView } from '../container/CardView';

export default class NecessaryList extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    console.log('NecessaryList.js')
    const { navigation } = this.props;
    const userInfo = this.props.screenProps
    console.log(this.props.screenProps.displayName)
    console.log(this.props.screenProps.email)
    var CardViewForm = (<NecessaryCardView navigation={navigation} userInfo={userInfo}/>);
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center' ,justifyContent: 'center', width: '100%'}}>
          <Text style={{textAlign: 'center'}}>테스트</Text>
          <Image source={require('../images/EN.png')} style={{resizeMode: 'stretch', width: '20%', height: 30}}/>
        </View>
        <View style={styles.content}>
        { CardViewForm }
        </View>
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
    paddingTop: 24,
  },
  header: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 9,
  },
  button: {
    width: 140,
    height: 40,
    justifyContent: 'center',
    margin: 5,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 0,
    elevation: 2
  },
});
