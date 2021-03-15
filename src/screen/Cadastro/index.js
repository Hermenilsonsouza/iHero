import React ,{useState, useEffect} from 'react';
import { ImageBackground, View, Text,ActivityIndicator } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import styles from './styles';



export default function Cadastro() {

    const { navigate, replace } = useNavigation();

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [ rsenha, setRsenha] = useState();

    const validation = () => {

        if (senha != rsenha) {
            Alert.alert(
                "As senhas devem ser iguais"
            )
            return;
        }
        
        if (email == '') {
            Alert.alert(
                "O campo email precisa ser preenchido."
            )
            return;
        }
        criarConta()
    }
    const criarConta = () => {
        
      

        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then((user) => {

                // ...
                replace('Home');
                console.log('pronto')

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                Alert.alert(
                    "Error ao cadastrar."
                )
                // ..
            });

    }


    return(
        <ImageBackground source={require('../../img/Onu.jpg')} style={{flex:1, paddingTop:'25%'}}>

            <View style={styles.card}>
            <TextInput
        style={styles.textInputdefault}
        label="Email"
        underlineColor='#fff'
        mode='outlined'
        theme={{ colors: { primary: 'blue',underlineColor:'transparent',}}} 
        value={email}
        onChangeText={text=>setEmail(text)}
        
        />
       

        <TextInput
        style={styles.textInputdefault}
        label="Senha"
        underlineColor='#fff'
        mode='outlined'
        theme={{ colors: { primary: 'blue',underlineColor:'transparent',}}} 
        value={senha}
        onChangeText={text=>setSenha(text)}
       
        />

        <TextInput
        style={styles.textInputdefault}
        label="Repetir Senha"
        underlineColor='#fff'
        mode='outlined'
        theme={{ colors: { primary: 'blue',underlineColor:'transparent',}}} 
        value={rsenha}
        onChangeText={text=>setRsenha(text)}
        
        />
         <View style={{width:'100%', alignItems:'center'}}>
        <Button style={styles.btn} mode="contained" onPress={() => validation()} >
         <Text style={styles.txt}>Cadastrar</Text>
            </Button>
        </View>
            </View>


        </ImageBackground>
    )
}

export function cadastroHeader() {
    return {
        
        title: 'Cadastrar',
        headerTintColor: '#fff',
        headerTransparent: true,
         headerStyle: {
            
            elevation: 0,
           shadowOpacity: 0,
            borderBottomWidth: 0,
          
          },
          headerTitleStyle: { 
              color: '#fff',
              fontWeight: 'bold',
              
              textShadowOffset: {width: 1,height: 1},
              textShadowRadius: 5,
              textShadowColor:'#111'
              
                 },
              
      }
  }