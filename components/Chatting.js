import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { requestPermissionsAsync } from 'expo-location';

export default class Chatting extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
    }
  }
  button() {
    Alert.alert(
        'Alert Title',
        'Alert message here...',
    );
  }

  render() {
    const displayName = this.props.screenProps.displayName
    return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20, alignItems: 'center' ,justifyContent: 'space-between', flexDirection: 'row'}}>
          <Image source={require('../images/AMANDA_EN.png')} style={{resizeMode: 'stretch', width: 90, height: 40, marginLeft: 20}}/>
          <TouchableOpacity onPress={() => this.button()}>
            <Image source={require('../images/folder.png')} style={{resizeMode: 'stretch', width: 25, height: 25, marginRight: 20}}/>
          </TouchableOpacity>
        </View>
        <View style={{height: '30%'}}>
          <View style={{height: '20%', backgroundColor: '#0BC904', justifyContent: 'center'}}>
            <Text style={{fontSize: 20}}>SK티움관에서 미래도시를 만나보세요.</Text>
          </View>
          <View style={{height: '80%', justifyContent: 'space-between', padding:5, borderColor: '#BCC6CC', borderBottomWidth: 1}}>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity>
                <Image source={require('../images/cancel.png')} style={{width: 23, height: 23}} />
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 20}}>{displayName}께 초대메시지가</Text>
              <Text style={{fontSize: 20}}>도착했습니다.</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', paddingBottom: 5}}>
              <View style={{width: 80, height: 40, justifyContent: 'center', alignItems: 'center', elevation: 2, backgroundColor: '#0BC904', borderRadius: 10}}>
                <Text style={{fontSize: 20, color: 'white'}}>확인</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flex: 6, alignItems: 'center'}}>
          <ScrollView style={{width: '100%'}}>
            <View>
              <View style={{height: 350, backgroundColor: 'green'}}>
                <TouchableOpacity style={{width: '100%', height: '100%'}} onPress={() => this.props.navigation.navigate('NoticeDetail', {
                  imageUrl: '이미지1'
                })}>
                  <Image source={require('../images/이미지1.png')} style={{width: '100%', height: '100%'}}/>
                </TouchableOpacity>
              </View>
              <View style={{height: 30}}>
                <View style={{height: '100%', flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{margin: 10}}>
                    <Text>호감 556개</Text>
                  </View>
                  <View style={{margin: 10}}>
                    <Text>공유 86개</Text>
                  </View>
                </View>
              </View>
              <View style={{height: 50}}>
                <View style={{height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{width: '80%', height: '70%', justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth: 1}}>
                      <TouchableOpacity>
                        <Text>호감</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{width: '80%', height: '70%', justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth: 1}}>
                      <TouchableOpacity>
                        <Text>공유</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{width: '80%', height: '70%', justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth: 1}}>
                      <TouchableOpacity>
                        <Text>보관</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <View style={{height: 350, backgroundColor: 'green'}}>
                <TouchableOpacity style={{width: '100%', height: '100%'}} onPress={() => this.props.navigation.navigate('NoticeDetail', {
                  imageUrl: '이미지2'
                })}>
                  <Image source={require('../images/이미지2.jpg')} style={{width: '100%', height: '100%'}}/>
                </TouchableOpacity>
              </View>
              <View style={{height: 30}}>
                <View style={{height: '100%', flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{margin: 10}}>
                    <Text>호감 0개</Text>
                  </View>
                  <View style={{margin: 10}}>
                    <Text>공유 0개</Text>
                  </View>
                </View>
              </View>
              <View style={{height: 50}}>
                <View style={{height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{width: '80%', height: '70%', justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth: 1}}>
                      <TouchableOpacity>
                        <Text>호감</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{width: '80%', height: '70%', justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth: 1}}>
                      <TouchableOpacity>
                        <Text>공유</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{width: '80%', height: '70%', justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth: 1}}>
                      <TouchableOpacity>
                        <Text>보관</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
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
