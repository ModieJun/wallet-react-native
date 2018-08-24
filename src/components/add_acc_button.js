import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'

import {Button} from 'react-native-elements';

export default class AddAccountButton extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Button title="add iCon"
            buttonStyle={styles.buttonStyles}
            titleStyle={styles.btTextStyle}/>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    marginTop:25,
    alignItems:'center'
  },
  buttonStyles:{
    width:200,
    borderRadius:20,
    backgroundColor:'#aaaaaa'
  },
  btTextStyle:{
    color:'#555555',
    fontWeight: 'normal',
  }
});
