import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


export default class Account extends Component {
  render() {
    return (
      <View  elevation={2} style={styles.container} >
        <View style={styles.icons}>
            <Text>Icon</Text>
        </View>

        <Text style={styles.text}>{this.props.info}</Text>

        <View style={styles.icons}>
            <Text>Info</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor:'#ffffff',
    marginBottom:5,
    borderWidth:0.5,
    borderColor:'#000000'
  },text:{
    textAlign:'center',
    fontSize:20,
    flex:4,
    backgroundColor:'#eeeeee',
    paddingTop:10,
    paddingBottom:10,
  },icons:{
    flex:1,
    backgroundColor:'#eeeeee'
    }
});
