/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Lovechain from '../components/lovechainlogo';

export default class LoginSuccess extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Lovechain/>

            <View style={styles.box}>
                <Text style={styles.text}>Login Successful</Text>
            </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box:{
    flex:1,
    justifyContent:'center',
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    marginBottom:20,
    backgroundColor:'#ffffff',
    elevation:3,
  },
  text:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'300',
  }
});
