import React from 'react';
import { StyleSheet, Text, View, ScrollView, CheckBox, TextInput, TouchableOpacity } from 'react-native';

export default class Pay extends React.Component {

    static navigationOptions = {
        title: '주문/결제',
        headerTitleStyle: {
            fontSize: 20
        }
    };

    constructor() {
        super() 
        this.state = {
            boxValue: false,
            newDisplayName: '',
            newEmail: '',
            newPhone: '',
            check1: false,
            check2: false,
            radioValue: '',
            newCount: ''
        }
    }

    checkBox(email, displayName) {
        let boxValue = this.state.boxValue;
        let newDisplayName = this.state.newDisplayName;
        let newEmail = this.state.newEmail;
        console.log(displayName)
        if (boxValue === false){
            this.setState({
                boxValue: true,
                newDisplayName: displayName,
                newEmail: email
            })
        } else {
            this.setState({
                boxValue: false,
            })
        }
            
    }

    radioButton() {
        let check1 = this.state.check1;
        let check2 = this.state.check2;
        let radioValue = '';
        if (check1 === false || check2 === true){
            this.setState({
                check1: true,
                check2: false,
                radioValue: '신용카드'
            })
        } else if (check1 === true || check2 === false) {
            this.setState({
                check1: false,
                check2: true,
                radioValue: '무통장입금(가상계좌)'
            })
        } else {
            this.setState({
                check1: false,
                check2: false
            })
        }
            
    }
    
    render() {
        console.log('Pay.js')
        console.log(this.state.newDisplayName)
        const { navigation } = this.props
        let animatedDate = navigation.getParam('animatedDate');
        let name = navigation.getParam('name');
        let place = navigation.getParam('place');
        let price = navigation.getParam('price');
        let newCount = navigation.getParam('count');
        let email = this.props.screenProps.email;
        let displayName = this.props.screenProps.displayName;
        let selectName;
        let selectPhone;
        let selectEmail;
        if (this.state.boxValue) {
            selectName = (<TextInput style={{fontSize: 15, textAlign: 'center'}} placeholder='이름을 입력해주세요' value={displayName} onChangeText={(value) => this.setState({newDisplayName: value})}></TextInput>)
            selectPhone = (<TextInput style={{fontSize: 15, textAlign: 'center'}} placeholder='핸드폰 번호를 입력해주세요' value='010-0000-0000' onChangeText={(value) => this.setState({newPhone: value})}></TextInput>)
            selectEmail = (<TextInput style={{fontSize: 15, textAlign: 'center'}} placeholder='이메을 입력해주세요' value={email} onChangeText={(value) => this.setState({newEmail: value})}></TextInput>)
        } else {
            selectName = (<TextInput style={{fontSize: 15, textAlign: 'center'}} placeholder='이름을 입력해주세요' onChangeText={(value) => this.setState({newDisplayName: value})} value={this.state.newDisplayName}></TextInput>)
            selectPhone = (<TextInput style={{fontSize: 15, textAlign: 'center'}} placeholder='핸드폰 번호를 입력해주세요'onChangeText={(value) => this.setState({newPhone: value})} value={this.state.newPhone}></TextInput>)
            selectEmail = (<TextInput style={{fontSize: 15, textAlign: 'center'}} placeholder='이메을 입력해주세요'onChangeText={(value) => this.setState({newEmail: value})} value={this.state.newEmail}></TextInput>)
        }
        
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{backgroundColor: 'white', width: '100%', height: 200}}>
                        <View style={{margin: 15}}>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>프로그램 정보</Text>
                            <View style={{flexDirection: 'row', marginTop: 20}}>
                                <View style={{width: '30%'}}>
                                    <Text>교육명</Text>
                                </View>
                                <View style={{width: '70%'}}>
                                    <Text>{name}</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 20}}>
                                <View style={{width: '30%'}}>
                                    <Text>교육일시</Text>
                                </View>
                                <View style={{width: '70%'}}>
                                    <Text>{animatedDate}</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 20}}>
                                <View style={{width: '30%'}}>
                                    <Text style={{fontSize: 25}}>{price}</Text>
                                </View>
                                <View style={{width: '70%'}}>
                                    <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 20}}>{newCount} 명</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{backgroundColor: 'white', width: '100%', height: 350, marginTop: 10}}>
                        <View style={{margin: 15}}>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>학부모 정보</Text>
                            <View style={{paddingTop: 20, flexDirection: 'row', alignItems: 'center',}}>
                                <CheckBox value={this.state.boxValue} onChange={(email, displayName) =>this.checkBox(this.props.screenProps.email, this.props.screenProps.displayName)}/>
                                <Text> 사용자와 동일한 정보</Text>
                            </View>
                            <View style={{paddingTop: 15}}>
                                <Text>이름(실명)</Text>
                                <View style={{borderColor: 'gray', borderWidth: 1, height: 40, paddingTop: 5}}>
                                    { selectName }
                                </View>
                            </View>
                            <View style={{paddingTop: 15}}>
                                <Text>전화번호</Text>
                                <View style={{borderColor: 'gray', borderWidth: 1, height: 40, paddingTop: 5}}>
                                    { selectPhone }
                                </View>
                            </View>
                            <View style={{paddingTop: 15}}>
                                <Text>이메일</Text>
                                <View style={{borderColor: 'gray', borderWidth: 1, height: 40, paddingTop: 5}}>
                                    { selectEmail }
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{backgroundColor: 'white', width: '100%', height: 150, marginTop: 10}}>
                        <View style={{margin: 15}}>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>결제 수단 선택</Text>
                            <View style={{paddingTop: 15}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <CheckBox value={this.state.check1} onChange={() =>this.radioButton()} />
                                    <Text>신용카드</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <CheckBox value={this.state.check2} onChange={() =>this.radioButton()} />
                                    <Text>무통장입금(가상계좌)</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{backgroundColor: 'white', width: '100%', height: 200, marginTop: 10}}>
                        <View style={{margin: 15}}>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>할인/혜택</Text>
                            <View style={{paddingTop: 20}}>
                                <Text style={{fontSize: 15}}>사용 가능 적립금 <Text style={{color: 'green', fontSize: 20}}> 0 원</Text></Text>
                                <View style={{flexDirection: 'row', paddingTop: 20}}>
                                    <View style={{width: '70%', height: 40, borderColor: 'gray', borderWidth: 1}}>
                                        <TextInput style={{fontSize: 15, textAlign: 'center'}} placeholder='사용할 적립금을 입력하세요'></TextInput>
                                    </View>
                                    <View style={{width: '30%', height: 40}}>
                                        <View style={{height: '100%', backgroundColor: 'gray', borderRadius: 5, marginLeft: 10, justifyContent: 'center', alignItems: 'center'}}>
                                            <Text style={{color: 'white'}}>전액사용</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{padding: 5}}>
                                    <Text style={{fontSize: 12}}>-적립금은 최소 <Text style={{fontWeight: 'bold'}}>1,000원</Text>부터 사용가능</Text>
                                    <Text style={{fontSize: 12}}>-적립금으로 사용 시 <Text style={{fontWeight: 'bold'}}>부분 취소 불가</Text></Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{backgroundColor: 'white', width: '100%', height: 200, marginTop: 10}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width: '40%'}}>
                                <Text style={{fontSize: 20}}>결제금액</Text>
                            </View>
                            <View style={{width: '60%', alignItems: 'flex-end'}}>
                                <Text style={{fontSize: 20}}>{price} 원</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', borderColor: 'green', borderBottomWidth: 2, paddingTop: 10, paddingBottom: 10}}>
                            <View style={{width: '40%'}}>
                                <Text style={{fontSize: 18}}>포인트</Text>
                            </View>
                            <View style={{width: '60%', alignItems: 'flex-end'}}>
                                <Text style={{fontSize: 18}}>0 원</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', paddingTop: 10}}>
                            <View style={{width: '40%'}}>
                                <Text style={{fontSize: 18}}>총금액</Text>
                            </View>
                            <View style={{width: '60%', alignItems: 'flex-end'}}>
                                <Text style={{fontSize: 18}}>{price} 원</Text>
                            </View>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 30}}>
                            <View style={{width: '95%', height: 40, backgroundColor: 'green', borderRadius: 4, alignItems: 'center', justifyContent: 'center'}}>
                                <TouchableOpacity style={{width: '100%', height: 40, alignItems: 'center', justifyContent: 'center'}} onPress={() => this.props.navigation.navigate('PayComplit',{
                                    newEmail: this.state.newEmail,
                                    newPhone: this.state.newPhone,
                                    newDisplayName: this.state.newDisplayName,
                                    radioValue: this.state.radioValue,
                                    newPrice: price
                                })}>
                                    <Text style={{color: 'white'}}>결제하기</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E4E2',
  },
});
