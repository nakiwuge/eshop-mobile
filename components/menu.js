import React from 'react';
import { StyleSheet, Text, View , Button, Platform} from 'react-native';
import Icon from '../node_modules/react-native-vector-icons/Ionicons';

const Menu =(props) => {
    return (
        <View style={styles.menuContainer}>
         <Icon
           name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
           color='black'
           size={32}
           style={styles.Icon}
           onPress={()=>props.navigation.toggleDrawer()}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    menuContainer:{
        backgroundColor:'#117A65',
        height:Platform.OS === "ios" ? '12%': '8%',
    },
    Icon: {
     top: Platform.OS === "ios" ? 60: 10,
     left:10,
    },
  });

export default Menu;
