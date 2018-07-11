import React, { Component } from 'React'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import {DrawerNavigator} from 'react-navigation'
import TelaInicial from "./src/TelaInicial"
import Conversa from "./src/Conversa"
import Configuracao from "./src/Configuracao"
//MODULO INTERMEDIARIO
//dividindo em arquivos
const Navegador = DrawerNavigator({
  Home: { screen: TelaInicial},
  Conversa: { screen: Conversa},
  Configuracao: { screen: Configuracao}
}, {
  tabBarOptions: {
    showIcon: true
  }
})
export default Navegador