/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Lovechain from '../components/lovechainlogo';

export default class PersonalAccList extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Lovechain style={{backgroundColor:'#aaaaaa'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
