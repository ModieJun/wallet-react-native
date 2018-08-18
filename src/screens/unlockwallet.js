/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import PinView from 'react-native-pin-view';
import PinInput from '../components/inputpin';
import Lovechain from '../components/lovechainlogo';

export default class UnlockWallet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Lovechain/>
        <View style={styles.innerContainer}>
          <Text style={styles.instruction}>Please enter your pin to unlock your account</Text>
          <PinInput/>
          <PinView
            password={[2,2,2,2,2,2]}
            onSuccess={()=>{alert("Hooray")}}
            onFailure={()=>{}}
            />
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
    alignItems:'center',
    marginTop:50
  },
  instruction:{
    marginTop:20,
    fontSize:15,
    textAlign:'center',
  }
});
