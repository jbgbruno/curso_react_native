import React, { Component } from 'React'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import {StackNavigator} from 'react-navigation'
import TelaInicial from "./src/TelaInicial"
import Conversa from "./src/Conversa"
//MODULO INTERMEDIARIO
//dividindo em arquivos
const Navegador = StackNavigator({
  Home: { screen: TelaInicial},
  Conversa: { screen: Conversa}
})
export default Navegador