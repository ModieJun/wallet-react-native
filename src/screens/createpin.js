import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  AsyncStorage
} from 'react-native';


class createpin extends Component {
  static navigationOptions ={
    title: 'Create Pin',
  }

  /*
    FUNCTION TO CHANGE THE SCREEN TO THE NEXT
    AFTER CREATE-PIN SCREEN
  */
  _createPinAsync=async()=>{
    await AsyncStorage.setItem('userToken','abc');
    this.props.navigation.navigate('Start');
  }

  render() {
    return (
      <View style={styles.container}>
        <View  style={styles.textStyle}>
          <Text>Please create 6 digit pin</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput/>
          <Button title="submit" onPress={this._createPinAsync}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
  textStyle:{
    alignItems:'center',
  },
  inputContainer:{
    marginLeft:5,
    marginRight:5,
    marginTop: 10,
  }
});

export default createpin ;
