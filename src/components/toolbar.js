import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Button} from 'react-native-elements'
import styles from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ToolBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={[styles.container,styles.flexRow]}>
            <View style={styles.container}>
                <Button title="Scan QR Code"
                    icon={<Icon name='qrcode-scan' size={15} color='white' />}
                    buttonStyle={styles.btnStyle} 
                    titleStyle={styles.btntitle}
                />
            </View>

            <View style={styles.container}>
                <Button title="Show QR Code" 
                    icon={<Icon name='qrcode' size={15}/>}
                    buttonStyle={styles.btnStyle} 
                    titleStyle={styles.btntitle}                
                    />
            </View>

            <View style={styles.container}>
                <Button title="Messaging" 
                     buttonStyle={styles.btnStyle} 
                     titleStyle={styles.btntitle}                   
                        />
            </View>
        </View>
    );
  }
}
