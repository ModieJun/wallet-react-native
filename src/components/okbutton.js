import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Button} from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
export default class OkButton extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
        <Button title="OK"
          buttonStyle={styles.buttonStyle}
          textStyle={styles.buttonText}
          onPress={this.props.onPress}/>
    );
  }
}

const styles = EStyleSheet.create({
  buttonStyle:{
    borderRadius:30,
    backgroundColor:"rgba(100,100,100,1)",
    marginTop:25,
    height:60,
    width:60
  },
  buttonText:{
    color:'#000000',
    fontSize:24,
  }
});
