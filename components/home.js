import React from 'react';
import { StyleSheet, Text, View , Button, Platform,  ActivityIndicator,} from 'react-native';
import Card from './card';
import { getAllItems } from '../api/items';
import Icon from '../node_modules/react-native-vector-icons/Ionicons';
import Menu from './menu';
import Loader from './loader';

export default class Home extends React.Component {
  state={
    items:null,
    isLoading:true
  }

  async componentDidMount (){
    const response = await getAllItems()

    this.setState({
      items:response.data.reverse(),
      isLoading:false

    })
  }
  render() {

    return (
      <View style={styles.container}>
        <Menu navigation={this.props.navigation}/>
        {this.state.isLoading
          ?<Loader color="#117A65" />
          :<Card items={this.state.items}/>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});