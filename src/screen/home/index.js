import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, ImageBackground} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import styles from './styles.js'

const io = require('socket.io-client');


export default function Home() {
  const { navigate, replace } = useNavigation();
    const [isConnected, setIsconnected] = useState(false);
    const ListEventDispatch = useDispatch();
    const [findMonster, setFindMonster] = useState()
    const newMoster = useSelector( state => state.ListReducers.MonsterList)
    const heros = useSelector(state => state.ListReducers.HerosList);

    useEffect(()=>{
  
      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            
          } else {
            replace('Login')
          }
        });
        
  },[])
    
  useEffect(()=>{
    const socket = io('https://zrp-challenge-socket.herokuapp.com', {
      transports: ['websocket'],
    });

    socket.on('connect', () => {
      setIsconnected(true);
    });

    socket.on('occurrence' ,data=>{
      setFindMonster(data);
     
      
    })
    
  },[])

  const [event, setEvent] = useState();

  useEffect(()=>{
   
    
    if((heros != '') && (findMonster != '') && (findMonster != undefined)){
      console.log(findMonster.dangerLevel,'teste');
      var Time = new Date().getTime();
      
      heros.map(item=>{
        if((item.Level == 'S') && (findMonster.dangerLevel  == 'God')){
          let newObject={key:Time, heroi: item, monster: findMonster};
          ListEventDispatch({type:'FIND_EVENT', EventList:newObject})
          
        }
        if((item.Level == 'A') && (findMonster.dangerLevel == 'Dragon')){
          let newObject={key:Time, heroi: item, monster: findMonster};
                    
          ListEventDispatch({type:'FIND_EVENT', EventList:newObject})
        }
        if((item.Level == 'B') && (findMonster.dangerLevel == 'Tiger')){
          let newObject={key:Time, heroi: item, monster: findMonster};
          
          ListEventDispatch({type:'FIND_EVENT', EventList:newObject})
        }
        if((item.Level == 'C') && (findMonster.dangerLevel == 'Wolf')){
          let newObject={key:Time, heroi: item, monster: findMonster};
          
          ListEventDispatch({type:'FIND_EVENT', EventList:newObject})
        }
       
      })
    }

  },[findMonster])
    return(
        <ImageBackground source={require('../../img/Onu.jpg')} style={styles.container}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Alerta de Ameaças </Text>
          </View>
        <View style={styles.line1}>

          <TouchableOpacity style={styles.card} onPress={()=>navigate('NewHero')}>
          <Icon
              name='plus'
              type='octicon'
              color='#fff'
              size={45} />
            <Text style={styles.textDefault}>Cadastro</Text>
            <Text style={styles.subTitle}>"Adcione um novo herói"</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={()=>navigate('HeroList')}>
          <Icon
              name='list-unordered'
              type='octicon'
              color='#fff'
              size={45} />

            <Text style={styles.textDefault}>Lista de Herois</Text>
            <Text style={styles.subTitle}>"Edite e exclua heróis"</Text>

          </TouchableOpacity>

        </View>
        <View style={styles.line2}>
          <TouchableOpacity style={styles.card2} onPress={()=>navigate('EventList')}>
            <Icon
              name='checklist'
              type='octicon'
              color='#fff'
              size={50} />
            <Text style={styles.textDefault}>Lista de Eventos</Text>
            <Text style={styles.subTitle}>"Ameaças destruídas"</Text>
          </TouchableOpacity>
        </View>
           
        </ImageBackground>
    )
}

export function homeHeader() {
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
