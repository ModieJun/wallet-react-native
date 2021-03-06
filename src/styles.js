import EStyleSheet from 'react-native-extended-stylesheet';

export default  EStyleSheet.create({
    container:{
        flex:1,
    },
    text:{
        fontSize:'20rem',
    },
    primaryText:{
        fontSize:'24rem',
        fontWeight: '300',
    },flexRow:{
        flexDirection:'row'
    },ajCenter:{
        justifyContent: 'center',
        alignItems: 'center',
    },greyE:{
        backgroundColor:'#eeeeee' ,      
    },greyD:{
        backgroundColor:'#dddddd',
    },

    //TOOLBAR STYLES
    btnStyle:{
        backgroundColor:'#333333',
        borderRadius:0,
        height:'100%'
    },
    btntitle:{
        color:'#ffffff'
    },

});