import React, { Component } from 'React'
import { View, Text, TextInput, Image, Button, StyleSheet } from 'react-native'

export default class PrimeiroProjeto extends Component {
 constructor(props){
   super(props) 
   this.state = {frase: "", texto1:"", texto2:""}
   this.addMIMIMI = this.addMIMIMI.bind(this)
  
 }
  mudarVogais(texto){
    let novoTexto = texto.toLowerCase()
    novoTexto = novoTexto.replace(/(a|e|i|o|u)/g,'i')
    novoTexto = novoTexto.replace(/(á|à|â|ã)/g,'i')
    novoTexto = novoTexto.replace(/(é|è|ê)/g,'i')
    novoTexto = novoTexto.replace(/(í|ì|î)/g,'i')
    novoTexto = novoTexto.replace(/(ó|ò|ô|õ)/g,'i')
    novoTexto = novoTexto.replace(/(ú|ù|û)/g,'i')
    return novoTexto
  }
  addMIMIMI(texto){
    let s = this.state
    s.texto1 = texto 
    s.texto2 = this.mudarVogais(texto)
    this.setState(s)
  }
  render() {
    return(
      <View style={styles.body}>
        <View>
          <Text style={styles.titulo} >Criador de MIMIMI</Text>
        </View>
        <View style={styles.inputArea} >
          <TextInput style={styles.input} placeholder='Digite seu MIMIMI' onChangeText={this.addMIMIMI} />
        </View>
        <View style={styles.area} >
          <Text style={[styles.texto,styles.texto1]}>{this.state.texto1.toUpperCase()}</Text>
          <Image source={require('./images/mimimi.png')} style={styles.imagem} ></Image>
          <Text style={[styles.texto,styles.texto2]}>{this.state.texto2.toUpperCase()}</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    backgroundColor: '#999',
    flex: 1,
    flexDirection:'column',
    alignItems: 'center'
  },
  titulo:{
    fontSize: 30,
    color:'#fff'
  },
  inputArea: {
    alignSelf:'stretch',
  },
  input: {
    borderWidth:1,
    borderColor: "#999",
    backgroundColor:'#eee',
    height: 40,
    fontSize:20,
    color: '#000',
    margin:20,
    padding:10
  },
  area: {
   width:300,
   height:300,
   marginTop:10
  },
  imagem: {
    width:300,
    height:300,
    marginTop: -70,
    zIndex:0
  },
  texto:{
    fontSize:20,
    color: '#fff',
    padding:10,
    backgroundColor: 'transparent',
    fontWeight:'bold',
    textAlign: 'center',
    height:70
  },
  texto1:{
    //marginTop: -30,
    zIndex:1
  },
  texto2:{
    marginTop: -70,
    zIndex:1
  }

  
})