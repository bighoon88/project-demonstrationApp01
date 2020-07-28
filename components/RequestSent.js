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
      selectButton: '1',
    }
  }

  onClick(selectedButton) {
    this.setState({selectButton: selectedButton})
}

  render() {
    console.log('RequestSent.js')
    console.log(this.state.selectButton)
    console.log(this.props.screenProps.displayName)
    console.log(this.props.screenProps.email)
    var plusViewSelect;
    var plusView;
    if(this.state.selectButton == '1') {
      plusViewSelect=(<View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: '#F8C747', height: 5}}></View>
        <View style={{flex: 1, backgroundColor: 'white', height: 5}}></View>
        <View style={{flex: 1, backgroundColor: 'white', height: 5}}></View>
      </View>);
      plusView=(<ScrollView>
        <View style={{marginTop: 15}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1.3, height: 130, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: '90%', height: '90%'}}>
                <Image source={require('../images/과학의기초이미지1.jpg')} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}/>
              </View>
            </View>
            <View style={{flex: 1.7, height: 130, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: '90%', height: '90%'}}>
                <View style={{height: '50%', widht: '100%', paddingTop: 5, justifyContent: 'center'}}><Text style={{fontSize: 23}}>셀파공부방우미린체험팀</Text></View>
                <View style={{height: '25%', widht: '100%', paddingTop: 5, justifyContent: 'center'}}><Text style={{fontSize: 15}}>과학패키지(4회) / 4.25일</Text></View>
                <View style={{height: '25%', widht: '100%', paddingTop: 5, justifyContent: 'center'}}><Text style={{fontSize: 15}}>팀마스터 이선영 강사</Text></View>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1.3, height: 130, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: '90%', height: '90%'}}>
              <Image source={require('../images/생물자원과자원의재생이미지1.jpg')} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}/>
            </View>
          </View>
          <View style={{flex: 1.7, height: 130, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: '90%', height: '90%'}}>
              <View style={{height: '50%', widht: '100%', paddingTop: 5, justifyContent: 'center'}}><Text style={{fontSize: 23}}>송도애비뉴 독수리오형제팀</Text></View>
              <View style={{height: '25%', widht: '100%', paddingTop: 5, justifyContent: 'center'}}><Text style={{fontSize: 15}}>통합필수 16선 / 5.5일</Text></View>
              <View style={{height: '25%', widht: '100%', paddingTop: 5, justifyContent: 'center'}}><Text style={{fontSize: 15}}>팀마스터 박선자 강사</Text></View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1.3, height: 130, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: '90%', height: '90%'}}>
              <Image source={require('../images/자연의역사와미래도시이미지1.jpg')} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}/>
            </View>
          </View>
          <View style={{flex: 1.7, height: 130, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: '90%', height: '90%'}}>
              <View style={{height: '50%', widht: '100%', paddingTop: 5, justifyContent: 'center'}}><Text style={{fontSize: 23}}>푸르넷김포푸른나비초팀</Text></View>
              <View style={{height: '25%', widht: '100%', paddingTop: 5, justifyContent: 'center'}}><Text style={{fontSize: 15}}>서대문자연사박물관 / 5.5일</Text></View>
              <View style={{height: '25%', widht: '100%', paddingTop: 5, justifyContent: 'center'}}><Text style={{fontSize: 15}}>팀마스터 신수연 강사</Text></View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1.3, height: 130, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: '90%', height: '90%'}}>
              <Image source={require('../images/선사시대와역사시대이미지-움집.jpg')} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}/>
            </View>
          </View>
          <View style={{flex: 1.7, height: 130, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: '90%', height: '90%'}}>
              <View style={{height: '50%', widht: '100%', paddingTop: 5, justifyContent: 'center'}}><Text style={{fontSize: 23}}>역사바로알기팀</Text></View>
              <View style={{height: '25%', widht: '100%', paddingTop: 5, justifyContent: 'center'}}><Text style={{fontSize: 15}}>암사동선사주거지 / 5.5일</Text></View>
              <View style={{height: '25%', widht: '100%', paddingTop: 5, justifyContent: 'center'}}><Text style={{fontSize: 15}}>팀마스터 한영서 강사</Text></View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1.3, height: 130, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: '90%', height: '90%'}}>
              <Image source={require('../images/대한제국과일제강점기이미지1.jpg')} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}/>
            </View>
          </View>
          <View style={{flex: 1.7, height: 130, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: '90%', height: '90%'}}>
              <View style={{height: '50%', widht: '100%', paddingTop: 5, justifyContent: 'center'}}><Text style={{fontSize: 23}}>3.1운동 100주년</Text></View>
              <View style={{height: '25%', widht: '100%', paddingTop: 5, justifyContent: 'center'}}><Text style={{fontSize: 15}}>암사동선사주거지 / 5.5일</Text></View>
              <View style={{height: '25%', widht: '100%', paddingTop: 5, justifyContent: 'center'}}><Text style={{fontSize: 15}}>팀마스터 한영서 강사</Text></View>
            </View>
          </View>
        </View>
      </ScrollView>);
    } else if (this.state.selectButton == '2') {
      plusViewSelect=(<View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'white', height: 5}}></View>
        <View style={{flex: 1, backgroundColor: '#F8C747', height: 5}}></View>
        <View style={{flex: 1, backgroundColor: 'white', height: 5}}></View>
      </View>);
      plusView=(<View>
        <View style={{flexDirection: 'row', backgroundColor: '#ECECD9', height: 30, alignItems: 'center'}}>
          <View style={{width: 80, height: 20, alignItems: 'center'}}><Text style={{fontSize: 18, fontWeight: 'bold'}}>메이커</Text></View>
          <View style={{width: 80, height: 20, alignItems: 'center'}}><Text style={{fontSize: 18}}>플립러닝</Text></View>
          <View style={{width: 80, height: 20, alignItems: 'center'}}><Text style={{fontSize: 18}}>강연</Text></View>
         </View>
        <ScrollView>
          <View style={{marginTop: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1, height: 170, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{width: '80%', height: '65%', borderRadius: 20, elevation: 5}}>
                  <Image source={require('../images/쎌토메이킹사진.jpg')} style={{width: '100%', height: '100%', resizeMode: 'stretch', borderRadius: 20}}/>
                </View>
                <View style={{width: '80%', height: '35%'}}>
                  <View style={{alignItems: 'center', paddingTop: 10}}>
                    <Text>[솔리디어랩]</Text>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text>IOT융합과학교육</Text>
                  </View>
                </View>
              </View>
              <View style={{flex: 1, height: 170, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{width: '80%', height: '65%', borderRadius: 20, elevation: 5}}>
                  <Image source={require('../images/메이커교육.jpg')} style={{width: '100%', height: '100%', resizeMode: 'stretch', borderRadius: 20}}/>
                </View>
                <View style={{width: '80%', height: '35%'}}>
                  <View style={{alignItems: 'center', paddingTop: 10}}>
                    <Text>[아토플래닛]</Text>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text>메이커교육</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1, height: 170, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{width: '80%', height: '65%', borderRadius: 20, elevation: 5}}>
                  <Image source={require('../images/인공지능.png')} style={{width: '100%', height: '100%', resizeMode: 'stretch', borderRadius: 20}}/>
                </View>
                <View style={{width: '80%', height: '35%'}}>
                  <View style={{alignItems: 'center', paddingTop: 10}}>
                    <Text>[깨봉]</Text>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text>인공지능수학</Text>
                  </View>
                </View>
              </View>
              <View style={{flex: 1, height: 170, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{width: '80%', height: '65%'}}>
                  
                </View>
                <View style={{width: '80%', height: '35%'}}>
                  <View style={{alignItems: 'center', paddingTop: 10}}>
                    
                  </View>
                  <View style={{alignItems: 'center'}}>
                    
                  </View>
                </View>
              </View>
            </View>
          </View>
        
        </ScrollView>
      </View>);
    } else if (this.state.selectButton == '3') {
      plusViewSelect=(<View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'white', height: 5}}></View>
        <View style={{flex: 1, backgroundColor: 'white', height: 5}}></View>
        <View style={{flex: 1, backgroundColor: '#F8C747', height: 5}}></View>
      </View>);
      plusView=(<ScrollView><Text>지식플러스</Text></ScrollView>);
    }
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
        <View style={{height: 45, backgroundColor: '#ECECE8'}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{flex: 1, height: 45}} onPress={() => this.onClick(1)}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20}}>그룹방</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, height: 45}} onPress={() => this.onClick(2)}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20}}>체험플러스</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, height: 45}} onPress={() => this.onClick(3)}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20}}>지식플러스</Text>
              </View>
            </TouchableOpacity>
          </View>    
        </View>
        <View style={{flex: 1}}>
          { plusViewSelect }
          { plusView }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
  header: {
    height: 60,
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
});
