import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker, Image, TextInput } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { LinearGradient } from 'expo';

export default class Search extends React.Component {
  
  static navigationOptions = {
     header: null,
  };
  
  constructor() {
    super() 
    this.state = {
      isVisible: false,
      isVisible2: false,
      isVisible3: false,
      chosenDate: '날짜',
      chosenDate2: '',
      chosenDate3: '생년월일',
      location: '',
      count: '',
      count2: '',
      type: '',
      time: '',
      topic: '',
    }
  }

  updateTime = (time) => {
    this.setState({time: time})
  }

  updateTopic = (topic) => {
    this.setState({topic: topic})
  }

  updateType = (type) => {
    this.setState({ type: type })
  }

  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosenDate: moment(datetime).format('YYYY-MM-DD')
    })
  }

  showPicker = () => {
    this.setState({
      isVisible: true
    })
  }

  showPicker2 = () => {
    this.setState({
      isVisible2: true
    })
  }

  showPicker3 = () => {
    this.setState({
      isVisible3: true
    })
  }

  hidePicker = () => {
    this.setState({
      isVisible: false,
    })
  }

  hidePicker2 = () => {
    this.setState({
      isVisible2: false,
    })
  }

  hidePicker3 = () => {
    this.setState({
      isVisible3: false,
    })
  }

  endEditing() {
    let countLength = this.state.count.length;
    let formattedText;
    for(i=0 ; i < countLength; i++) {
      if (this.state.count[i] === '명') {
        formattedText = this.state.count;
      } else {
        formattedText = this.state.count + " 명";
      }
    }
    this.setState({ count2: formattedText });
  }

  render() {
    console.log('Search.js')
    console.log(this.props.screenProps.isLogin)
    
    return (
      <LinearGradient colors={['#0BC904', '#0BC904']} start={[0.2, 0.3]} style={{flex: 1}}>
        <View style={{flex: 1.5, backgroundColor: '#0BC904', paddingTop: 20, alignItems: 'center' ,justifyContent: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{alignItems: 'center' ,justifyContent: 'center'}}>
              <Text style={{textAlign: 'center'}}>아는만큼  </Text> 
            </View>
            <View style={{alignItems: 'center' ,justifyContent: 'center', width: '20%', height: 70}}>
              <Image source={require('../images/AMANDA_LOGO3.png')} style={{resizeMode: 'stretch', width: '100%', height: 70}}/> 
            </View>
            <View style={{alignItems: 'center' ,justifyContent: 'center'}}>
              <Text style={{textAlign: 'center'}}>  다르게보이는</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 8.5, alignItems: 'center', justifyContent: 'space-between'}}>
          <View>
            <View>
              <View style={styles.button2} >
                <TextInput style={{fontSize: 17, textAlign: 'center'}} placeholder='장소나 지역을 입력하세요' onChangeText={(value) => this.setState({location: value})} value={this.state.location}></TextInput>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={styles.button} onPress={this.showPicker}>
                <Text style={styles.text}>{this.state.chosenDate}</Text>
              </TouchableOpacity>
              <DateTimePicker 
                isVisible={this.state.isVisible}
                onConfirm={this.handlePicker}
                onCancel={this.hidePicker}
                datePickerModeAndroid={'calendar'}
                mode={'date'}
                placeholder="날짜"
              />
              <View style={styles.button} >
                <Picker selectedValue = {this.state.time} onValueChange = {this.updateTime} >
                  <Picker.Item label = "시간" value = "시간" />
                  <Picker.Item label = "반나절체험" value = "반나절체험" />
                  <Picker.Item label = "일일체험" value = "일일체험" />
                  <Picker.Item label = "1박2일" value = "1박2일" />
                  <Picker.Item label = "2박3일" value = "2박3일" />
                  <Picker.Item label = "3박4일" value = "3박4일" />
                </Picker>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.button} >
                <Picker selectedValue = {this.state.topic} onValueChange = {this.updateTopic} >
                  <Picker.Item label = "주제/분야" value = "주제/분야" />
                  <Picker.Item label = "사회" value = "사회" />
                  <Picker.Item label = "한국사" value = "한국사" />
                  <Picker.Item label = "과학" value = "과학" />
                  <Picker.Item label = "환경생태" value = "환경생태" />
                  <Picker.Item label = "로봇" value = "로봇" />
                  <Picker.Item label = "숲" value = "숲" />
                </Picker>
              </View>
              <View style={styles.button} >
                <Picker selectedValue = {this.state.type} onValueChange = {this.updateType} >
                  <Picker.Item label = "유형" value = "유형" />
                  <Picker.Item label = "단발성" value = "단발성" />
                  <Picker.Item label = "장기" value = "장기" />
                </Picker>
              </View>
            </View>
            <View>
              <View style={styles.button2} >
              <TextInput style={{fontSize: 17, textAlign: 'center'}} placeholder='인원' onChangeText={(value) => this.setState({count: value})} value={this.state.count}></TextInput>
              </View>
            </View>
            <TouchableOpacity style={styles.button3} onPress={() => this.props.navigation.navigate('SearchList', {
              displayName: this.props.screenProps.displayName,
              email: this.props.screenProps.email,
              isLogin: this.props.screenProps.isLogin,
              targetDate: this.state.chosenDate,
              targetTime: this.state.time,
              targetTopic: this.state.topic,
              targetLocation: this.state.location,
              targetCount: this.state.count,
              targetType: this.state.type,
            })}>
              <Text style={styles.buttonText3}>검색</Text>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor:'#ffbe04', borderColor: '#ffbe04', borderWidth: 0, width: '100%', height: 80, alignItems: 'center', borderBottomWidth: 1, borderTopWidth: 1, marginBottom: 10}}>
            <Text style={{fontSize: 20, textAlign: 'center'}}>원하는 조건대로 찾아보세요</Text>
            <Text style={{fontSize: 13, textAlign: 'center'}}>찾는 내용이 없을 땐 필요한 내용들을 보내주세요.</Text>
            <View style={{marginTop: 5}}>
              <View style={{backgroundColor: 'yellow', width: 45, height: 25, alignItems: 'center', justfiContents: 'center', borderColor: 'gray', borderWidth: 0, borderRadius: 10}}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>go</Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,

  },
  button: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    margin: 5,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 0,
    elevation: 2
  },
  button2: {
    width: 310,
    height: 40,
    justifyContent: 'center',
    margin: 5,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 0,
    elevation: 2
  },
  button3: {
    width: 300,
    height: 60,
    justifyContent: 'center',
    margin: 5,
    backgroundColor: '#ffbe04',
    borderColor: '#ffbe04',
    borderWidth: 1,
    borderRadius: 20,
    elevation: 2
  },
  text: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center'
  },
  buttonText3: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

