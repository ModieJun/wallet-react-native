import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,ScrollView
} from 'react-native';

import Lovechain from '../components/lovechainlogo';
import UserIcon from '../components/usericon';
import Account from '../components/account';
import AddAccount from  '../components/add_acc_button';

export default class PersonalAccList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
          <Lovechain/>
        </View>
        <View style={{flex:2}}>

        </View>

        <View style={{flex:7,backgroundColor:'#eeeeee'}}>
          <ScrollView contentContainerStyle={{alignItems:'center',}}>
            <Account userID='yvan'/>
            <Account userID='JJ'/>
            <AddAccount/>
          </ScrollView>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
});
