import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles  from '../styles';
import Lovechain from '../components/lovechainlogo';
import Header from '../components/headertitle';
import TradingCoins from '../components/tradingcoins';

export default class TradeScreen extends Component {
  render() {
    return (
      <View style={styles.container} >
        <View >
            <Lovechain/>
        </View>
        <View style={styles.container} >
            <Header header="Buy Lovecoin"/>
        </View>
        <View style={{flex:8}}>
            <View>
             <TradingCoins coin='ETC'/>
             <TradingCoins coin='BTC'/>
            </View>
        </View>
        
      </View>
    );
  }
}
