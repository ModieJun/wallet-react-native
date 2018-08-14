import React,{Component} from 'react';
import {Text}from 'react-native';
import BottomNav,{FullTab} from 'react-native-material-bottom-navigation';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

class Nav extends Component{
  tabs = [
    {
    key: 'Home',
    icon:'home',
    label:'Home',
    barColor:'#388E3C',
    pressColor:'rgba(255,255,255,0.16)'
    },
    {
      key:'Wallet',
      icon:'wallet',
      label:'Wallet',
      barColor:'#B71C1C',
      pressColor:'rgba(255,255,255,0.16)'
    }
  ]

  renderIcon = icon=>({isActive})=>(
    <Icon size={24} color="white" name={icon}/>
  )

  renderTab=({tab,isActive})=>(
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
      />
  )

  changePage=key=(isActive)=>{
    switch (key) {
      case 'Home':
          this.props.navigation.navigate('HomeScreen')
        break;
      case 'Wallet':this.props.navigation.navigate('WalletScreen')
        break;
    }
  }

  render(){
    return(
      <BottomNav
        onTabPress={newTab => this.setState({activeTab:newTab.key})}
        changePage={this.changePage}
        renderTab={this.renderTab}
        tabs={this.tabs}/>
  )
  }
}

export default Nav;
