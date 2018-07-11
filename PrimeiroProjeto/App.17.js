import React, { Component } from 'React'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import {TabNavigator} from 'react-navigation'
import TelaInicial from "./src/TelaInicial"
import Conversa from "./src/Conversa"
//MODULO INTERMEDIARIO
//dividindo em arquivos
const Navegador = TabNavigator({
  Home: { screen: TelaInicial},
  Conversa: { screen: Conversa}
}, {
  tabBarOptions: {
    showIcon: true
  }
})
export default Navegador