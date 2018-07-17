import React, { Component } from 'react'
import {View, Text,TextInput, Button, StyleSheet} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation'
import Home from './src/Home'
import Contato from './src/Contato'
import Horarios from './src/Horarios'
import Sobre from './src/Sobre'

const Navegador = createBottomTabNavigator({
  Home:{screen: Home},
  Contato: {screen:Contato},
  Horarios:{screen:Horarios},
  Sobre:{screen:Sobre}
},{
  tabBarOptions:{
    showIcon: true
  },
  //tabBarPosition: 'top'
})


export default Navegador

