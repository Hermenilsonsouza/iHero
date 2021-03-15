import React,{useEffect, useState} from 'react';
import { View, TouchableOpacity, Text, Picker, ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useDispatch, useSelector } from "react-redux";
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function NewHero(params) {
    
  const { navigate, replace } = useNavigation();
  const [selectedClass, setSelectedClass] = useState('S')
  const [nameHero, setNameHero] = useState();
  const NewHeroDispatch = useDispatch();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

   useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLat(location.coords.latitude);
      setLng(location.coords.longitude)
    })();
  }, []);

 

  const SaveHero = () => {
    var Time = new Date().getTime();
    let oneHero = {'key': Time, 'heroName': nameHero, 'Level': selectedClass,location: [{'lat':lat, 'lng':lng}], }
    
    NewHeroDispatch({type:'FIND_HERO',HerosList: oneHero })
    navigate('Home')
  }

    return(
      <ImageBackground source={require('../../img/Onu.jpg')} style={styles.container}>

      <Text style={styles.title}>Novo herói </Text>

        <View style={styles.card}>
          <TextInput
            style={styles.textInputDefault}
            label="Nome do Heroi"
            underlineColor='#fff' mode='outlined'
            theme={{ colors: { primary: '#2196f3', background: '#eee', surface: '#fff', placeholder: '#333', text: '#333' } }}
            value={nameHero} onChangeText={text => setNameHero(text)}
          />

          <Picker
            selectedValue={selectedClass}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setSelectedClass(itemValue)}
          >
            <Picker.Item label="Classe S" value="S" />
            <Picker.Item label="Classe A" value="A" />
            <Picker.Item label="Classe B" value="B" />
            <Picker.Item label="Classe C" value="C" />
          </Picker>

          <Button style={styles.btn} mode="contained" color='#2196f3' onPress={() => SaveHero()}>
            Cadastrar
  </Button>
        </View>




      </ImageBackground>
    )
}

export function newHeroHeader() {
  return {
        
    title: '',
    headerTintColor: '#fff',
    headerTransparent: true,
     headerStyle: {
        
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      
      },
      headerTitleStyle: { 
          color: '#111',
          fontWeight: 'bold',
          textAlign:"center",
          textShadowOffset: {width: 1,height: 1},
          textShadowRadius: 5,
          textShadowColor:'#111'
          
             },
          
  }
}