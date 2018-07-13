import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class Conversa extends Component{
    static navigationOptions = ({navigation})=>({
      title: "Conversa"
    })
    render(){
      return(
        <View>
          <Text>Tela de Conversa</Text>
        </View>
      )
    }
  }