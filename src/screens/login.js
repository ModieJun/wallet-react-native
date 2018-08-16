import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Input} from 'react-native-elements';
import OkButton from '../components/okbutton';
import Lovechain from '../components/lovechainlogo';


export default class LogIn extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Lovechain/>
          <View style={styles.innerContainer}>
            <Text style={styles.textStyle}>Log in</Text>
            <Input containerStyle={styles.inputStyle}/>

          <OkButton/>
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
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
    fontSize:20,
  },
  inputStyle:{
    width:250,
    marginBottom:10,
  }
});
