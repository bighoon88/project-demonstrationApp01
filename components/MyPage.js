import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, FlatList, Alert, Dimensions, ScrollView } from 'react-native';
import firebase from 'firebase';

const ITEM_WIDTH = Dimensions.get('window').width

export default class MyPage extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    console.ignoredYellowBox = [
    'Setting a timer'
    ];
    this.state = {
      GridListItems: [
        {key: '0', title: '내 자료', image: require('../images/process.png')},
        {key: '1', title: '뉴스레터', image: require('../images/news.png')},
        {key: '2', title: '경험데이터\n분석', image: require('../images/success.png')},
        {key: '3', title: '포토북', image: require('../images/gallery.png')},
        {key: '4', title: '지식게임', image: require('../images/owl.png')},
        {key: '5', title: '결제문의', image: require('../images/debit-card.png')},
        {key: '6', title: '사용법', image: require('../images/icons8-faq-80.png')}
      ],
      columns: 4
    }
  }

  GetGridViewItem() {
    Alert.alert('test service..');
  }

  // firbase 함수
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }

  // firbase 함수
  onSignIn = googleUser => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!this.isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken,
        );
        // Sign in with credential from the Google user.
        firebase.auth().signInAndRetrieveDataWithCredential(credential).then(function(result){
          console.log('user signed in');
          if (result.additionalUserInfo.isNewUser) {
            firebase.database().ref('/users/' + result.user.uid).set({
              gmail: result.user.email,
              profile_picture: result.additionalUserInfo.profile.picture,
              locale: result.additionalUserInfo.profile.locale,
              first_name: result.additionalUserInfo.profile.given_name,
              last_name: result.additionalUserInfo.profile.family_name,
              created_at: Date.now(),
              last_logged_in:Date.now()
            }).then(function (snapshot){
              // console.log('snapshot', snapshot)
            });
          } else {
            firebase.database().ref('/users/' + result.user.uid).update({
              last_logged_in:Date.now()
            })
          }
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      } else {
        console.log('User already signed-in Firebase.');
      }
    }.bind(this));
  };

  signInWithCoogleAsync = async () => {
    try {
        const result = await Expo.Google.logInAsync({
            behavior: 'web',
            androidClientId: "1009146587410-bh4neig0n7r4rkf7guk3vbclgu1gjmco.apps.googleusercontent.com",
            scopes: ["profile", "email"]
        })
        if (result.type === 'success') {
            this.onSignIn(result);
            return result.accessToken;
        } else  {
          return { cancelled: true };
        }
    } catch (e) {
        return { error: true }
    }
  };

  render() {
    const loginButton = <Button title='로그인' onPress={()=> this.signInWithCoogleAsync()} />
    const logoutButton = <Button title='로그아웃' onPress={()=> firebase.auth().signOut()} />;
    let message;
    if (this.props.screenProps.isLogin) {
      message = logoutButton
    } else {
      message = loginButton
    }
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{marginLeft: 20, marginTop: 20}}>
            <Text style={{fontSize: 20}}>더보기</Text>
          </View>
          <View style={{width: '100%', height: 100, justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <View>
                <View style={{flexDirection: 'row', paddingLeft: 20}}>
                  <View style={{borderRadius: 40, width: 63, height: 63, backgroundColor: '#ffbe04', justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../images/user.png')} style={{width: 30, height: 30, tintColor: '#f7d985'}}/>
                  </View>
                  <View style={{alignItems: 'center', paddingLeft: 10}}>
                    <View>
                      <Text style={{fontSize: 15, fontWeight: 'bold'}}>{this.props.screenProps.displayName}</Text>
                    </View>
                    <View style={{paddingTop: 5}}>
                      <View style={{width: 100, height: 30, backgroundColor: '#c0c0c0'}}>
                        <TouchableOpacity style={{width: 100, height: 30, justifyContent: 'center', alignItems: 'center'}} onPress={()=> this.GetGridViewItem()} >
                          <Text style={{fontSize: 15}}>추억보관함</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{paddingRight: 25}}>
                <TouchableOpacity onPress={()=> this.GetGridViewItem()}>
                  <Image source={require('../images/settings-work-tool.png')} style={{width: 20, height: 20}}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{width: '100%', height: 40, justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{paddingLeft: 20}}>
                <Text style={{fontSize: 15}}>포인트</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{paddingRight: 5}}>
                  <Image source={require('../images/coin.png')} style={{width: 20, height: 20}}/>
                </View>
                <View style={{paddingRight: 20}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>0</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{width: '100%', height: 110, justifyContent: 'center', paddingLeft: 20, paddingRight: 20, }}>
            <View>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>편의기능</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10}}>
              <View>
                <TouchableOpacity style={{alignItems: 'center'}} onPress={()=> this.GetGridViewItem()}>
                  <Image source={require('../images/bus.png')} style={{width: 30, height: 30}}/>
                  <Text>체험BUS</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={{alignItems: 'center'}} onPress={()=> this.GetGridViewItem()}>
                  <Image source={require('../images/idea.png')} style={{width: 30, height: 30}}/>
                  <Text>그룹매칭</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={{alignItems: 'center'}} onPress={()=> this.GetGridViewItem()}>
                  <Image source={require('../images/vlogger.png')} style={{width: 30, height: 30}}/>
                  <Text>AR카드</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={{alignItems: 'center'}} onPress={()=> this.GetGridViewItem()}>
                  <Image source={require('../images/audio.png')} style={{width: 30, height: 30}}/>
                  <Text>오디오클립</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{width: '100%', height:240, paddingTop: 10}}>
            <View>
              <Text style={{fontSize: 15, fontWeight: 'bold', padding: 20}}>부가기능</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <FlatList
                data={ this.state.GridListItems }
                renderItem={ ({item}) =>
                  <View style={{alignItems: 'center', height: 90, width: ITEM_WIDTH/4}}>
                    <TouchableOpacity style={{alignItems: 'center', height: 90, width: ITEM_WIDTH/4}} onPress={()=> this.GetGridViewItem()}>
                      <Image source={item.image} style={{width: 30, height: 30}}/>
                      <Text onPress={this.GetGridViewItem.bind(this, item.key)} style={{textAlign: 'center'}} > {item.title} </Text>
                    </TouchableOpacity>
                  </View> }
                numColumns={this.state.columns}
              />
            </View>
          </View>
          <View style={{width: '100%', backgroundColor: 'green', height: 150, justifyContent: 'center'}}>
            <Image source={require('../images/애드벌룬.jpg')} style={{width: '100%', height: 150}}/>
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
    paddingTop: 24
  },
  GridViewContainer: {
    alignItems: 'center',
    height: 90,
    width: ITEM_WIDTH/4.4,
    margin: 2,
  },
});
