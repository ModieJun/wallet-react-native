import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import Lovechian from '../components/lovechainlogo';
import QRCode from 'react-native-qrcode';

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
        <QRCode 
          value='https://www.baidu.com/'
        />
      </View>
    );
  }
}
