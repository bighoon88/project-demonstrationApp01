import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SearchCard } from '../../components/Card'

export default class CardView extends React.Component {
    constructor(props){
        super(props);
        state = {
            sortInfo: '',
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

    componentDidUpdate(prevProps) {
        console.log('componentDidUpdate')
        if (this.props.sortInfo === '') {
            console.log('first')
        } else if (prevProps.sortInfo !== this.props.sortInfo) {
            console.log('not first')
            this.setState({ sortInfo: this.props.sortInfo });
            this.getPostData2(this.props.sortInfo)
        }
    }

    getPostData = async() => {
        console.log('getPostData')
        const data = await this.callPostData();
        data.sort((a, b) => {
            return a.name > b.name
        })
        this.setState({
            data: data,
            isLoading: true
        })
    }

    getPostData2(sortInfo) {
        console.log('getPostData2')
        console.log(sortInfo)
        const data = this.callPostData2();
        if (sortInfo === undefined){
            data.sort((a, b) => {
                return a.name > b.name
            })
        } else if (sortInfo === '0') {
            data.sort((a, b) => {
                return a.name > b.name
            })
        } else if (sortInfo === '3'){
            data.sort((a, b) => {
                return a.price > b.price
            })
        } else if (sortInfo === '4'){
            data.sort((a, b) => {
                return a.price < b.price
            })
        }
        
        this.setState({
            data: data,
            isLoading: true
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
            {id: 12, name: '[한국사] 대한제국과 일제강점기', image: require('../../images/대한제국과일제강점기이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '덕수궁+중명전+러시아공사관터+서대문형무소', tag: '', location: '서울'},
            {id: 13, name: '[환경생태] 곤충과 자연', image: require('../../images/곤충과자연이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '곤충식물원+서울숲', tag: '', location: '서울'},
            {id: 14, name: '[환경생태] 동물과 자연', image: require('../../images/동물과자연이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '서울어린이대공원', tag: '', location: '서울'},
            {id: 15, name: '[환경생태] 문화와 자연', image: require('../../images/문화와자연이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '국립중앙박물관+용산가족공원', tag: '', location: '서울'},
            {id: 16, name: '[환경생태] 환경과 자연', image: require('../../images/환경과자연이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '월드컵공원+에너지드림센터', tag: '', location: '서울'},
            {id: 20, name: '[역사] 조선왕조와 궁궐문화', image: require('../../images/메인3썸네일_경복궁고궁박물관.bmp'), date: '2019-04-21', price: '15,000', place: '경복궁+고궁박물관', tag: '', location: '부산'},
            {id: 21, name: '[자연] 자연의 역사와 미래', image: require('../../images/메인4썸네일_서대문자연사+디지털파빌리온.bmp'), date: '2019-04-22', price: '40,000', place: '서대문자연사박물관+디지털파빌리온', tag: '', location: '서울'},
        ]
        return ListData
    }

    callPostData2() {
        console.log('callPostData2')
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
            {id: 12, name: '[한국사] 대한제국과 일제강점기', image: require('../../images/대한제국과일제강점기이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '덕수궁+중명전+러시아공사관터+서대문형무소', tag: '', location: '서울'},
            {id: 13, name: '[환경생태] 곤충과 자연', image: require('../../images/곤충과자연이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '곤충식물원+서울숲', tag: '', location: '서울'},
            {id: 14, name: '[환경생태] 동물과 자연', image: require('../../images/동물과자연이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '서울어린이대공원', tag: '', location: '서울'},
            {id: 15, name: '[환경생태] 문화와 자연', image: require('../../images/문화와자연이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '국립중앙박물관+용산가족공원', tag: '', location: '서울'},
            {id: 16, name: '[환경생태] 환경과 자연', image: require('../../images/환경과자연이미지1.jpg'), date: '2019-04-21', price: '45,000', place: '월드컵공원+에너지드림센터', tag: '', location: '서울'},
            {id: 20, name: '[역사] 조선왕조와 궁권문화', image: require('../../images/메인3썸네일_경복궁고궁박물관.bmp'), date: '2019-04-21', price: '15,000', place: '경복궁+고궁박물관', tag: '', location: '부산'},
            {id: 21, name: '[자연] 자연의 역사와 미래', image: require('../../images/메인4썸네일_서대문자연사+디지털파빌리온.bmp'), date: '2019-04-22', price: '40,000', place: '서대문자연사박물관+디지털파빌리온', tag: '', location: '서울'},
        ]
        return ListData
    }

    render() {
        console.log('SearchCardView')
        const targetDate = this.props.navigation.getParam('targetDate')
        const targetTime = this.props.navigation.getParam('targetTime')
        const targetLocation = this.props.navigation.getParam('targetLocation')
        const targetTopic = this.props.navigation.getParam('targetTopic')
        const targetCount = this.props.navigation.getParam('targetCount')
        const targetType = this.props.navigation.getParam('targetType')
        const userInfo = this.props.userInfo
        const sortInfo = this.props.sortInfo
        const data = this.state.data
        console.log(data.length)
        contents = this.state.data.map((data, index) =>{
            if (targetDate === data.date) {
                if(targetLocation === data.location) {
                    return (
                        <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('CardDetail2', {
                            CardData: data,
                            userInfo: userInfo
                        })}>
                            <SearchCard
                                data={data}
                            />
                        </TouchableOpacity>
                    )
                } else if (targetLocation === '') {
                    return (
                        <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('CardDetail2', {
                            CardData: data,
                            userInfo: userInfo
                        })}>
                            <SearchCard
                                data={data}
                            />
                        </TouchableOpacity>
                    )
                }
            } else if (targetDate === '날짜') {
                if(targetLocation === data.location) {
                    return (
                        <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('CardDetail2', {
                            CardData: data,
                            userInfo: userInfo
                        })}>
                            <SearchCard
                                data={data}
                            />
                        </TouchableOpacity>
                    )
                } else if (targetLocation === '') {
                    return (
                        <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('CardDetail2', {
                            CardData: data,
                            userInfo: userInfo
                        })}>
                            <SearchCard
                                data={data}
                            />
                        </TouchableOpacity>
                    )
                }
            }
            
        })
        return (
                <ScrollView >
                    <View style={styles.cardContainer}>
                        {contents}
                    </View>
                </ScrollView>
        );
    }
}
  
const styles = StyleSheet.create({
    header: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});