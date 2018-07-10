import React, { Component } from 'React'
import { View, Text, Button, Modal, StyleSheet } from 'react-native'

//MODULO INTERMEDIARIO
export default class PrimeiroProjeto extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false
    }
    this.abrirModal = this.abrirModal.bind(this)
    this.fecharModal = this.fecharModal.bind(this)
  }
  abrirModal(){
    let s = this.state
    s.modalVisible = true
    this.setState(s)
  }
  fecharModal(){
    let s = this.state
    s.modalVisible = false
    this.setState(s)
  }

  render() {
    return(
      <View style={styles.body}>
        <Modal onRequestClose={() => null} animationType="slide" visible={this.state.modalVisible}>
          <View style={styles.Modal}>
            <Button style={styles.Button}  title="X" onPress={this.fecharModal}/>
            <Text>Testando 1,2,3 ...</Text>
          </View>
        </Modal>
        <Button style={styles.Button} title="Abrir Modal" onPress={this.abrirModal}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    flex: 1,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Modal:{
    flex:1,
    backgroundColor:"#0f0",
    paddingTop: 25,
    alignItems: 'flex-start',
  },
  Button:{
    
    
  }
  

  
})