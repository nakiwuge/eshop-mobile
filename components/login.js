import React from 'react';
import { StyleSheet, Text, View, Platform , TouchableOpacity} from 'react-native';
import AuthForm from './authForm';

export default class Login extends React.Component {

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Login to Eshop</Text >
        <AuthForm/>
        <View style={styles.textBottom}>
        <Text style={styles.one}>New user?</Text >
        <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Signup')
                }
              >
                  <Text style={styles.two}>Signup here</Text >
              </TouchableOpacity>

        </View >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#117A65',
    alignItems: 'center'
  },
  text:{
    top: Platform.OS === "ios" ? 90: 50,
    left: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ECF0F1'
  },
  textBottom:{
    flex: 1,
    position:'relative',
    marginTop: Platform.OS === "ios" ? 400: 530,
    flexDirection: 'row'
  },
  one:{

    color:'#59318F'

  },
  two:{

    color:'#3498DB'

  }
});