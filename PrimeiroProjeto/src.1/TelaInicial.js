import React, {Component} from 'react'
import {View, Text,Image, StyleSheet} from 'react-native'
export default class TelaInicial extends Component{
    constructor(props){
      super(props)
      this.state = {
        nome: ""
      }
     
    }
    static navigationOptions = ({navigation})=> ({
      tabBarLabel: "Inicial",
      tabBarIcon: ({tintColor,focused})=>{
        if(focused){
        return (
           <Image source={require('../assets/images/home_on.png')} style={{width: 20, height:20}}/>
        )
        }else{
          return (
            <Image source={require('../assets/images/home_off.png')} style={{width: 20, height:20}}/>
         )
        }
      }
    })
  
  
    render(){
      return(
        <View style={styles.container}>
          <Text>Tela inicial</Text>
        </View>
      )
    }
  }
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  }
})
