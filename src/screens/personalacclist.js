import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,ScrollView
} from 'react-native';
import {Button} from 'react-native-elements';
import Styles from '../styles'
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import Lovechain from '../components/lovechainlogo';
import Account from '../components/account';
import AddAccount from  '../components/add_acc_button';
export default class PersonalAccList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
          <Lovechain/>
        </View>
        
        <View style={styles.innerContainer2}>
          <Text>Amount: XXXX</Text>
          <Text>Some extra little info</Text>
        </View>

        <View style={styles.accountView}>
          <ScrollView contentContainerStyle={{alignItems:'center'}}>
            <Account userID='yvan'/>
            <Account userID='JJ'/>
            <AddAccount/>
          </ScrollView>
        </View>

        <View style={[Styles.container,Styles.flexRow]}>
            <View style={Styles.container}>
                <Button title="Scan QR Code"
                    icon={<Icon name='qrcode-scan' size={15} color='white' />}
                    buttonStyle={Styles.btnStyle} 
                    titleStyle={Styles.btntitle}
                    onPress={()=> this.props.navigation.navigate('ScanQRScreen')}
                />
            </View>

            <View style={Styles.container}>
                <Button title="Show QR Code" 
                    icon={<Icon name='qrcode' size={15}/>}
                    buttonStyle={Styles.btnStyle} 
                    titleStyle={Styles.btntitle}                
                    />
            </View>

            <View style={Styles.container}>
                <Button title="Messaging" 
                     buttonStyle={Styles.btnStyle} 
                     titleStyle={Styles.btntitle}                   
                        />
            </View>
        </View>
        
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#ffffff'
  },
  innerContainer2:{
    flex:2,
    alignItems: 'center',
    paddingTop: "15rem",
  },accountView:{
    flex:8,
    backgroundColor: '#eeeeee',
    paddingTop:"10rem",
  }

});
