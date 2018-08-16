import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class LoveChainLogo extends Component {
  render() {
    return (
      <Text style={styles.lovechain}>LOVECHAIN</Text>
    );
  }
}

const styles = StyleSheet.create({
  lovechain:{
    fontSize:18,
    fontWeight:'700',
    marginTop:50,
    marginLeft:30,
  }
});
