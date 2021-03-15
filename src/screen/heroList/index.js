import React, {useEffect, useState} from 'react';
import { View, Text, FlatList,TouchableOpacity, Alert, Modal, Picker, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import {Portal , TextInput, Button, Dialog, Paragraph } from 'react-native-paper'
import styles from './styles';

export default function HeroList(params) {

    const Heros = useSelector(state => state.ListReducers.HerosList);
    const deleteDispatch = useDispatch(Heros);

    const [nameHero, setNameHero] = useState();
    const [selectedClass, setSelectedClass] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    const [heroUpdate, setHeroUpdate] = useState();

    const [itemList, setItemList] = useState()

    const EditHero = (hero) => {
        setModalVisible(true)
        setNameHero(hero.heroName)
        setSelectedClass(hero.Level)
        setItemList(hero)       
      
    }

    const Edit = () =>{
        setModalVisible(!modalVisible)
        Heros.map(item=>{
            if(itemList.key === item.key){
                item.heroName=nameHero
                item.Level=selectedClass
            }
        })
            setHeroUpdate([...Heros,heroUpdate])
      
    }

    const deleteHero = (hero) => {
       
        Alert.alert(
            "",
            "Deseja mesmo excluir o heroi?",
            [
              {
                text: "Não",
                onPress: () => console.log("Cancel Pressed"),
                
              },
              { text: "Sim", onPress: () => deleteItem(hero) }
            ]
          );
         
    }

    const deleteItem = (hero) =>{
      
     const Del =  Heros.filter(item => { return item.key !=hero.key})
     deleteDispatch({type:'DELETE_HERO',HerosList:Del})
    }
   
    return(
        <ImageBackground source={require('../../img/Onu.jpg')} style={{flex:1, paddingTop:'25%'}}>
            <FlatList 
            data={Heros}
            extraData={heroUpdate}
            keyExtractor={item => item.key.toString()}
            renderItem={(index) => {

                    return (
                        <TouchableOpacity style={styles.card} onPress={() => EditHero(index.item)} onLongPress={() => deleteHero(index.item)}>
                            <Text style={styles.text}>Nome do Heroi: {index.item.heroName}</Text>
                            <Text style={styles.text}>Nivel: {index.item.Level}</Text>

                        </TouchableOpacity>

                    )

                }
                }
            />

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal}>
        <Text style={styles.titleModal}>Atulizar Herói</Text>
        <TextInput style={styles.Input}
              placeholder="Nome do Herói"
              mode='outlined'
              underlineColorAndroid='transparent'
              value={nameHero}
              onChangeText={text=>setNameHero(text)}/>

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
                    <View style={styles.lineBtn}>


                        <Button mode="contained" onPress={() => setModalVisible(!modalVisible)}>
                            Cancelar
                            </Button>
                        <Button mode="contained" onPress={() => Edit()}>
                            Atualizar
                         </Button>
                    </View>

        </View>
      </Modal>

        </ImageBackground>
    )
}

export function heroListHeader() {
  return {
        
    title: 'Lista de herói',
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
