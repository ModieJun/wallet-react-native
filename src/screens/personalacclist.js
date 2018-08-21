import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Lovechain from '../components/lovechainlogo';
import UserIcon from '../components/usericon';
import Account from '../components/account';
import AddAccount from  '../components/add_acc_button';

export default class PersonalAccList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Lovechain />

        <View style={{flex:1}}>
          <View style={{flex:1}}>
            <UserIcon  name="Yvan"/>
          </View>

          <View style={{flex:2}}>
              <Account info="Joint account"/>
              <Account info="Personal account"/>
              <AddAccount/>
          </View>


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
