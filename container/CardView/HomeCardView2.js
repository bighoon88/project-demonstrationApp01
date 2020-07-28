import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, FlatList, Text, Dimensions, ImageBackground } from 'react-native';
import { Card } from '../../components/Card'

export default class CardView extends React.Component {
    constructor(props){
        super(props);
        state = {                      
        }           
    }

    state = {
        data: [],
        isLoading: false,
    }
    
    componentDidMount(){
        console.log('componentDidMount')
        this.getPostData2();
    }

    getPostData = async() => {
        console.log('getPostData')
        const data = await this.callPostData();
        data.sort((a, b) => {
            return a.id > b.id
        })
        this.setState({
            data: data,
            isLoading: true
        })
    }

    getPostData2() {
        console.log('getPostData2')
        const data = this.callPostData2();
        
        this.setState({
            data: data,
            isLoading: true,
        })    
    }

    callPostData = async() => {
        console.log('callPostData')
        ListData = [
            {id: 1, name: '[사회] 핵심국가기관탐방', image: require('../../images/메인1썸네일_핵심국가기관탐방.bmp'), date: '2019-04-21', price: '45,000', place: '청와대+국회', tag: '신규', location: '서울'},
            {id: 2, name: '[사회] 핵심공공기관탐방', image: require('../../images/메인2썸네일_핵심공공기관탐방.bmp'), date: '2019-04-21', price: '25,000', place: '서울시청+경찰박물관', tag: '신규', location: '서울'},
            {id: 3, name: '[사회] 핵심국가기관탐방', image: require('../../images/화폐와경제활동이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '화폐박물관+통인시장', tag: '신규', location: '서울'},
            {id: 4, name: '[사회] 우리문화탐방', image: require('../../images/우리문화이미지1.png'), date: '2019-04-21', price: '45,000', place: '한국관광공사+국립민속박물관', tag: '', location: '서울'},
            {id: 5, name: '[과학] 과학의 기초', image: require('../../images/과학의기초이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '서울특별시교육청과학전시관 남산분관+남산타워 봉수대', tag: '', location: '서울'},
            {id: 6, name: '[과학] 자연의 역사와 미래도시', image: require('../../images/자연의역사와미래도시이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '서대문자연사박물관+디지털파빌리온', tag: '', location: '서울'},
            {id: 7, name: '[과학] 생물 자원과 자원의 재생', image: require('../../images/생물자원과자원의재생이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '국립생물자원관+수도권매립지', tag: '', location: '서울'},
            {id: 8, name: '[과학] 한국과학문명과 첨단기술', image: require('../../images/한국과학문명과첨단기술이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '국립과천과학관', tag: '', location: '서울'},
            {id: 9, name: '[한국사] 선사시대와 역사시대', image: require('../../images/선사시대와역사시대이미지-움집.jpg'), date: '2019-04-21', price: '45,000', place: '암사동선사주거지+몽촌토성', tag: '', location: '서울'},
            {id: 10, name: '[한국사] 전쟁의 역사', image: require('../../images/전쟁의역사이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '전쟁기념관', tag: '', location: '서울'},
            {id: 11, name: '[한국사] 조선왕조와 궁궐문화', image: require('../../images/조선왕조와궁궐문화이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '경복궁+고궁박물관', tag: '', location: '서울'},
            {id: 12, name: '[한국사] 대한제국과 일제강점기', image: require('../../images/대한제국과일제강점기이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '덕수궁+중명전+서대문형무소', tag: '', location: '서울'},
            {id: 13, name: '[환경생태] 곤충과 자연', image: require('../../images/곤충과자연이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '곤충식물원+서울숲', tag: '', location: '서울'},
            {id: 14, name: '[환경생태] 동물과 자연', image: require('../../images/동물과자연이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '서울어린이대공원', tag: '', location: '서울'},
            {id: 15, name: '[환경생태] 문화와 자연', image: require('../../images/문화와자연이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '국립중앙박물관+용산가족공원', tag: '', location: '서울'},
            {id: 16, name: '[환경생태] 환경과 자연', image: require('../../images/환경과자연이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '월드컵공원+에너지드림센터', tag: '', location: '서울'},
            {id: 20, name: '[역사] 조선왕조와 궁궐문화', image: require('../../images/메인3썸네일_경복궁고궁박물관.bmp'), date: '2019-04-21', price: '15,000', place: '경복궁+고궁박물관', tag: '', location: '부산'},
            
        ]
        return ListData
    }

    callPostData2() {
        console.log('callPostData2')
        ListData = [
            {id: 1, name: '[사회] 핵심국가기관탐방', image: require('../../images/메인1썸네일_핵심국가기관탐방.bmp'), date: '2019-04-21', price: '45,000', place: '청와대+국회', tag: '신규', location: '서울'},
            {id: 2, name: '[사회] 핵심공공기관탐방', image: require('../../images/메인2썸네일_핵심공공기관탐방.bmp'), date: '2019-04-21', price: '25,000', place: '서울시청+경찰박물관', tag: '신규', location: '서울'},
            {id: 3, name: '[사회] 핵심국가기관탐방', image: require('../../images/화폐와경제활동이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '화폐박물관+통인시장', tag: '신규', location: '서울'},
        ]
        return ListData
    }

    renderRow(item, userInfo) {
        return (
            <View style={styles.CardContainer2}>
                <View style={styles.rowCard}>
                    <TouchableOpacity key={item[0].id} onPress={() => this.props.navigation.navigate('CardDetail', {
                            CardData: item[0],
                            userInfo: userInfo
                        })}>
                    <ImageBackground source={item[0].image} style={styles.Image} imageStyle={{resizeMode: 'stretch'}}>
                        <Text style={{fontWeight: 'bold', color: 'white', position: 'absolute', top: 0, left: 0, backgroundColor: 'red'}}>{item[0].tag}</Text>
                    </ImageBackground>
                    <View style={styles.Text}>
                        <Text style={styles.Title}>{item[0].name}</Text>
                        <Text style={styles.place}>{item[0].place}</Text>
                        <Text style={styles.date}>{item[0].date}</Text>
                        <Text style={styles.Price}>{item[0].price} 원</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                {item.length > 1 ?
                    <View style={styles.rowCard}>
                        <TouchableOpacity key={item[1].id} onPress={() => this.props.navigation.navigate('CardDetail', {
                            CardData: item[1],
                            userInfo: userInfo
                        })}>
                        <ImageBackground source={item[1].image} style={styles.Image} imageStyle={{resizeMode: 'stretch'}}>
                            <Text style={{fontWeight: 'bold', color: 'white', position: 'absolute', top: 0, left: 0, backgroundColor: 'red'}}>{item[1].tag}</Text>
                        </ImageBackground>
                        <View style={styles.Text}>
                            <Text style={styles.Title}>{item[1].name}</Text>
                            <Text style={styles.place}>{item[1].place}</Text>
                            <Text style={styles.date}>{item[1].date}</Text>
                            <Text style={styles.Price}>{item[1].price} 원</Text>
                        </View>
                        </TouchableOpacity>
                    </View> : <View style={styles.rowCard}></View>}
            </View>
        );
    }

    render() {
        console.log('HomeCardView')
        const userInfo = this.props.userInfo
        var arrays = [], size = 2;
        console.log(this.state.data.length)
        while (this.state.data.length > 0) {
            arrays.push(this.state.data.splice(0, size));
        }
        return (
            <View>
                <ScrollView horizontal={true} pagingEnabled = {true} showsHorizontalScrollIndicator={true}>
                    <View style={styles.cardContainer}>
                    <FlatList 
                        data={arrays}
                        horizontal={true}
                        renderItem={({ item, index }) => this.renderRow(item, userInfo)}
                        keyExtractor={( item, index) => index.toString()}
                    />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const Window = {
    Height: Dimensions.get('window').height,
    Width: Dimensions.get('window').width
}

const resizeComponent = (value, percentage) => {
    return value - (value * (percentage / 100));
}

const CardContainerSize = {
    Width: resizeComponent(Window.Width, 50),
    Height: resizeComponent(232, 5),
}
  
const styles = StyleSheet.create({
    header: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    CardContainer2: {
        height: 402,
        width: CardContainerSize.Width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rowCard: {
        width: resizeComponent(CardContainerSize.Width, 4),
        height: resizeComponent(242, 20),
        marginBottom: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Image: {
        width: resizeComponent(CardContainerSize.Width, 10),
        height: 100,
    },
    Text: {
        width: resizeComponent(CardContainerSize.Width, 10),
        height: 90,
        justifyContent: 'space-between'
    },
    Title: {
        fontSize: 13,
        fontWeight: 'bold',
        paddingTop: 6,
        left: 4,
    },
    place: {
        marginTop: 2,
        fontSize: 12,
        left: 4,
    },
    date: {
        fontSize: 11,
        left: 4,
    },
    Price: {
        fontSize: 13,
        color: 'red',
        textAlign: 'right',
    }
});