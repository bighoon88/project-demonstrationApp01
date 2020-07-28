import { createAppContainer, createStackNavigator, createBottomTabNavigator, createTopTabNavigator } from 'react-navigation';
import { Image } from 'react-native';
import React from 'react';


// 알림 screen
import Chatting from './Chatting';
import NoticeDetail from './NoticeDetail';

// Plust페이지 screen
import RequestSent from './RequestSent';

// 마이페이지 screen
import MyPage from './MyPage';

// 검색 screen
import SearchList from './SearchList';
import Search from './Search';

// 홈 screen
import Home from './Home';
import CardDetail from './CardDetail';
import Pay from './PayScreen';
import PayComplit from './PayComplitScreen';
import NecessaryList from './NecessaryList';
import EnrollmentTeacher from './EnrollmentTeacher';
import RequestButtonScreen from './RequestButtonScreen';

console.log('AppNavigator.js')

export const bellNavigator = createStackNavigator(
    {
        Chatting:
        {
            screen: Chatting
        },
        NoticeDetail:
        {
            screen: NoticeDetail
        }
    }
)

export const PlusNavigator = createStackNavigator(
    {
        RequestSent:
        {
            screen: RequestSent
        },
    }
)

export const MyPageNavigator = createStackNavigator(
    {
        MyPage:
        {
            screen: MyPage
        },

    }
)

export const SearchNavigator = createStackNavigator(
    {
        Search:
        {
            screen: Search,
        },
        SearchList:
        {
            screen: SearchList,
        },
        CardDetail2:
        {
            screen: CardDetail,
        },
        Pay:
        {
            screen: Pay
        },
        PayComplit:
        {
            screen: PayComplit
        }
    }
)

export const HomeNavigator = createStackNavigator(
    {
        Home:
        {
            screen: Home,
        },
        CardDetail:
        {
            screen: CardDetail
        },
        Pay:
        {
            screen: Pay
        },
        PayComplit:
        {
            screen: PayComplit
        },
        NecessaryList:
        {
            screen: NecessaryList
        },
        EnrollmentTeacher:
        {
            screen: EnrollmentTeacher
        },
        RequestButtonScreen:
        {
            screen: RequestButtonScreen
        },
    }
)

const AppNavigator = createBottomTabNavigator(
    {
        HomeNavigator: 
        { 
            screen: HomeNavigator,
            navigationOptions: 
            {
                title: '홈',
                tabBarIcon: <Image source={require('../images/icons8-home-100.png')} style={{width: 30, height: 30, marginTop: 5}}/>,
                showIcon: true
            },
        },
        SearchNavigator: 
        { 
            screen: SearchNavigator,
            navigationOptions: 
            {
                title: '검색',
                tabBarIcon: <Image source={require('../images/icons8-search-100.png')} style={{width: 30, height: 30, marginTop: 5}}/>,
                showIcon: true
            },
        },
        PlusNavigator:
        {
            screen: PlusNavigator,
            navigationOptions:
            {
                title: 'PLUS',
                tabBarIcon: <Image source={require('../images/puzzle.png')} style={{width: 30, height: 30, marginTop: 5}}/>,
                showIcon: true
            }
        },
        bellNavigator:
        {
            screen: bellNavigator,
            navigationOptions:
            {
                title: '알림',
                tabBarIcon: <Image source={require('../images/alarm.png')} style={{width: 30, height: 30, marginTop: 5}}/>,
                showIcon: true
            }
        },
        MyPageNavigator:
        {
            screen: MyPageNavigator,
            navigationOptions:
            {
                title: '더보기',
                tabBarIcon: <Image source={require('../images/more.png')} style={{width: 30, height: 30, marginTop: 5}}/>,
                showIcon: true
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'blue',
            style:
            {
                backgroundColor: 'white',
                height: '10%',
                marginBottom: 10,
            }
          }
    }
);

export default createAppContainer(AppNavigator);