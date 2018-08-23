import React,{Component} from 'react'
import {Text,StyleSheet,Image,View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

class Coin extends Component {


  render(){
    return(
        <View style={styles.coinDisContainer}>
          <View style={{flex:8}}>
            <Text style={styles.text}>{this.props.name}</Text>
          </View>
          <View style={{flex:2}}>
            <Text style={styles.text}>{this.props.amount}</Text>
          </View>
        </View>
    );
  }

}

export default Coin;

const styles = EStyleSheet.create({
  coinDisContainer:{
    flexDirection:'row',
    backgroundColor:'#dddddd',
    paddingTop: '15rem',
    paddingBottom: '15rem',
  },
  text:{
    fontSize:'20rem',
    marginLeft: '10rem',
  }
});
