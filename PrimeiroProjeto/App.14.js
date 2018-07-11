import React, { Component } from 'React'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import {StackNavigator} from 'react-navigation'
//MODULO INTERMEDIARIO

class TelaInicial extends Component{
  static navigationOptions = ({navigation})=> ({
    title: 'Bem Vindo'
  })
  render(){
    return(
      <View>
        <Text>
          Ola mundo
        </Text>
      </View>
    )
  }
}

const Navegador = StackNavigator({
  Home: { screen: TelaInicial}
})
export default Navegador