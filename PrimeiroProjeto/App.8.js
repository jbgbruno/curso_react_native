import React, { Component } from 'React'
import { View, Text, Picker, StyleSheet } from 'react-native'


export default class PrimeiroProjeto extends Component {
  constructor(props){
    super(props)
    this.state = {
      servico: 0,
      servicos: [
        {nome:'Alinhamento', valor: 30},
        {nome:'Balanceamento', valor: 20},
        {nome:'Rodizio de Pneus', valor: 50},
        {nome:'Dar uma voltinha', valor: 10},
      ]
    }

  }


  render() {
    let servicoItems = this.state.servicos.map((v,k)=>{
      return(<Picker.Item key={k} value={k} label={v.nome}/>)
    })
    return(
      <View style={styles.body}>
        <Text style={styles.logo}>Autopeças</Text>
        <Text>Selecione o Serviço</Text>
        <Picker selectedValue={this.state.servico} onValueChange={(itemValue, itemIndex)=>this.setState({servico:itemValue})}>
          {servicoItems}
        </Picker>
        <Text style={styles.texto}>R$ {this.state.servicos[this.state.servico].valor.toFixed(2)}</Text>


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
  logo:{
    fontSize: 30,
    textAlign:'center',
    marginBottom: 20,
  },
  texto:{
    fontSize: 30,
    textAlign:'center',
    
  }
  

  
})