import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {Button} from 'react-native-elements';

export default class AddAccountButton extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Button title="add iCon"
            buttonStyle={styles.buttonStyles}
            textStyle={styles.btTextStyle}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:25,
    alignItems:'center'
  },
  buttonStyles:{
    width:200,
    borderRadius:20
  },
  btTextStyle:{

  }
});
