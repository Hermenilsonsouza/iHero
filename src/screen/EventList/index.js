import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import styles from './styles';

export default function EventLis(params) {
    const eventList = useSelector(state => state.ListReducers.EventList);
    const [listUp, setListUp] = useState();
   // console.log(eventList);
   useEffect(()=>{

    var unico = eventList.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    });
   
    setListUp(unico)
  
   }, [eventList])
    
    return(
        <ImageBackground source={require('../../img/Onu.jpg')} style={{flex:1, paddingTop:'25%'}}>
           

            <FlatList 
            style={{marginBottom:'5%'}}
             data={listUp}
            // extraData={heroUpdate}
             keyExtractor={item => item.key.toString()}
             renderItem={(index)=>{
                
                return(
                    <View style={styles.card} >
                        <View style={{flexDirection:'row'}}>
                        <Text style={styles.textDefault}>Monstro: {index.item.monster.monsterName}</Text>
                        <Text style={styles.textDefault}>  Nivel: {index.item.monster.dangerLevel}</Text>
                        </View>
                    
                    <Text style={styles.textDefault}>Foi eleminado por: {index.item.heroi.heroName}</Text>
                </View>
                 )
              
             }}
            />
        </ImageBackground>
    )
}

export function eventListHeader() {
    return {
          
      title: 'Lista de Eventos',
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
  

  