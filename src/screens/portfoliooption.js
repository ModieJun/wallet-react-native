/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
/*
  React-native-elements for UI components;
*/
import {Button} from 'react-native-elements';
import Lovechain from '../components/lovechainlogo';

export default class PortfolioOption extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Lovechain/>
      <View style={styles.innerContainer}>
          <View style={styles.buttonContainer}>
            <Button title="Create Portfolio"
              buttonStyle={styles.buttonStyle}
              textStyle={styles.buttonText}
              />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Existing Portfolio"
              buttonStyle={styles.buttonStyle}
              textStyle={styles.buttonText}
              />
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff'
  },
  innerContainer:{
    flex:1,
    justifyContent:'center',
  },
  buttonContainer:{
    marginTop:20,
    marginLeft:15,
    marginRight:15,
  },
  buttonStyle:{
    borderRadius:20,
    backgroundColor:"rgba(200,200,200,1)",
  },
  buttonText:{
    color:'#000000',
    fontSize:16,
    fontWeight:'700'
  }
});
