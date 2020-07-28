import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert, TextInput, CheckBox, Button } from 'react-native';

export default class EnrollmentTeacher extends React.Component {

    static navigationOptions = {
        title: '요청',
    };

    constructor() {
        super();
        this.state = {
            selectButton: '1',
            newRequestContent: '',
            newTeacherCareer: '',
            newTeacherStyle: '',
            newTeacherEtc: '',
        }
    }

    onClick(selectedButton) {
        this.setState({
            selectButton: selectedButton, 
            newRequestContent: '',
            newTeacherCareer: '',
            newTeacherStyle: '',
            newTeacherEtc: '',
        })
    }

    button() {
        Alert.alert(
            'Alert Title',
            'Alert message here...',
        );
    }

    requestButton() {
        console.log(this.state.newRequestContent)
        console.log(this.state.newTeacherCareer)
        console.log(this.state.newTeacherStyle)
        console.log(this.state.newTeacherEtc)
        Alert.alert(
            '요청이 접수되었습니다.',
        );
        this.setState({
            newRequestContent: '',
            newTeacherCareer: '',
            newTeacherStyle: '',
            newTeacherEtc: '',
        })
    }

    render() {
        var EnrollmentView;
        var EnrollmentViewSelect;
        console.log(this.state.newRequestContent)
        if(this.state.selectButton == '1') {
            console.log('selectButton is ' + this.state.selectButton + ' and 희망프로그램')
            EnrollmentViewSelect = (<View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, backgroundColor: '#F8C747', height: 5}}></View>
                <View style={{flex: 1, backgroundColor: 'white', height: 5}}></View>
            </View>);
            EnrollmentView = (<View style={{flex: 1}}>
                <View style={{margin:20}}>
                    <View>
                        <Text>자유롭게 적어주시면 됩니다.(200자 이내)</Text>
                    </View>
                    <View style={{marginTop: 20, width: '95%', height: 250, borderWidth: 1, borderColor: 'gray', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                        <TextInput style={{fontSize: 15, textAlign: 'left', margin: 10, width: '90%', height: '90%'}} value={this.state.newRequestContent} onChangeText={(newRequestContent) => this.setState({newRequestContent})} maxLength={200} multiline={true}></TextInput>
                    </View>
                    <TouchableOpacity style={{marginTop: 20, width: '95%', height: 50, borderWidth: 1, borderColor: 'gray', justifyContent: 'center', alignItems: 'center', borderRadius: 20}} onPress={() => this.requestButton()} >
                        <Text style={{fontSize: 15}}>요청보내기</Text>
                    </TouchableOpacity>
                </View>
            </View>)
        } else if (this.state.selectButton == '2'){
            console.log('selectButton is ' + this.state.selectButton + ' and 희망강사')
            EnrollmentViewSelect = (<View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, backgroundColor: 'white', height: 5}}></View>
                <View style={{flex: 1, backgroundColor: '#F8C747', height: 5}}></View>
            </View>);
            EnrollmentView = (<View style={{flex: 1}}>
                <View style={{margin:20}}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}><Text style={{fontSize: 18}}>기본 조건을 선택해주세요</Text></View>
                    <View style={{marginTop: 20}}>
                        <View><Text style={{fontSize: 20}}>경력</Text></View>
                        <View style={{borderColor: '#F8C747', borderBottomWidth: 1, height: 40, paddingTop: 5}}><TextInput style={{fontSize: 15, textAlign: 'center'}} value={this.state.newTeacherCareer} onChangeText={(newTeacherCareer) => this.setState({newTeacherCareer})}></TextInput></View>
                    </View>
                    <View style={{marginTop: 20}}>
                        <View><Text style={{fontSize: 20}}>수업스타일</Text></View>
                        <View style={{borderColor: '#F8C747', borderBottomWidth: 1, height: 40, paddingTop: 5}}><TextInput style={{fontSize: 15, textAlign: 'center'}} value={this.state.newTeacherStyle} onChangeText={(newTeacherStyle) => this.setState({newTeacherStyle})}></TextInput></View>
                    </View>
                    <View style={{marginTop: 20}}>
                        <View><Text style={{fontSize: 20}}>기타요청사항</Text></View>
                        <View style={{borderColor: '#F8C747', borderBottomWidth: 1, height: 40, paddingTop: 5}}><TextInput style={{fontSize: 15, textAlign: 'center'}} value={this.state.newTeacherEtc} onChangeText={(newTeacherEtc) => this.setState({newTeacherEtc})}></TextInput></View>
                    </View>
                    <TouchableOpacity style={{marginTop: 20, width: '95%', height: 50, borderWidth: 1, borderColor: 'gray', justifyContent: 'center', alignItems: 'center', borderRadius: 20}} onPress={() => this.requestButton()} >
                        <Text style={{fontSize: 15}}>요청보내기</Text>
                    </TouchableOpacity>
                </View>
            </View>)
        }
        return (
        <View style={styles.container}>
            <View style={{height: 45}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{flex: 1, height: 45}} onPress={() => this.onClick(1)}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 20}}>희망프로그램</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, height: 45}} onPress={() => this.onClick(2)}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 20}}>희망강사</Text>
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
