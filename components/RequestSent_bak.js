import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';

const ITEM_WIDTH = Dimensions.get('window').width

export default class RequestSent extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    console.log('RequestSent.js')
    console.log(this.props.screenProps.displayName)
    console.log(this.props.screenProps.email)
    const displayName = this.props.screenProps.displayName
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTitle}>
            <Text style={styles.headerTitleText}>PLUS</Text>
          </View>
          <View style={styles.headerIcon}>
            <TouchableOpacity>
              <Image source={require('../images/plus-sign-in-a-black-circle.png')} style={styles.headerIconStyle}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contentBox1}>
          <View style={styles.contentBoxDetail}>
            <View style={styles.contentBox1Title}>
              <View style={styles.contentBoxTitle}>
                <Text style={styles.contentBoxTitleText}>그룹방 PLUS</Text>
              </View>
            </View>
            <View style={styles.contentBox1Content}>
              <Text style={styles.contentBox1ContentText}>{displayName}님이 참여한</Text>
              <Text style={styles.contentBox1ContentText}>체험그룹방이 아직 없습니다.</Text>
            </View>
          </View>
        </View>
        <View style={styles.contentBox2}>
          <View style={styles.contentBoxDetail}>
            <View style={styles.contentBox2Title}>
              <View style={styles.contentBoxTitle}>
                <Text style={styles.contentBoxTitleText}>체험 PLUS</Text>
              </View>
            </View>
            <View style={styles.contentBox2Content}>
              <View style={{height: '100%', flexDirection: 'row'}}>
                <View style={{width: '33.25%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{width: '80%', height: '80%', borderRadius: 20, elevation: 5}}>
                    <Image source={require('../images/쎌토메이킹사진.jpg')} style={{width: '100%', height: '100%', borderRadius: 20}}/>
                  </View>
                </View>
                <View style={{width: '33.25%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{width: '80%', height: '80%'}}>

                  </View>
                </View>
                <View style={{width: '33.25%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{width: '80%', height: '80%'}}>

                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24
  },
  header: {
    flex: 1.2,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    padding: 10
  },
  headerTitleText: {
    fontSize: 30,
  },
  headerIcon: {
    padding: 10
  },
  headerIconStyle: {
    width: 45,
    height: 45
  },
  contentBox1: {
    flex: 6,
    width: '100%',
  },
  contentBox1Title: {
    height: '10%',
  },
  contentBox1Content: {
    height: '90%',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBox1ContentText: {
    fontSize: 16
  },
  contentBoxDetail: {
    height: '100%',
  },
  contentBox2: {
    flex: 2.8,
    width: '100%',
  },
  contentBox2Title: {
    height: '20%',
  },
  contentBox2Content: {
    height: '80%',
    marginLeft: 10,
    marginRight: 10,
  },
  contentBoxTitle: {
    marginLeft: 10,
    marginRight: 10,
    height: '100%',
    justifyContent: 'center',
    borderColor: '#ffbe04',
    borderBottomWidth: 1,
  },
  contentBoxTitleText: {
    fontSize: 18,
    marginLeft: 10
  }
});
