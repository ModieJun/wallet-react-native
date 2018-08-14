import React,{Component} from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import ExchangeList  from '../components/exchangelist';

const homeIcon=(<Icon name="home" size={25}/>);

class Home extends Component {

  static navigationOptions = {
    title:'Home',
    tabBarIcon:({tintColor})=>(
      homeIcon
    )
  };

  render(){
    const {navigate} = this.props.navigation;
    /*
    testing outScroll View throught ExchangeList
    */

    return(
      <View style={styles.container}>
        <View style={styles.internalTopContainer}>
          <Text>Home</Text>
          <Button title="Go to wallet"
            onPress={()=>this.props.navigation.navigate('WalletScreen')}/>
        </View>
        <ExchangeList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#4f6d7a',
  },internalTopContainer:{
    marginTop:50,
    justifyContent:'center',
    marginLeft:20,
    marginRight:20
  }

});
export default Home;
