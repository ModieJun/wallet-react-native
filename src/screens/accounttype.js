/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Button} from 'react-native-elements'
import Lovechain from '../components/lovechainlogo'


export default class AccountType extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Lovechain/>
        <View style={styles.innerContainer}>
            <Text style={styles.text}>Choose a type of account</Text>
            <Button
              buttonStyle={styles.buttonStyle}
              textStyle={styles.buttonText}
              title='Personal Account'/>
              <Button
              buttonStyle={styles.buttonStyle}
              textStyle={styles.buttonText}
              title='Joint Account'/>
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
    fontSize:24,
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
    fontSize:18,
    fontWeight:'300'
  }
});
