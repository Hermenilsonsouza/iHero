
import{StyleSheet} from 'react-native';

const styles = StyleSheet.create({
 card:{
     backgroundColor:'#304ffe',
     paddingTop:'5%',
     paddingBottom:'5%',
     paddingStart:'2%',
     margin:'2.5%',
     borderRadius:5,
     width:'40%',
     height:'100%',
     alignItems:'center',
     alignContent:'center', 
     justifyContent:'center',
     opacity:0.9,
     borderRadius:10
 },
 container:{
     backgroundColor:'#e0e0e0',
     flex:1,
 },
 icon:{
     marginEnd:'5%'
 },
 textDefault:{
     fontWeight:'bold', 
     color:'#fff',
     
 }, 
 line1:{
     width:'100%',
     height:'20%',
     flexDirection:'row',
     justifyContent:'center',
     
     marginBottom:'5%'
 },
 card2:{
    backgroundColor:'#304ffe',
    paddingTop:'5%',
    paddingBottom:'5%',
    paddingStart:'2%',
    margin:'2.5%',
    borderRadius:5,
    width:'85%',
    height:'100%',
    alignItems:'center',
    alignContent:'center', 
    justifyContent:'center',
    opacity:0.9,
    borderRadius:10,
    position:'absolute'
 },
 line2:{
    width:'100%',
    height:'20%',    
    flexDirection:'row',
    justifyContent:'center',
    
},
containerTitle:{
    height:'30%',
    width:'100%',
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center'
},
title:{
    fontWeight:'bold',
    fontSize:28,
    color:'#ffff',
    textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        textShadowColor: '#111'
},
subTitle:{
    fontSize:11,
    fontWeight:'normal',
    color:'#fff',
    fontWeight:'bold'
}

  
});

export default styles;