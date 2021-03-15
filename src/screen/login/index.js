import React, {useEffect, useState} from 'react';
import { View, ImageBackground, Alert } from 'react-native';
import firebase from 'firebase';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'



export default function Login(params) {

    const { navigate, replace } = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const Validar = () => {
        if (email === '') {
            Alert.alert(
                "Preencher campo email."
             )
            return;
        }
        if (senha == '') {
            Alert.alert(
                "Preencher campo Senha."
             )
            return;
        }
        login();
    }

    const login =()=>{
        if((email != '') && (senha != '')){
            firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((user) => {
              // Signed in
              // ...
              replace('Home')
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              Alert.alert(
                "usuário Inválido"
             )
            });
        
        
        }
           
    } 

    return(
        <ImageBackground style={{flex:1, paddingTop:'25%'}} source={require('../../img/Onu.jpg')}>
            <View style={styles.card}>
            <TextInput
        style={styles.textInputdefault}
        label="Email"
        mode='outlined'
        theme={{ colors: { primary: 'blue',underlineColor:'transparent',}}}
        autoCompleteType='email'
        value={email}
        onChangeText={text=>setEmail(text)}
        />

        <TextInput
        style={styles.textInputdefault}
        label="Senha"
        mode='outlined'
        theme={{ colors: { primary: 'blue',underlineColor:'transparent',}}}       
        autoCompleteType='password'
        value={senha}
        onChangeText={text=>setSenha(text)}
        />

<View style={{alignItems:'center'}}>
        <Button style={styles.btnDefault} mode="contained" onPress={() => Validar()}>
         Entrar
            </Button>
            <Button  style={styles.btnCadastro} mode="contained" onPress={() =>navigate('Cadastro') }>
         Cadastrar
         </Button>

        </View>

            </View>
        </ImageBackground>
    )
}

export function loginHeader() {
    return {
        
        title: 'Entrar',
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
              textAlign: "center",
              textShadowOffset: {width: 1,height: 1},
              textShadowRadius: 5,
              textShadowColor:'#111'
              
                 },
              
      }
  }
