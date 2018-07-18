import React, { Component } from 'react'
import {View, Text,Image} from 'react-native'
import { createStackNavigator} from 'react-navigation'
import Lista from './src/Lista'
import Receita from './src/Receita'

const Navegador = createStackNavigator({
  Lista:{
    screen: Lista,
   /* navigationOptions:{
      tabBarLabel: 'Inicio',
      tabBarIcon: ({focused, tintColor})=>{
        if(focused){
          return (<Image source={require('./assets/images/home_azul.png')} style={{width:26, height:26}} />)
        }else{
          return (<Image source={require('./assets/images/home_preto.png')} style={{width:26, height:26}} />)
        }
      }
    }*/
  },
  Receita: {screen:Receita},
},{
  tabBarOptions:{
    showIcon: true
  } 
})
export default Navegador

