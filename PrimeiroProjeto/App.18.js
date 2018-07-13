import React, { Component } from 'react'
import { View, Text, TextInput, Button} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation'
import TelaInicial from "./src.1/TelaInicial"
import ConversationScreen from "./src.1/ConversationScreen"
import Configuracao from "./src.1/Configuracao"
//MODULO INTERMEDIARIO
//dividindo em arquivos
const Navegador = createBottomTabNavigator({
  Home: { screen: TelaInicial},
  Conversa: { screen: ConversationScreen},
  Configuracao: { screen: Configuracao}
}, {
  tabBarOptions: {
    showIcon: true,
  }
})

export default Navegador