/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Header} from 'react-native-elements'
import EStyleSheet from 'react-native-extended-stylesheet';

export default class LoveChainLogo extends Component {
  render() {
    return (
      <Text style={[styles.lovechain,this.props.style]}>LOVECHAIN</Text>
      )
  }
}

const styles = EStyleSheet.create({
  lovechain:{
    fontSize:'26rem',
    fontWeight:'700',
    marginTop:'40rem',
    marginBottom:'10rem',
    marginLeft:'15rem',
    color:'#333333'
  }
});
