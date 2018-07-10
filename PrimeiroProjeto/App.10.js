import React, { Component } from 'React'
import { View, Text, Slider, StyleSheet } from 'react-native'

//MODULO INTERMEDIARIO
export default class PrimeiroProjeto extends Component {
  constructor(props){
    super(props)
    this.state = {
      valor: 50
    }

  }


  render() {
    return(
      <View style={styles.body}>
        <Slider minimumTrackTintColor='#f00' maximumTrackTintColor='#00f' value={this.state.valor} minimumValue={0} maximumValue={100} onValueChange={(v)=>this.setState({valor: v})}/>
        <Text>{this.state.valor.toFixed(0)}%</Text>
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