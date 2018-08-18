/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class AccountTypeHeader extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.header}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:15,
    padding:15,
    backgroundColor:'#333333',
  },
  text:{
      textAlign:'center',
      fontSize:20,
      fontWeight:'300',
      color:'#ffffff',

  }
});
