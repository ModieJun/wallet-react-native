/* @flow */

import React, { Component } from 'react';
import {Input} from 'react-native-elements';

export default class PinInput extends Component {
  render() {
    return (
      <Input containerStyle={{width:200,marginTop:20}}
        inputStyle={{textAlign:'center'}}
        keyboardType='numeric'
        secureTextEntry={true}
        maxLength={6}
        />
    );
  }
}
