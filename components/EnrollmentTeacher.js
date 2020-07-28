import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert, TextInput, CheckBox, Button } from 'react-native';

export default class EnrollmentTeacher extends React.Component {

    static navigationOptions = {
        title: '강사등록',
    };

    constructor() {
        super();
        this.state = {
            selectButton: '1',
            newTeacherName: '',
            newAgentName: '',
            check1: true,
            check2: false,
            check3: true,
            check4: false,
            radioValue: '',
            radioValue2: '',
            newCareer: '',
            newTeacherCount: '',
            boxValueHistory: false,
            boxValueScience: false,
            boxValueSocial: false,
            boxValueForest: false,
            boxValueTerms: false,
            boxValueTerms1: false,
            boxValueTerms2: false,
            boxValueTerms3: false,
            boxValueTerms4: false,
            boxValueTerms_1: false,
            boxValueTerms1_1: false,
            boxValueTerms2_1: false,
            boxValueTerms3_1: false,
            boxValueTerms4_1: false,
            boxValueTerms5_1: false,
        }
    }

    onClick(selectedButton) {
        this.setState({selectButton: selectedButton})
    }

    radioButton() {
        let check1 = this.state.check1;
        let check2 = this.state.check2;
        let radioValue = '';
        if (check1 === false && check2 === true){
            this.setState({
                check1: true,
                check2: false,
                radioValue: '남'
            })
        } else if (check1 === true && check2 === false) {
            this.setState({
                check1: false,
                check2: true,
                radioValue: '여'
            })
        } else {
            this.setState({
                check1: false,
                check2: false
            })
        }   
    }

    radioButton2() {
        let check3 = this.state.check3;
        let check4 = this.state.check4;
        let radioValue = '';
        if (check3 === false && check4 === true){
            this.setState({
                check3: true,
                check4: false,
                radioValue2: '남'
            })
        } else if (check3 === true && check4 === false) {
            this.setState({
                check3: false,
                check4: true,
                radioValue2: '여'
            })
        } else {
            this.setState({
                check3: false,
                check4: false
            })
        }   
    }

    checkBoxHistory() {
        let boxValueHistory = this.state.boxValueHistory;
        if (boxValueHistory === false){
            this.setState({
                boxValueHistory: true,
            })
        } else {
            this.setState({
                boxValueHistory: false,
            })
        }            
    }

    checkBoxScience() {
        let boxValueScience = this.state.boxValueScience;
        if (boxValueScience === false){
            this.setState({
                boxValueScience: true,
            })
        } else {
            this.setState({
                boxValueScience: false,
            })
        }            
    }

    checkBoxSocial() {
        let boxValueSocial = this.state.boxValueSocial;
        if (boxValueSocial === false){
            this.setState({
                boxValueSocial: true,
            })
        } else {
            this.setState({
                boxValueSocial: false,
            })
        }            
    }

    checkBoxForest() {
        let boxValueForest = this.state.boxValueForest;
        if (boxValueForest === false){
            this.setState({
                boxValueForest: true,
            })
        } else {
            this.setState({
                boxValueForest: false,
            })
        }            
    }

    checkBoxTerms() {
        let boxValueTerms = this.state.boxValueTerms;
        if (boxValueTerms === false){
            this.setState({
                boxValueTerms: true,
                boxValueTerms1: true,
                boxValueTerms2: true,
                boxValueTerms3: true,
                boxValueTerms4: true, 
            })
        } else {
            this.setState({
                boxValueTerms: false,
            })
        }            
    }

    checkBoxTerms1() {
        let boxValueTerms1 = this.state.boxValueTerms1;
        if (boxValueTerms1 === false){
            this.setState({
                boxValueTerms1: true,
            })
        } else {
            this.setState({
                boxValueTerms1: false,
                boxValueTerms: false,
            })
        }            
    }

    checkBoxTerms2() {
        let boxValueTerms2 = this.state.boxValueTerms2;
        if (boxValueTerms2 === false){
            this.setState({
                boxValueTerms2: true,
            })
        } else {
            this.setState({
                boxValueTerms2: false,
                boxValueTerms: false,
            })
        }            
    }

    checkBoxTerms3() {
        let boxValueTerms3 = this.state.boxValueTerms3;
        if (boxValueTerms3 === false){
            this.setState({
                boxValueTerms3: true,
            })
        } else {
            this.setState({
                boxValueTerms3: false,
                boxValueTerms: false,
            })
        }            
    }

    checkBoxTerms4() {
        let boxValueTerms4 = this.state.boxValueTerms4;
        if (boxValueTerms4 === false){
            this.setState({
                boxValueTerms4: true,
            })
        } else {
            this.setState({
                boxValueTerms4: false,
                boxValueTerms: false,
            })
        }            
    }

    checkBoxTerms_1() {
        let boxValueTerms_1 = this.state.boxValueTerms_1;
        if (boxValueTerms_1 === false){
            this.setState({
                boxValueTerms_1: true,
                boxValueTerms1_1: true,
                boxValueTerms2_1: true,
                boxValueTerms3_1: true,
                boxValueTerms4_1: true,
                boxValueTerms5_1: true,
            })
        } else {
            this.setState({
                boxValueTerms_1: false,
            })
        }            
    }

    checkBoxTerms1_1() {
        let boxValueTerms1_1 = this.state.boxValueTerms1_1;
        if (boxValueTerms1_1 === false){
            this.setState({
                boxValueTerms1_1: true,
            })
        } else {
            this.setState({
                boxValueTerms1_1: false,
                boxValueTerms_1: false,
            })
        }            
    }

    checkBoxTerms2_1() {
        let boxValueTerms2_1 = this.state.boxValueTerms2_1;
        if (boxValueTerms2_1 === false){
            this.setState({
                boxValueTerms2_1: true,
            })
        } else {
            this.setState({
                boxValueTerms2_1: false,
                boxValueTerms_1: false,
            })
        }            
    }

    checkBoxTerms3_1() {
        let boxValueTerms3_1 = this.state.boxValueTerms3_1;
        if (boxValueTerms3_1 === false){
            this.setState({
                boxValueTerms3_1: true,
            })
        } else {
            this.setState({
                boxValueTerms3_1: false,
                boxValueTerms_1: false,
            })
        }            
    }

    checkBoxTerms4_1() {
        let boxValueTerms4_1 = this.state.boxValueTerms4_1;
        if (boxValueTerms4_1 === false){
            this.setState({
                boxValueTerms4_1: true,
            })
        } else {
            this.setState({
                boxValueTerms4_1: false,
                boxValueTerms_1: false,
            })
        }            
    }

    checkBoxTerms5_1() {
        let boxValueTerms5_1 = this.state.boxValueTerms5_1;
        if (boxValueTerms5_1 === false){
            this.setState({
                boxValueTerms5_1: true,
            })
        } else {
            this.setState({
                boxValueTerms5_1: false,
                boxValueTerms_1: false,
            })
        }            
    }

    button() {
        Alert.alert(
            'Alert Title',
            'Alert message here...',
        );
    }

    subButton() {
        Alert.alert(
            '등록요청이 접수되었습니다.',
            '7일 이내에 연락드리도록 하겠습니다.',
        );
    }

    render() {
        var EnrollmentView;
        var EnrollmentViewSelect;
        console.log(this.state.newTeacherName)
        console.log(this.state.check1)
        console.log(this.state.check2)
        if(this.state.selectButton == '1') {
            console.log('selectButton is ' + this.state.selectButton + ' and 개인')
            EnrollmentViewSelect = (<View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, backgroundColor: '#F8C747', height: 5}}></View>
                <View style={{flex: 1, backgroundColor: 'white', height: 5}}></View>
            </View>);
            EnrollmentView = (<View style={{flex: 1}}>
                <View style={{margin:20}}>
                    <View><Text style={{fontSize: 20}}>이름</Text></View>
                    <View style={{borderColor: '#F8C747', borderBottomWidth: 1, height: 40, paddingTop: 5}}><TextInput style={{fontSize: 15, textAlign: 'center'}} value={this.state.newTeacherName} onChangeText={(newTeacherName) => this.setState({newTeacherName})}></TextInput></View>
                    <View style={{marginTop: 10}}><Text>휴대폰 (본인명의)</Text></View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity style={{marginTop: 20, width: '95%', height: 50, borderWidth: 1, borderColor: 'gray', justifyContent: 'center', alignItems: 'center', borderRadius: 20}} onPress={() => this.button()}>
                        <Text style={{fontSize: 15}}>휴대폰 인증</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <View style={{flex: 1, justifyContent: 'center'}}><Text style={{fontSize: 15}}>성별</Text></View>
                        <View style={{flex: 3, flexDirection: 'row'}}>
                            <TouchableOpacity style={{height: 45}}>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    <CheckBox value={this.state.check1} onChange={() =>this.radioButton()} />
                                    <Text style={{fontSize: 15}}>남</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{height: 45, marginLeft: 20}}>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    <CheckBox value={this.state.check2} onChange={() =>this.radioButton()} />
                                    <Text style={{fontSize: 15}}>여</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <View style={{flex: 1, justifyContent: 'center'}}><Text style={{fontSize: 15}}>경력</Text></View>
                        <View style={{flex: 3}}>
                            <View style={{borderColor: '#F8C747', borderBottomWidth: 1, height: 40, width: '90%', paddingTop: 5}}><TextInput style={{fontSize: 15, textAlign: 'center'}} value={this.state.newCareer} onChangeText={(newCareer) => this.setState({newCareer})}></TextInput></View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <View style={{flex: 1, justifyContent: 'center'}}><Text style={{fontSize: 15}}>활동분야</Text></View>
                        <View style={{flex: 3, flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center',}}>
                                <CheckBox value={this.state.boxValueHistory} onChange={() =>this.checkBoxHistory()}/>
                                <Text>한국사</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center',}}>
                                <CheckBox value={this.state.boxValueScience} onChange={() =>this.checkBoxScience()}/>
                                <Text>과학</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center',}}>
                                <CheckBox value={this.state.boxValueSocial} onChange={() =>this.checkBoxSocial()}/>
                                <Text>사회</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center',}}>
                                <CheckBox value={this.state.boxValueForest} onChange={() =>this.checkBoxForest()}/>
                                <Text>숲</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop: 20, backgroundColor: '#EDEDEB', paddingRight: 20, paddingLeft: 20}}>
                        <View style={{flexDirection: 'row', height: 60, alignItems: 'center', borderBottomWidth:1, borderColor: 'grey'}}>
                        <View style={{flex: 8, marginRight: 10}}>
                                <Text>이용약관 전체동의</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <CheckBox value={this.state.boxValueTerms} onChange={() =>this.checkBoxTerms()}/>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                            <View style={{flex: 8, marginRight: 10}}>
                                <Text>만 14세 이상입니다.(필수)</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <CheckBox value={this.state.boxValueTerms1} onChange={() =>this.checkBoxTerms1()}/>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                            <View style={{flex: 8, marginRight: 10}}>
                                <Text>서비스 이용약관에 동의합니다.(필수)</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <CheckBox value={this.state.boxValueTerms2} onChange={() =>this.checkBoxTerms2()}/>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                            <View style={{flex: 8, marginRight: 10}}>
                                <Text>개인정보 수집이용에 동의합니다.(필수)</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <CheckBox value={this.state.boxValueTerms3} onChange={() =>this.checkBoxTerms3()}/>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 10}}>
                            <View style={{flex: 8, marginRight: 10}}>
                                <Text>전자적 전송메체를 이용한 광고성 정보의 수신에 동의합니다.(선택)</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <CheckBox value={this.state.boxValueTerms4} onChange={() =>this.checkBoxTerms4()}/>
                            </View>
                        </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity style={{marginTop: 20, width: '95%', height: 50, borderWidth: 1, borderColor: 'gray', justifyContent: 'center', alignItems: 'center', borderRadius: 20}} onPress={() => this.subButton()}>
                        <Text style={{fontSize: 15}}>강사등록요청</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>)
        } else if (this.state.selectButton == '2'){
            console.log('selectButton is ' + this.state.selectButton + ' and 그룹/브랜드')
            EnrollmentViewSelect = (<View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, backgroundColor: 'white', height: 5}}></View>
                <View style={{flex: 1, backgroundColor: '#F8C747', height: 5}}></View>
            </View>);
            EnrollmentView = (<View style={{flex: 1}}>
                <View style={{margin:20}}>
                    <View><Text style={{fontSize: 20}}>대표자</Text></View>
                    <View style={{borderColor: '#F8C747', borderBottomWidth: 1, height: 40, paddingTop: 5}}><TextInput style={{fontSize: 15, textAlign: 'center'}} value={this.state.newAgentName} onChangeText={(newAgentName) => this.setState({newAgentName})}></TextInput></View>
                    <View style={{marginTop: 10}}><Text>휴대폰 (본인명의)</Text></View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity style={{marginTop: 20, width: '95%', height: 50, borderWidth: 1, borderColor: 'gray', justifyContent: 'center', alignItems: 'center', borderRadius: 20}} onPress={() => this.button()}>
                        <Text style={{fontSize: 15}}>휴대폰 인증</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <View style={{flex: 1, justifyContent: 'center'}}><Text style={{fontSize: 15}}>성별</Text></View>
                        <View style={{flex: 3, flexDirection: 'row'}}>
                            <TouchableOpacity style={{height: 45}}>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    <CheckBox value={this.state.check3} onChange={() =>this.radioButton2()} />
                                    <Text style={{fontSize: 15}}>남</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{height: 45, marginLeft: 20}}>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    <CheckBox value={this.state.check4} onChange={() =>this.radioButton2()} />
                                    <Text style={{fontSize: 15}}>여</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <View style={{flex: 1, justifyContent: 'center'}}><Text style={{fontSize: 15}}>보유강사수</Text></View>
                        <View style={{flex: 3}}>
                            <View style={{borderColor: '#F8C747', borderBottomWidth: 1, height: 40, width: '90%', paddingTop: 5}}><TextInput style={{fontSize: 15, textAlign: 'center'}} value={this.state.newTeacherCount} onChangeText={(newTeacherCount) => this.setState({newTeacherCount})}></TextInput></View>
                        </View>
                    </View>
                    <View style={{marginTop: 20, backgroundColor: '#EDEDEB', paddingRight: 20, paddingLeft: 20}}>
                        <View style={{flexDirection: 'row', height: 60, alignItems: 'center', borderBottomWidth:1, borderColor: 'grey'}}>
                        <View style={{flex: 8, marginRight: 10}}>
                                <Text>이용약관 전체동의</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <CheckBox value={this.state.boxValueTerms_1} onChange={() =>this.checkBoxTerms_1()}/>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                            <View style={{flex: 8, marginRight: 10}}>
                                <Text>만 14세 이상입니다.(필수)</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <CheckBox value={this.state.boxValueTerms1_1} onChange={() =>this.checkBoxTerms1_1()}/>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                            <View style={{flex: 8, marginRight: 10}}>
                                <Text>서비스 이용약관에 동의합니다.(필수)</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <CheckBox value={this.state.boxValueTerms2_1} onChange={() =>this.checkBoxTerms2_1()}/>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                            <View style={{flex: 8, marginRight: 10}}>
                                <Text>개인정보 수집이용에 동의합니다.(필수)</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <CheckBox value={this.state.boxValueTerms3_1} onChange={() =>this.checkBoxTerms3_1()}/>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 10}}>
                            <View style={{flex: 8, marginRight: 10}}>
                                <Text>전자적 전송메체를 이용한 광고성 정보의 수신에 동의합니다.(선택)</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <CheckBox value={this.state.boxValueTerms4_1} onChange={() =>this.checkBoxTerms4_1()}/>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 10}}>
                            <View style={{flex: 8, marginRight: 10}}>
                                <Text>장기 미접속 시에도 계정을 활성 상태로 유지합니다.(선택)</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <CheckBox value={this.state.boxValueTerms5_1} onChange={() =>this.checkBoxTerms5_1()}/>
                            </View>
                        </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity style={{marginTop: 20, width: '95%', height: 50, borderWidth: 1, borderColor: 'gray', justifyContent: 'center', alignItems: 'center', borderRadius: 20}} onPress={() => this.subButton()}>
                        <Text style={{fontSize: 15}}>강사등록요청</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>)
        }
        return (
        <View style={styles.container}>
            <View style={{height: 45}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{flex: 1, height: 45}} onPress={() => this.onClick(1)}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 20}}>개인</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, height: 45}} onPress={() => this.onClick(2)}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 20}}>그룹/브랜드</Text>
                        </View>
                    </TouchableOpacity>
                </View>    
            </View>
            { EnrollmentViewSelect }
            <ScrollView style={{flex: 1}}>
                { EnrollmentView }
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
