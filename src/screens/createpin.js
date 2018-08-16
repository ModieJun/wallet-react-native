import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  AsyncStorage
} from 'react-native';

/*
  https://github.com/beefe/react-native-keyboard
  uses this keyboard find a better one if available
*/
import Keyboard from 'react-native-keyboard';

let model = {

    _keys: [],

    _listeners: [],

    addKey(key) {
        this._keys.push(key);
        this._notify();
    },

    delKey() {
        this._keys.pop();
        this._notify();
    },

    clearAll() {
        this._keys = [];
        this._notify();
    },

    getKeys() {
        return this._keys;
    },

    onChange(listener) {
        if (typeof listener === 'function') {
            this._listeners.push(listener);
        }
    },

    _notify() {
        this._listeners.forEach((listner) => {
            listner(this);
        });
    }
};

class createpin extends Component {
  constructor(props){
    super(props);
    this.state={
      pin:''
    };
  }

  componentDidMount(){
    model.onChange((model)=>{
      this.setState({pin:model.getKeys().join('')})
    });
  }
  _handleKeyPress(key){
    model.addKey(key);
  }

  _handleDelete(){
    model.delKey();
  }
  _handleClear(){
    model.clearAll();
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

        <View style={styles.innerContainer}>
          <View  style={styles.textStyle}>
            <Text>Please create 6 digit pin</Text>
            <TextInput style={styles.textInput} secureTextEntry={true} editable={false} value={this.state.pin}/>
          </View>

          <View style={styles.inputContainer}>
            <Button title="submit" onPress={this._createPinAsync}/>
          </View>
        </View>

        <Keyboard
            keyboardType="decimal-pad"
            onKeyPress={this._handleKeyPress.bind(this)}
            onDelete={this._handleDelete.bind(this)}
            onClear={this._handleClear.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer:{
    flex:1,
    justifyContent:'center'
    },
  textStyle:{
    alignItems:'center',
  },
  textInput:{
    fontSize:14,
  },
  inputContainer:{
    marginLeft:15,
    marginRight:15,
    marginTop: 10,
  }
});

export default createpin ;
