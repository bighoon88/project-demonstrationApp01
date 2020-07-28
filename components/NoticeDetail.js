import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default class NoticeDetail extends React.Component {

  static navigationOptions = {
  };

  constructor() {
    super();
    this.state = {
    }
  }

  

  render() {
    const { navigation } = this.props;
    console.log(navigation)
    const imageUrl = navigation.getParam('imageUrl');
    var imagePage;
    if (imageUrl === '이미지1') {
        console.log('이미지1')
        imagePage = (<Image source={require('../images/이미지1.png')} style={{resizeMode: 'stretch', width: '100%'}}/>)
    } else if (imageUrl === '이미지2') {
        console.log('이미지2')
        imagePage = (<Image source={require('../images/이미지2.jpg')} style={{resizeMode: 'stretch', width: '100%'}}/>)
    }
    return (
      <View style={styles.container}>
        <ScrollView>
            <View style={{justifyContent: 'flex-start', backgroundColor: 'blue'}}>
            {imagePage}
            </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
