/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,AsyncStorage
} from 'react-native';
import Lovechain from '../components/lovechainlogo';

export default class LoginSuccess extends Component {

  /**
   *  AFTER THE COMPONENT MOUNTED SET TIMER TO GO TO NEXT SCREEN
   */
  componentDidMount(){
    setTimeout(() => {
      /**
       * NEED TO NAVIGATE TO NEXT STACK OF SCREEN
       */
      this._signin();
    }, 2000);
  }

  _signin= async()=> {
    await AsyncStorage.setItem('userToken','LoginSuccess');
    this.props.navigation.navigate('Start')
  };

  render() {
    alert('Login Success')
    return (
      <View style={styles.container}>
          <View style={{flex:1}}>
           <Lovechain/>
          </View>

          <View style={styles.box}>
            <Text style={styles.text}>Login Successful</Text>
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
  box:{
    flex:8,
    justifyContent:'center',
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    marginBottom:20,
    backgroundColor:'#ffffff',
    elevation:4,
  },
  text:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'300',
    color:'#333333'
  }
});
