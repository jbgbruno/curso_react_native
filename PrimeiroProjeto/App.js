import React, { Component } from 'React'
import { View, Text, TouchableOpacity,Image, StyleSheet } from 'react-native'


export default class PrimeiroProjeto extends Component {
  constructor(props){
    super(props)
    this.state = {n : 0, botao: 'VAI'}
    this.timer = null
    this.vai = this.vai.bind(this)
    this.limpar = this.limpar.bind(this)
    
  }
  vai(){
    let s = this.state;
    

    if(this.timer != null){
      //parar o timer
      clearInterval(this.timer)
      this.timer = null
      s.botao ="VAI"  
    }else{
      //começar o timer
      this.timer = setInterval(()=>{
        let s = this.state;
        s.n += 0.1
        this.setState(s)
      }, 100)
      s.botao ="PARAR"
     
    }
    this.setState(s)
  }
  limpar(){
    if(this.timer != null){
      //parar o timer
      clearInterval(this.timer)
      this.timer = null
    }
    let s = this.state
    s.n = 0
    s.botao ="VAI"  
    this.setState(s)

  }
  render() {
    return(
      <View style={styles.body}>
          <Image style={styles.imagem} source={require('./images/relogio.png')}/>
          <Text style={styles.tempoText}>{this.state.n.toFixed(1)}</Text>
          <View style={styles.botaoArea}>
            <TouchableOpacity style={styles.botao} onPress={this.vai}>
                <Text style={styles.botaoTexto}>{this.state.botao}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={this.limpar}>
                <Text style={styles.botaoTexto}>LIMPAR</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: '#2c1f30',
  },
  imagem:{
    
  }, 
  tempoText:{
    fontSize:80,
    fontWeight:'bold',
    color:'#baa07a',
    //textAlign: 'center',
    marginTop: -150,
  },
  botaoArea:{
    flexDirection: 'row',
    height: 40,
    marginTop: 80
  },
  botao:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#886532',
    height:40,
    borderRadius: 5,
    margin:10
  },
  botaoTexto:{
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
  }
  
})