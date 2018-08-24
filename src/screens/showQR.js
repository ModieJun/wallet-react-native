import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import Lovechian from '../components/lovechainlogo';

export default class ShowQRCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Lovechian/>
        <Text> Show QR Code </Text>
      </View>
    );
  }
}
