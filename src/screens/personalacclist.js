import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,ScrollView
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import Lovechain from '../components/lovechainlogo';
import Account from '../components/account';
import AddAccount from  '../components/add_acc_button';

export default class PersonalAccList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
          <Lovechain/>
        </View>
        <View style={styles.innerContainer2}>
          <Text>Amount: XXXX</Text>
          <Text>Some extra little info</Text>
        </View>
        <View style={styles.accountView}>
          <ScrollView contentContainerStyle={{alignItems:'center'}}>
            <Account userID='yvan'/>
            <Account userID='JJ'/>
            <AddAccount/>
          </ScrollView>
        </View>

      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#ffffff'
  },
  innerContainer2:{
    flex:2,
    alignItems: 'center',
    paddingTop: "15rem",
  },accountView:{
    flex:8,
    backgroundColor: '#eeeeee',
    paddingTop:"10rem",
  }

});
