
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

/*
  Need to Import the screens
*/
import Home from './home'
import Wallet from './wallet'

export default class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator/>
      </View>
    );
  }
}

/*
  Navigation for the screens of the application
*/
const AppNavigator = createBottomTabNavigator(
  {
    HomeScreen :Home,
    WalletScreen: Wallet,
  },
  {
    initialRouteName: 'HomeScreen',
  },
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
