import React, {Component} from 'react'
import {View,Image, Text} from 'react-native'

export default class Conversa extends Component{
    static navigationOptions = ({navigation})=>({
      drawerLabel: "Conversas",
      drawerIcon: ({tintColor,focused})=>{
        if(focused){
        return (
           <Image source={require('../assets/images/chat_on.png')} style={{width: 20, height:20}}/>
        )
        }else{
          return (
            <Image source={require('../assets/images/chat_off.png')} style={{width: 20, height:20}}/>
         )
        }
      }
    })
    render(){
      return(
        <View>
          <Text>Tela de Conversa</Text>
        </View>
      )
    }
  }