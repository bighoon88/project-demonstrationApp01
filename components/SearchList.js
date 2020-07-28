import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Picker } from 'react-native';
import { SearchCardView } from '../container/CardView';


export default class SearchList extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super() 
    this.state = {
      sort: '',
    }
  }

  updateSort = (sort) => {
    this.setState({sort: sort})
  }

  render() {
    console.log('SearchList.js')    
    const { navigation } = this.props;
    let targetDate = navigation.getParam('targetDate');
    let targetTime = navigation.getParam('targetTime');
    let targetTopic = navigation.getParam('targetTopic');
    let targetLocation = navigation.getParam('targetLocation');
    let targetCount = navigation.getParam('targetCount');
    console.log(targetCount)
    
    let targetType = navigation.getParam('targetType');
    const userInfo = this.props.screenProps
    if (targetDate === '날짜') {
      targetDate = 'All DAY'
    }
    var CardViewForm = (<SearchCardView navigation={navigation} userInfo={userInfo} sortInfo={this.state.sort}/>);
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center' ,justifyContent: 'center', width: '100%'}}>
          <Text style={{textAlign: 'center'}}>아는만큼다르게보이는 지식체험 아만다</Text>
          <Image source={require('../images/AMANDA_EN.png')} style={{resizeMode: 'stretch', width: '20%', height: 30}}/>
        </View>
        <View style={{backgroundColor:'#ffbe04', borderColor: '#ffbe04', borderWidth: 0, width: '100%', height: 65, alignItems: 'center', borderBottomWidth: 1, borderTopWidth: 1}}>
          <Text style={{fontSize: 20, textAlign: 'center', paddingTop: 5}}>{targetDate}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 18, textAlign: 'center', paddingTop: 3}}>검색조건 </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Search', {})}><Text style={{fontSize: 18, textAlign: 'center', paddingTop: 3, fontWeight: 'bold'}}>변경</Text></TouchableOpacity>
          </View>
        </View>
        <View style={{width: '100%', height: 40, justifyContent: 'center', alignItems: 'flex-end'}}>
          <View style={styles.button}>
            <Picker selectedValue = {this.state.sort} onValueChange = {this.updateSort} >
              <Picker.Item label = "정렬" value = "0" />
              <Picker.Item label = "거리순" value = "1" />
              <Picker.Item label = "인기순" value = "2" />
              <Picker.Item label = "가격낮은순" value = "3" />
              <Picker.Item label = "가격높은순" value = "4" />
              <Picker.Item label = "고객평점순" value = "5" />
            </Picker>
          </View>
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
