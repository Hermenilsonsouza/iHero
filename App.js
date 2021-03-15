
import React, {useEffect, useState} from 'react';
import {getStore, getPersistor}    from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import firebase from './firebaseConfig';



const Stack = createStackNavigator();

import Home, {homeHeader} from './src/screen/home';
import NewHero, {newHeroHeader} from './src/screen/newHero';
import HeroList, {heroListHeader} from './src/screen/heroList';
import EventList, {eventListHeader} from './src/screen/EventList';
import Login, {loginHeader} from './src/screen/login';
import Cadastro, {cadastroHeader} from './src/screen/Cadastro';

export default function App() {

  useEffect(()=>{
    console.disableYellowBox=true
    
  },[])

  const myStore = getStore();  
  const myPersistor = getPersistor();

  return (
    <Provider store={myStore}>
      <PersistGate persistor={myPersistor}>
      <NavigationContainer>

        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home}
          options={homeHeader} />
          <Stack.Screen name="NewHero" component={NewHero}
          options={newHeroHeader}/>
          <Stack.Screen name="HeroList" component={HeroList}
          options={heroListHeader}/>
          <Stack.Screen name='EventList' component={EventList}
          options={eventListHeader}/>
          <Stack.Screen name='Login' component={Login} 
          options={loginHeader}/>
          <Stack.Screen name='Cadastro' component={Cadastro}
          options={cadastroHeader}/>
        </Stack.Navigator>

      </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}


