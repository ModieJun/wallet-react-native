import React,{Component} from 'react'
import {Text,StyleSheet,Image,View} from 'react-native';


class Coin extends Component {


  render(){
    return(
      <View style={{height:130,width:130, marginLeft:20,borderWidth:0.5,
        borderColor:'#dddddd'}}>
        <View style={{flex:2}}>
            <Image source={this.props.imageUri}
              style={{flex:1,width:null,height:null,resizeMode:'cover'}}/>
        </View>
        <View style={{flex:1}}>
            <Text style={styles.coinName}>
                {this.props.name}
            </Text>
        </View>
      </View>
    );
  }

}

export default Coin;

const styles = StyleSheet.create({
  coinName:{
    flex:1,
    paddingLeft:10,
    paddingTop:10
  },
});
