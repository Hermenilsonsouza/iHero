
import{StyleSheet} from 'react-native';

const styles = StyleSheet.create({
 card:{
     marginHorizontal:'5%',
     backgroundColor:'#304ffe',
     marginBottom:'5%',
     borderRadius:5,
     padding:'5%',
     opacity:0.8
 },
 text:{
     color:'#fff',
     fontWeight:'bold'
 },

 Input:{
     marginHorizontal:'5%',
     width:'90%',
    marginBottom:'5%'

 },
 btn:{
    width: '50%',
    marginTop:'5%',
    backgroundColor:'#304ffe',
 },

 modal:{
    paddingBottom:'5%',
    paddingTop:'5%',
    alignItems: "center",
    marginTop: '20%',
    backgroundColor:'#e0e0e0',
    marginHorizontal:'5%',
    borderRadius:5
 },
 lineBtn:{
     flexDirection:'row',
     width:'90%',
     justifyContent:'space-around'
 },
 titleModal:{
fontSize:20,
fontWeight:'bold',
color:'#304ffe',
marginBottom:'5%'

 },
 picker:{
    borderWidth: 0.9,
    height: 50,
    width: 150,
    borderColor: '#111'
}

  
});

export default styles;