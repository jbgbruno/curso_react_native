import React, { Component } from 'React'
import { View, Text, TouchableOpacity,Image, StyleSheet } from 'react-native'

class Botao extends Component{
  constructor(props){
    super(props)
    this.state = {}
    let cols = 1
    if(props.cols){
      cols = parseInt(props.cols)
    }
    let bg = "#e0e0e0"
    if(props.bg){
      bg = props.bg
    }
    this.styles = StyleSheet.create({
      area:{
        flex: cols,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#999',
        backgroundColor: bg
      },
      text:{
        fontSize: 18,
      }
    })
  }
  render(){
    return(
      <TouchableOpacity style={this.styles.area}>
        <Text style={this.styles.text}>{this.props.n}</Text>
      </TouchableOpacity>
    )
  }
}

export default class PrimeiroProjeto extends Component {
  constructor(props){
    super(props)
    
  }
  
  render() {
    return(
      <View style={styles.body}>
        <View style={styles.linha}>
        </View>
        <View style={styles.linha}>
          <Botao cols="3" n="C" />
          <Botao bg="#fd9526" n="/" />
        </View>
        <View style={styles.linha}>
          <Botao n="7"/>
          <Botao n="8"/>
          <Botao n="9"/>
          <Botao bg="#fd9526" n="*"/>
        </View>
        <View style={styles.linha}>
          <Botao n="4"/>
          <Botao n="5"/>
          <Botao n="6"/>
          <Botao bg="#fd9526" n="-"/>
        </View>
        <View style={styles.linha}>
        <Botao n="1"/>
          <Botao n="2"/>
          <Botao n="3"/>
          <Botao bg="#fd9526" n="+"/>
        </View>
        
        <View style={styles.linha}>
          <Botao cols="2" n="0"/>
          <Botao bg="#fd9526" n="."/>
          <Botao bg="#fd9526" n="="/>
        </View>
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    flex: 1,
  },
  linha:{
    flex: 1,
    flexDirection: 'row',
  },
  botao:{
   
  },
  botaoTexto:{

  }
  
})