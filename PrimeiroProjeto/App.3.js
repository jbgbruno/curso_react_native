import React, { Component } from 'React'
import { View, Text, TouchableOpacity,Image, StyleSheet } from 'react-native'


class Botao extends Component{
  constructor(props){
    super(props)
    this.state = {}
    this.styles = StyleSheet.create({
      botao :{
        width: 250,
        height:50,
        borderWidth: 2,
        borderColor: props.color,
        backgroundColor:'transparent',
        borderRadius: 25,
      },
      botaoArea:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      botaoTexto:{
        fontSize: 20,
        color: props.color,
        fontWeight: 'bold',
      }
    })
  }
  render(){
    return (
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <View style={this.styles.botaoArea} >
          <Text style={this.styles.botaoTexto}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default class PrimeiroProjeto extends Component {
  constructor(props){
    super(props)
    this.state = {texto : ''}
    this.frases = ['A vida trará coisas boas se tiveres paciência.', 'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.', 'Não compense na ira o que lhe falta na razão.', 'Defeitos e virtudes são apenas dois lados da mesma moeda.', 'A maior de todas as torres começa no solo.', 'Não há que ser forte. Há que ser flexível.', 'Gente todo dia arruma os cabelos, por que não o coração?']
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this)
  }
  quebrarBiscoito(){
    let s = this.state
    let r  = Math.floor(Math.random()* this.frases.length)
    s.texto = this.frases[r]
    this.setState(s)
  }
  render() {
    return(
      <View style={styles.body}>
          <Image style={styles.imagem} source={require('./images/cookie.png')}/>
          <Text style={styles.texto}>"{this.state.texto}"</Text>
          <Botao color='#859619' text='Quebrar Biscoito' onPress={this.quebrarBiscoito}/>
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem:{
  },
  texto:{
    fontSize:17,
    fontStyle:'italic',
    color:'#859619',
    margin:30,
    textAlign: 'center'
  }
  
})