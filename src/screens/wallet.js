import React,{Component} from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const walletIcon=(<Icon name="wallet" size={25}/>);

class Wallet extends Component {

  static navigationOptions = {
    title:'Wallet',
    tabBarIcon:({tintColor})=>(
      walletIcon
    )
  };

  render () {
    return(
      <View style={styles.container}>
        <Text>This is the wallet page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4f6d7a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Wallet;
