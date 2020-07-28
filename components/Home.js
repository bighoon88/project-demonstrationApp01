import React, { Component } from "react";
import { Platform, StyleSheet, FlatList, Text, View, Alert, ScrollView, Image, ImageBackground, ListView, Dimensions, TouchableOpacity, Linking } from "react-native";
import { CardView, HomeCardView, HomeCardView2 } from '../container/CardView';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewType: ''
        };
    }

    static navigationOptions = {
        header: null,
    };

    buttonClickListener = (text) => {
        this.setState({
            viewType: text
        })
    };

    button() {
        Alert.alert(
            'Alert Title',
            'Alert message here...',
        );
    }

    render() {
        console.log('Home.js')
        console.ignoredYellowBox = [ 'Setting a timer' ]
        let screenWidth = Dimensions.get('window').width;
        var CardViewForm;
        const userInfo = this.props.screenProps
        if(this.state.viewType === 'BEST') {
            CardViewForm = ( <HomeCardView navigation={this.props.navigation} userInfo={userInfo} viewType={this.state.viewType}/> )
            console.log('BEST')
        } else if (this.state.viewType === 'NEW') {
            CardViewForm = ( <HomeCardView2 navigation={this.props.navigation} userInfo={userInfo} viewType={this.state.viewType}/> )
            console.log('NEW')
        } else {
            CardViewForm = ( <HomeCardView navigation={this.props.navigation} userInfo={userInfo} viewType={this.state.viewType}/> )
            console.log('')
        }

        return (
            <View style={styles.HomeContainer}>
            <ScrollView style={{flex: 1}}>
                <View style={{height: 250, backgroundColor: 'blue'}}>
                    <ScrollView horizontal={true} pagingEnabled = {true} showsHorizontalScrollIndicator={true}>
                        <View style={{width: screenWidth}}>
                            <ImageBackground style={{flex: 1}} source={require('../images/상단배너1.jpg')}>
                                <View style={{flex:1, flexDirection: 'row'}}>
                                    <View style={{flex: 2, justifyContent: 'flex-end'}}>
                                        <View style={{backgroundColor: 'white', bottom: 20, width: 80, height: 30, left: 15, justifyContent: 'center', alignItems: 'center'}}>
                                            <TouchableOpacity onPress={() => this.button()}>
                                                <Text style={{fontSize: 19, color: 'gray', textAlign: 'center'}}>강사찾기</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{left: 15, bottom: 20}}>
                                            <Text style={{fontSize: 18, color: 'white', textAlign: 'left'}}>내 주변에 체험학습선생님을</Text>
                                            <Text style={{fontSize: 18, color: 'white', textAlign: 'left'}}>찾아보세요</Text>
                                        </View>
                                    </View>
                                    <View style={{flex: 1}}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('EnrollmentTeacher', {
                                            userInfo: userInfo
                                        })} style={{flex: 1, alignItems: 'flex-end'}}>
                                            <View>
                                                <Text style={{fontSize: 15, color: 'white', textAlign: 'right', top: 30, right: 20}}>강사등록</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <View style={{flex: 1, justifyContent: 'flex-end'}}>
                                            <Text style={{fontSize: 15, color: 'white', textAlign: 'right', bottom: 20, right: 20 }}>1/3</Text>
                                        </View>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{width: screenWidth}}>
                            <ImageBackground style={{flex: 1}} source={require('../images/상단배너2.jpg')}>
                                <View style={{flex:1, flexDirection: 'row'}}>
                                    <View style={{flex: 2, justifyContent: 'flex-end'}}>
                                        <View style={{backgroundColor: 'white', bottom: 20, width: 95, height: 30, left: 15, justifyContent: 'center', alignItems: 'center'}}>
                                            <Text style={{fontSize: 8, color: 'gray', textAlign: 'center'}}>한국사, 사회, 과학, 환경생태</Text>
                                        </View>
                                        <View style={{left: 15, bottom: 20}}>
                                            <Text style={{fontSize: 16, color: 'white', textAlign: 'left'}}>초등학생이면, 꼭 가봐야 할 체험학습을</Text>
                                            <Text style={{fontSize: 16, color: 'white', textAlign: 'left'}}>묶어 만든 초등통합필수 16선</Text>
                                            <Text style={{fontSize: 14, color: 'white', textAlign: 'left'}}>지금, 신청하세요</Text>
                                        </View>
                                    </View>
                                    <View style={{flex: 1}}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('EnrollmentTeacher', {
                                            userInfo: userInfo
                                        })} style={{flex: 1, alignItems: 'flex-end'}}>
                                            <View>
                                                <Text style={{fontSize: 15, color: 'white', textAlign: 'right', top: 30, right: 20}}>강사등록</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <View style={{flex: 1, justifyContent: 'flex-end'}}>
                                            <Text style={{fontSize: 15, color: 'white', textAlign: 'right', bottom: 20, right: 20 }}>2/3</Text>
                                        </View>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{width: screenWidth}}>
                            <ImageBackground style={{flex: 1}} source={require('../images/상단배너3.jpg')}>
                                <View style={{flex:1, flexDirection: 'row'}}>
                                    <View style={{flex: 2, justifyContent: 'flex-end'}}>
                                        <View style={{backgroundColor: 'white', bottom: 20, width: 95, height: 30, left: 15, justifyContent: 'center', alignItems: 'center'}}>
                                            <Text style={{fontSize: 19, color: 'gray', textAlign: 'center'}}>강사매칭</Text>
                                        </View>
                                        <View style={{left: 15, bottom: 20}}>
                                            <Text style={{fontSize: 16, color: 'white', textAlign: 'left'}}>원하는 선생님을 경력, 성향, 지역 등</Text>
                                            <Text style={{fontSize: 16, color: 'white', textAlign: 'left'}}>맞춤형으로 매칭해드립니다.</Text>
                                            <Text style={{fontSize: 14, color: 'white', textAlign: 'left'}}>지금 문의해보세요</Text>
                                        </View>
                                    </View>
                                    <View style={{flex: 1}}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('EnrollmentTeacher', {
                                            userInfo: userInfo
                                        })} style={{flex: 1, alignItems: 'flex-end'}}>
                                            <View>
                                                <Text style={{fontSize: 15, color: 'white', textAlign: 'right', top: 30, right: 20}}>강사등록</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <View style={{flex: 1, justifyContent: 'flex-end'}}>
                                            <Text style={{fontSize: 15, color: 'white', textAlign: 'right', bottom: 20, right: 20 }}>3/3</Text>
                                        </View>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                    </ScrollView>
                </View>
                <View style={{height: 80, backgroundColor: '#F2F2F2', justifyContent: 'center'}}>
                    <View style={{height: 70}}>
                        <ScrollView horizontal={true} style={{backgroundColor: 'white'}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('NecessaryList')}>
                                <View style={{alignItems: 'center', height: 45, width: 90, top: 5}}>
                                    <Image source={require('../images/medal.png')} style={{width: 35, height: 35}} />
                                    <Text style={{fontSize: 12, marginTop:  5}}>필수 16선</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.button()}>
                                <View style={{alignItems: 'center', height: 45, width: 90, top: 5}}>
                                    <Image source={require('../images/think.png')} style={{width: 35, height: 35}} />
                                    <Text style={{fontSize: 12, marginTop:  5}}>특별 체험</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.button()}>
                                <View style={{alignItems: 'center', height: 45, width: 90, top: 5}}>
                                    <Image source={require('../images/backpack.png')} style={{width: 35, height: 35}} />
                                    <Text style={{fontSize: 12, marginTop:  5}}>일반 체험</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.button()}>
                                <View style={{alignItems: 'center', height: 45, width: 90, top: 5}}>
                                    <Image source={require('../images/gyeongbokgung.png')} style={{width: 35, height: 35}} />
                                    <Text style={{fontSize: 12, marginTop:  5}}>한국사 체험</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
                <View style={{flexDirection: 'row', backgroundColor: '#F2F2F2', height: 40}}>
                    <View style={{ flex: 4, justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row', marginLeft: 10, marginRight: 10, alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => this.buttonClickListener('BEST')}>
                                <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>인기 BEST</Text>
                            </TouchableOpacity>
                            <Text style={{fontSize: 10, color: 'black', marginLeft: 3, marginRight: 3, justifyContent: 'center'}}> ● </Text>
                            <TouchableOpacity onPress={() => this.buttonClickListener('NEW')}>
                                <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>새로운 NEW</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <View style={{alignItems: 'flex-end', marginRight: 10, marginLeft: 10, right: 10}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('RequestButtonScreen', {
                                            userInfo: userInfo
                                        })} >
                                <Image source={require('../images/icons8-edit-file-100.png')} style={{width: 26, height: 26}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                { CardViewForm }
                <View style={{marginTop: 5}}>
                    <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold', left: 10}}>이런 강사 어때요?</Text>
                </View>
                <View style={{marginTop: 10}}>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://blog.naver.com/insidepsh/221385587643')}>
                            <View style={{marginLeft: 10, marginRight: 10, width: 260}}>
                                <Image source={require('../images/images14.jpg')} style={{height: 150, width: 260}} />
                                <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 5, marginBottom: 10}}>발리, 전통문화체험하세요. 전혀 다른 발리가 보입니다.</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://blog.naver.com/lkjh5503/221493844828')}>
                            <View style={{marginLeft: 10, marginRight: 10, width: 260}}>
                                <Image source={require('../images/images15.jpg')} style={{height: 150, width: 260}}/>
                                <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 5, marginBottom: 10}}>10월에 몽골을 가야하는 5가지 이유</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://blog.naver.com/hanjun66/221490481715')}>
                            <View style={{marginLeft: 10, marginRight: 10, width: 260}}>
                                <Image source={require('../images/images16.jpg')} style={{height: 150, width: 260}}/>
                                <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 5, marginBottom: 10}}>저와 함께 떠나보실래요? 힐링체험여행</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    HomeContainer: {
        flex: 1,
        marginTop: 24
    },
})