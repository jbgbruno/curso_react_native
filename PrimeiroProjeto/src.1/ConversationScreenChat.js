import React, {Component} from 'react'
import {View,Image, Text, StyleSheet} from 'react-native'

export default class ConversationScreenChat extends Component{
   static navigationOptions = ({navigation})=>({
    title: navigation.state.params.nome
   })
    render(){
      return(
        <View style={styles.container}>
          <Text>Tela de Conversa</Text>
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