import React, { Component } from 'react';
import { View, Text,Dimensions,ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Entypo';

import Lovechain from '../components/lovechainlogo';
import CoinDisplay from '../components/coindisplay';


let entireScreenWidth  =Dimensions.get('screen').width;
EStyleSheet.build({$rem:entireScreenWidth/360});

export default class AccountDetails extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
          <Lovechain/>
        </View>
        <View style={{flex:1,backgroundColor:"#aaaaaa",alignItems:'center'}}>
          <Text>User id</Text>
        </View>

        <View style={{flex:8,backgroundColor:"#eeeeee"}}>
          <Text>Amount</Text>

          <View style={styles.iconStyle}>
            <Icon name='swap'/>
          </View>
          
          <ScrollView>
            <CoinDisplay name="ETH" amount={30} />
            <CoinDisplay name="BTC" amounr={50} />
          </ScrollView>

        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
     container:{
        flex:1,
        justifyContent: 'center',
     },
     text:{
         backgroundColor:'#aaaaaa',
         fontSize:'20rem'
     },
});
