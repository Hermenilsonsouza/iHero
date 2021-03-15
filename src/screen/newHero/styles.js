
import{StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        flex:1,
        paddingTop:'20%'
    },
    textInputDefault: {
        marginHorizontal: '5%',
        width:'90%',
        marginBottom:'10%',
        marginTop:'10%'
    },
    btn: {
        width: '50%'
    }, 
    picker:{
        borderWidth: 0.9,
        height: 50,
        width: 150,
        borderColor: '#111'
    },
    card:{
        backgroundColor:'#fff',
        opacity:0.7,
        width:'90%',
        alignItems:'center',
        paddingBottom:'5%',
        borderRadius:5

    },
    title:{
        fontWeight:'bold',
        fontSize:28,
        marginBottom:'5%',
        marginTop:'5%',
        color:'#ffff',
        textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 5,
            textShadowColor: '#111'
    }

});

export default styles;