import React, {Component} from 'react'
import {View, Text,Image, TextInput, Button} from 'react-native'

export default class Configuracao extends Component{
 
    static navigationOptions = ({navigation})=> ({
      drawerLabel: "Configurações",
      drawerIcon: ({tintColor,focused})=>{
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
        <View>
          <Text>Configuracao</Text>
        </View>
      )
    }
  }
