import React from 'react';
import { StyleSheet, Text, View, Button,Platform , TouchableOpacity} from 'react-native';
import AuthForm from './authForm';
import { register } from '../api/auth';

export default class Signup extends React.Component {
  state={
    firstName:null,
    lastName:null,
    email:null,
    password:null,
    confirmPassword:null,
    isLoading:false,
    error:null
  }

  handleChange = (text, field) => {
    this.setState({
      [field]:text
    })
  }

  handleSubmit= async ()=>{
    const {firstName,lastName,email,password,confirmPassword} = this.state
    const data = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    }

    this.setState({ isLoading:true })

    register(data).then((response)=>{
     this.setState({ isLoading:false })

     if(response.error){
      this.setState({error:response.error})
    }
    if(response.message === 'The registration was successful'){
      return this.props.navigation.navigate('Login')
    }
   })
  }

  render() {
    const {error, isLoading} = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Create an account</Text >
        <AuthForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={error}
        isLoading={isLoading}
        />
        <View style={styles.textBottom}>
        <Text style={styles.one}>Aready have an acount?</Text >
        <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Login')
                }
              >
                  <Text style={styles.two}>Login here</Text >
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
    marginTop: Platform.OS === "ios" ? 400: 550,
    flexDirection: 'row'
  },
  one:{
    color:'#59318F'
  },
  two:{
    color:'#3498DB'
  }
});