import React, { Component } from 'react'
import { createStackNavigator} from 'react-navigation'

import ConversationScreenList from './ConversationScreenList';
import ConversationScreenChat from './ConversationScreenChat';


const Navegador = createStackNavigator({
  ConversationScreenList: { screen: ConversationScreenList
  },
  ConversationScreenChat: { screen: ConversationScreenChat}
  
}, {
  navigationOptions : {
    title: "Listagem Conversas",
    tabBarLabel : "Conversas",
    tabBarIcon: ({tintColor,focused})=>{
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
  }
})

export default Navegador