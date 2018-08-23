import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class Account extends Component {
  render() {
    return (
        <TouchableHighlight
          style={styles.accountContainer}
          onPress={()=>console.log('Acc Container Pressed')}
         >
         <View style={{flexDirection:'row'}}>
            <View style={{flex:4,flexDirection:'column',alignItems:'center'}}>
              <View style={{flex:2}}>
                <Text>{this.props.userID}</Text>
              </View>  
              <View style={{flex:1}}>
                <Text>Amount</Text>
              </View>
            </View>

            <View style={{flex:1}}>
              <Text>Icon</Text>
            </View>
         </View>

        </TouchableHighlight>  

    );
  }
}

const styles = EStyleSheet.create({
    accountContainer:{
      backgroundColor:'#aaaaaa',
      width:"75%",
      borderRadius: 20,
      padding: '12rem',
      margin:'5rem' ,
    }
});
