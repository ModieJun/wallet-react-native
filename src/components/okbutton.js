/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Button} from 'react-native-elements';

export default class OkButton extends Component {
  render() {
    return (
        <Button title="OK"
          buttonStyle={styles.buttonStyle}
          textStyle={styles.buttonText}/>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle:{
    borderRadius:20,
    backgroundColor:"rgba(120,120,120,1)",
    marginTop:25
  },
  buttonText:{
    color:'#000000',
    fontSize:16,
    fontWeight:'700'
  }
});
