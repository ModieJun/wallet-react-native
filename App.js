import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
/*
  createBottomTabNavigator is a tab bottom that holds the
*/
import {createBottomTabNavigator} from 'react-navigation';

/*SPLASH SCREEN IMPORT HERE
import SplashScreen from 'react-native-splash-screen'
*/

/*
  BottomNav is something nice to have , but react-navigation has a build in
  bottom tab functionality that can flip through tabs

  USED IN CREATE-REACT-APP - DEPRECIATED IN REACT-NATIVE
  import BottomNav  from './src/components/nav'
*/


/*
  Need to Import the screens
*/
import Home from './src/screens/home'
import Wallet from './src/screens/wallet'



export default class App extends React.Component {

  render(){
    return (
      <View style={{flex:1}}>
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
