import React, { Component } from 'React'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import {StackNavigator} from 'react-navigation'
//MODULO INTERMEDIARIO

class TelaInicial extends Component{
  constructor(props){
    super(props)
    this.state = {
      nome: ""
    }
    this.conversar = this.conversar.bind(this)
  }
  static navigationOptions = ({navigation})=> ({
    title: 'Chat'
  })

  conversar(){
    this.props.navigation.navigate('Conversa',{nome: this.state.nome})
  }
  
  render(){
    return(
      <View>
        <TextInput style={{height:40, borderWidth:1,borderColor:"#000",width:200}} placeholder="Qual seu nome" onChangeText={(nome)=>{this.setState({nome:nome})}}/>
        <Button title="Conversar" onPress={this.conversar} />
      </View>
    )
  }
}

class Conversa extends Component{
  static navigationOptions = ({navigation})=>({
    title: navigation.state.params.nome
  })
  render(){
    return(
      <View>
        <Text>Tela de Conversa</Text>
      </View>
    )
  }
}

const Navegador = StackNavigator({
  Home: { screen: TelaInicial},
  Conversa: { screen: Conversa}
})
export default Navegador