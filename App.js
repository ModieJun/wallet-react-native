import React from 'react';
import { StyleSheet, Text, View,Button,AsyncStorage ,Dimensions} from 'react-native';
import { SwitchNavigator,createStackNavigator,createBottomTabNavigator } from 'react-navigation';
/*
  BottomNav is something nice to have , but react-navigation has a build in
  bottom tab functionality that can flip through tabs

  USED IN CREATE-REACT-APP - DEPRECIATED IN REACT-NATIVE
  import BottomNav  from './src/components/nav'
*/
import Home from './src/screens/home';
import Wallet from './src/screens/wallet';
import CreatePin from './src/screens/createpin';
import PortfolioOption from './src/screens/portfoliooption';
import CreatePortfolio from './src/screens/createportfolio';
import Login from './src/screens/login';
import LoginSuccess from './src/screens/loginsuccess'
import PersonalAccList from './src/screens/personalacclist';
import Trade from './src/screens/trade';
import AccDetails from './src/screens/accdetails';
import ScanQR from './src/screens/scanqr';

import EStyleSheet from 'react-native-extended-stylesheet';

/**
 * This is important for rendering the styles and calculating the screens 
 * and rem.
 */
let entireScreenWidth  = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth/360});

 class App extends React.Component {
  constructor(){
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'Portfolio' : 'Start');
  };

  render(){
    return (
      <View style={{flex:1}}>
        <Text>THIS IS THE SPLASHSCREEN</Text>
      </View>
    );
  }
}

/*
    CREATES TWO SEPERATE PATHS FOR NAVIGATION TO GO TO
    1.SPLASH SCREEN  => THEN WE HEAD TO THE NEXT
    2.START => MENU
*/
const StartBottomTab = createBottomTabNavigator(
  {
    PersonalAccListScreen :PersonalAccList,
    TradeScreen: Trade,
    AccDetailsScreen: AccDetails,
   }
);

const Menu = createStackNavigator(
  {
    PersonalAccListScreen: PersonalAccList,
    ScanQRScreen:ScanQR,
  },
  {
    mode:'modal',
    headerMode:'none',
  }
)

const SplashStack = createStackNavigator(
  { 
    PortfolioOptionScreen: PortfolioOption,
    LoginScreen: Login,
    LoginSuccessScreen : LoginSuccess,
    CreatePortfolioScreen : CreatePortfolio,
  },{
    headerMode:'none',
    navigationOptions:{
      headerVisible: false,
    }
  }
);

export default SwitchNavigator(
  {
    AuthLoading: App,
    Portfolio: SplashStack,
    Start: Menu,
  },
  {
    initialRouteName: 'AuthLoading',
  }

);
