import React, { Component } from 'React'
import { View, Text, Switch, StyleSheet } from 'react-native'

//MODULO INTERMEDIARIO
export default class PrimeiroProjeto extends Component {
  constructor(props){
    super(props)
    this.state = {
      valor: false
    }

  }


  render() {
    return(
      <View style={styles.body}>
        <Switch thumbTintColor="#00f" onTintColor="#f00" value={this.state.valor} onValueChange={(v)=>this.setState({valor:v})}/>
        <Text>{(this.state.valor)?"Selecionado":"Não Selecionado"}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    flex: 1,
    backgroundColor: '#ddd',
  },
  texto:{
    fontSize: 30,
    textAlign:'center',
    
  }
  

  
})