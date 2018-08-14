import React,{Component} from 'react'
import {ScrollView,Text,StyleSheet,Image,View} from 'react-native'
import CoinDisplay from './coindisplay'

/*
  Testing out ScrollView
*/
class ExchangeList extends Component {
  render(){
    return(
        <View style={{flex:1}}>
            <View style={styles.contentContainer}>
              <Text style={styles.heading}>
                List of Currency
              </Text>

              <View style={{height:130,marginTop:20,marginBottom:20}}>
                <ScrollView horizontal={true}>

                  <CoinDisplay  />

                  <CoinDisplay imageUri={require('../icons/lc.jpg')} name="LC"  />

                  <CoinDisplay  />

                  <CoinDisplay  />

                </ScrollView>
              </View>
            </View>

        </View>
    );
  }
}

export default ExchangeList;

const styles =StyleSheet.create({
  contentContainer:{
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginTop:5,
    marginLeft:5,
    marginRight:5
  },
  heading:{
    fontSize:24,
    fontWeight:'700',
    paddingHorizontal:20,
  },
})
