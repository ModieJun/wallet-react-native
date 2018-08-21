import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class UserIcon extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.innerContainer}>
          <Text style={styles.text}>{this.props.name}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems:'flex-end',
    margin:20,
  },
  innerContainer:{
    backgroundColor:'#bbbbbb',
    borderRadius:30,
    height:60,
    width:60,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    fontSize:20
  }
});
