import React from 'react';
import { StyleSheet, View ,Platform, ActivityIndicator} from 'react-native';

const Loader =(props) => {
    return (
        <View style={styles.loaderContainer}>
         <ActivityIndicator size="large" color={props.color} />
        </View>
    )
}

const styles = StyleSheet.create({
    loaderContainer:{
        flex: 1,
        justifyContent: 'center'
    },
  });

export default Loader;