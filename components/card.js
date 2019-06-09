import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const Card = (props) => {

    renderCard = (item) => {
        const imageUri = item.imageUrl != null ? item.imageUrl : ""
        return (
            <View style={styles.card}>
                <Image
                  style={styles.image}
                  source={{ uri: imageUri }}
                />
                <View style={styles.text}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>UGX {item.price}</Text>
                </View>
            </View>)
    }

    return (
        < View style={styles.cardContainer} >
            <FlatList
                data={props.items}
                renderItem={({ item }) => this.renderCard(item)}
                numColumns={2}
                keyExtractor={item => item.id}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        width: 'auto',
        height: 'auto',
        marginTop:'3%',
        marginLeft: '2%',
        marginRight: '2%',
        marginBottom: 0,
        position: 'relative'
    },
    card: {
        margin: '0.5%',
        width: '48%',
        height: 230,
        borderWidth: 0.3,
        borderColor: 'grey'
    },
    image: {
        width: '95%',
        height: '60%',
        margin: 5
    },
    text:{
        alignItems: 'center',
    },
    title:{
        margin: 10,
    },
    price:{
        fontSize: 20,
        fontWeight: 'bold',
    }
});
export default Card;
