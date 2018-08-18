/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Entypo'
import Lovechain from '../components/lovechainlogo'


export default class CreateAccount extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Lovechain/>

        <View style={styles.innerContainer}>
            <Text style={styles.text}>Create an account</Text>
            <Button
              icon={<Icon name='plus' size={15} color='black'/>}
              buttonStyle={styles.buttonStyle}
              textStyle={styles.buttonText}
              title='Add Account'/>
            <Icon name='plus'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer:{
    flex:1,
    marginTop:50,
  },
  text:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'300',
    margin:30,
  },
  buttonStyle:{
    height:40,
    borderRadius:12,
    backgroundColor:"rgba(220,220,220,1)",
    margin:20
  },
  buttonText:{
    color:'#000000',
    fontSize:16,
    fontWeight:'300'
  }
});
