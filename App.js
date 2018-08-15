import React from 'react';
import { StyleSheet, Text, View,Button,AsyncStorage } from 'react-native';
import { SwitchNavigator,StackNavigator,createBottomTabNavigator } from 'react-navigation';
/*
  BottomNav is something nice to have , but react-navigation has a build in
  bottom tab functionality that can flip through tabs

  USED IN CREATE-REACT-APP - DEPRECIATED IN REACT-NATIVE
  import BottomNav  from './src/components/nav'
*/
import Home from './src/screens/home';
import Wallet from './src/screens/wallet';
import CreatePin from './src/screens/createpin'

 class App extends React.Component {
  constructor(){
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'Splash' : 'Start');
  };

  render(){
    return (
      <View style={{flex:1}}>

      </View>
    );
  }
}

/*
    CREATES TWO SEPERATE PATHS FOR NAVIGATION TO GO TO
    1.SPLASH SCREEN  => THEN WE HEAD TO THE NEXT
    2.HOME SCREEN + WALLET SCREEN
*/
const StartStack = createBottomTabNavigator({ HomeScreen:Home, WalletScreen:Wallet });
const SplashStack = StackNavigator({ Pin: CreatePin });

export default SwitchNavigator(
  {
    AuthLoading: App,
    Splash: SplashStack,
    Start: StartStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }



);
