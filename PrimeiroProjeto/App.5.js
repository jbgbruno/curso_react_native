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
      <TouchableOpacity style={this.styles.area} onPress={this.props.onPress}>
        <Text style={this.styles.text}>{this.props.n}</Text>
      </TouchableOpacity>
    )
  }
}

export default class PrimeiroProjeto extends Component {
  constructor(props){
    super(props)
    this.state= {res:'0'}
    this.btn = this.btn.bind(this)
  }
  btn(b){
    let s = this.state
    if(b == 'C'){
      s.res = '0'
    }
    else if(b == '='){
      s.res = eval(s.res)
    }
    else{
      if(s.res == '0')
       s.res = b
      else 
        s.res += b 
    }
    
    this.setState(s)
  }
  
  render() {
    return(
      <View style={styles.body}>
        <View style={styles.linha}>
          <Text style = {styles.res}>{this.state.res}</Text>
        </View>
        <View style={styles.linha}>
          <Botao cols="3" bg='#ccc' n="C" onPress={()=>this.btn('C')} />
          <Botao bg="#fd9526" n="/" onPress={()=>this.btn('/')} />
        </View>
        <View style={styles.linha}>
          <Botao n="7" onPress={()=>this.btn('7')}/>
          <Botao n="8" onPress={()=>this.btn('8')}/>
          <Botao n="9" onPress={()=>this.btn('9')}/>
          <Botao bg="#fd9526" n="*" onPress={()=>this.btn('*')}/>
        </View>
        <View style={styles.linha}>
          <Botao n="4" onPress={()=>this.btn('4')}/>
          <Botao n="5" onPress={()=>this.btn('5')}/>
          <Botao n="6" onPress={()=>this.btn('6')}/>
          <Botao bg="#fd9526" n="-" onPress={()=>this.btn('-')}/>
        </View>
        <View style={styles.linha }>
          <Botao n="1" onPress={()=>this.btn('1')}/>
          <Botao n="2" onPress={()=>this.btn('2')}/>
          <Botao n="3" onPress={()=>this.btn('3')}/>
          <Botao bg="#fd9526" n="+" onPress={()=>this.btn('+')}/>
        </View>
        
        <View style={styles.linha}>
          <Botao cols="2" n="0" onPress={()=>this.btn('0')}/>
          <Botao bg="#fd9526" n="." onPress={()=>this.btn('.')}/>
          <Botao bg="#fd9526" n="=" onPress={()=>this.btn('=')}/>
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
  res:{
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 50,
    flex: 1,
    textAlign: 'right'
  },
  botao:{
   
  },
  botaoTexto:{

  }
  
})