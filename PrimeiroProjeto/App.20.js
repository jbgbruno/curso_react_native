import React, { Component } from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import {createMaterialTopTabNavigator} from 'react-navigation'

const Tela1HeaderRight = ()=>{
  return(
    <View style={{paddingRight: 10}}>
      <Button  title="Sair" onPress={()=>{}} />
    </View>
  )
}
const Tela1HeaderLeft = ()=>{
  return(
    <View style={{paddingLeft: 10}}>
      <Button  title="Sair" onPress={()=>{}} />
    </View>
  )
}

class Tela1 extends Component {
  static navigationOptions = ({navigation})=> ({
      title:"Tela 1",

  })
  render(){
      return(
          <View style={styles.container}>
              <Text> Tela 1 </Text>
              <Button title='ir para tela 2' onPress={()=>this.props.navigation.navigate('Tela2')}/>
          </View>
      )
  }
}
class Tela2 extends Component {
  static navigationOptions = ({navigation})=> ({
      title:"Tela 2"
  })
  render(){
      return(
          <View style={styles.container}>
              <Text> Tela 2 </Text>
              <Button title='Voltar para tela 1' onPress={()=>this.props.navigation.goBack()}/>
          </View>
      )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
})


const Navegador = createMaterialTopTabNavigator({
  Tela1: { 
    screen: Tela1, 
    header: null
  },
  Tela2: { screen: Tela2}
},
{
  initialRouteName: 'Tela2'
})

export default Navegador