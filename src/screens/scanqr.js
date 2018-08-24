import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Lovechain from '../components/lovechainlogo';
import styles from '../styles';

export default class ScanQr extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Lovechain/>                
        <Text>Scan QR code</Text>
      </View>
    );
  }
}
