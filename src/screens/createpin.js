import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';
import PinInput from '../components/inputpin';
import Lovechain from '../components/lovechainlogo';
import AccountTypeHeader from '../components/acctypeheader';
import OkButton from '../components/okbutton';

class createpin extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Lovechain/>
          <AccountTypeHeader header='Personal Account'/>

        <View style={styles.innerContainer}>
          <Text style={styles.textStyle}>Create Your Pin</Text>

          <PinInput/>
          <Text style={styles.additionInfo}>You will use this PIN each  time you log into the  independant account</Text>
          <View style={{marginTop:20}}>
            <OkButton/>
          </View>
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
    alignItems:'center'
  },
  textStyle:{
    fontSize:20,
    fontWeight:'300',
    margin:50
  },additionInfo:{
      marginTop:20,
      width:200,
      fontSize:15,
      textAlign:'center',
  },

});

export default createpin ;
