import React, { Component } from 'react';
import { View, Text,Dimensions } from 'react-native';
import {Input} from 'react-native-elements';
import styles from '../styles'

export default class tradingCurrency extends Component {
  render() {
    return (
      <View style={[styles.flexRow,styles.greyE]}>
        <View style={{flex:2}}>
            <Input 
            placeholder='1'
            label="Amount"
            labelStyle={styles.text}
            keyboardType='numeric'/>
        </View>

        <View style={[styles.container,
            styles.ajCenter,styles.greyD]}>
            <Text style={[styles.primaryText]}>
                {this.props.coin}
            </Text>
        </View>
      </View>
    );
  }
}
