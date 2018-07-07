import React, { Component } from 'React'
import { View, Text, TextInput, ImageBackground, Button, StyleSheet } from 'react-native'

export default class PrimeiroProjeto extends Component {
 constructor(props){
   super(props) 
   this.state = {
     meta: '4000',
     consumido: 0,
     status: 'Ruim',
     pct: 0
    }
    this.addCopo =  this.addCopo.bind(this)
    this.atualizar =  this.atualizar.bind(this)
 }
 atualizar(){
   let s = this.state
   s.pct = ((s.consumido/s.meta)*100)
   if(s.pct >= 100){
     s.status = "Bom"
   }else{
     s.status = 'Ruim'
   }
   this.setState(s)
 }
 addCopo(){
  let s = this.state
  s.consumido +=200
  this.setState(s)
  this.atualizar()
 }

  render() {
    return(
      <View style={styles.body}>
          <ImageBackground source={require('./images/waterbg.png')} style={styles.bgimage}>
            <View >
              <View style={styles.infoArea}>
                <View style={styles.area}>
                  <Text  style={styles.areaTitulo}>Meta Diária</Text>
                  <Text  style={styles.areaDado}>{this.state.meta} ml</Text>
                </View>
                <View style={styles.area}>
                <Text  style={styles.areaTitulo}>Consumido</Text>
                <Text  style={styles.areaDado}>{this.state.consumido} ml</Text>
                </View>
                <View style={styles.area}>
                <Text  style={styles.areaTitulo}>Status</Text>
                <Text  style={styles.areaDado}>{this.state.status}</Text>
                </View>
              </View>
                <View style={styles.pctArea}>
                  <Text style={styles.pctTexto} >{Math.floor(this.state.pct)}%</Text>
                </View>
                <View style={styles.btnArea}>
                  <Button onPress={this.addCopo} title="Beber 200ml" />
                </View>
            </View>
          </ImageBackground>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    flex: 1,
  },
  bgimage:{
    flex: 1,
    width:null
  },
  infoArea:{
    flex:1,
    flexDirection: 'row',
    marginTop:70
  },
  area:{
    flex:1,
    alignItems: 'center'
  },
  areaTitulo:{
    color: '#45b2fc'
  },
  areaDado:{
    color: '#2b4274',
    fontSize:15,
    fontWeight:'bold'
  },
  pctArea:{
    marginTop: 150,
    alignItems: 'center'
  },
  pctTexto:{
    fontSize: 70,
    color: '#fff'
  },
  btnArea:{
    marginTop: 30,
    alignItems: 'center'
  }

  
})