import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';
import {Input} from 'react-native-elements';

import OkButton from '../components/okbutton';
import Lovechain from '../components/lovechainlogo';


export default class CreatePortfolio extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Lovechain/>

        <View style={styles.innerContainer}>
            <Text style={styles.h1}>Create a Portfolio</Text>

            <View style={styles.inputContainer}>
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text  style={styles.textStyle}>Portfolio ID</Text>
              </View>
              <View style={{flex:2}}>
                <Input containerStyle={styles.inputStyle} />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={styles.textStyle}>Password</Text>
              </View>
              <View style={{flex:2}}>
                <Input containerStyle={styles.inputStyle} />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={styles.textStyle}>Confirm Password</Text>
              </View>
              <View style={{flex:2}}>
                <Input containerStyle={styles.inputStyle} />
              </View>
            </View>

            <OkButton/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff'
  },
  innerContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  inputContainer:{
    flexDirection:'row',
    margin:10,
    borderRadius:20,
    borderWidth:1,
    paddingTop:5,
    paddingBottom:5
  },
  textStyle:{
    fontSize:16,
    textAlign:'center',
  },
  inputStyle:{

  },h1:{
    fontSize:24,
    fontWeight:'500',
    paddingBottom:20,
  }

});
