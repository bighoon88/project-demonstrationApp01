import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

const Card = ({data}) => (
    
    <View style={styles.CardContainer}>
        <View style={styles.Card}>
            <Image source={data.image} style={styles.Image}/>
            <View style={styles.Text}>
                <Text style={styles.Title}>{data.name}</Text>
                <Text style={styles.place}>{data.place}</Text>
                <Text style={styles.date}>{data.date}</Text>
                <Text style={styles.Price}>{data.price} 원</Text>
            </View>
        </View> 
    </View>
)

const resizeComponent = (value, percentage) => {
    return value - (value * (percentage / 100));
}

const Window = {
    Height: Dimensions.get('window').height,
    Width: Dimensions.get('window').width
}

const CardContainerSize = {
    Width: resizeComponent(Window.Width, 50),
    Height: resizeComponent(200, 5),
}

const styles = StyleSheet.create({
    CardContainer: {
        height: 232,
        width: CardContainerSize.Width,
        justifyContent: 'center',
        alignItems: 'center',
    },    
    Card: {
        height: resizeComponent(200, 5),
        width: resizeComponent(CardContainerSize.Width, 5),
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Image: {
        width: resizeComponent(CardContainerSize.Width, 10),
        height: 130,
        resizeMode: 'stretch'
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

export default Card;