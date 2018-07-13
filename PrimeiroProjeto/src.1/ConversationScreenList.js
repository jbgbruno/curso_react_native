import React, {Component} from 'react'
import {View,Image,Button, Text, StyleSheet} from 'react-native'

export default class ConversationScreenList extends Component{
    constructor(props){
      super(props)
    }
    //static navigationOptions = ({navigation})=>({
     // title: 'CONVERSAS'
   // })

    render(){
      return(
        <View style={styles.container}>
          <Text>Tela de Conversa</Text>
          <Button title="Paulo" onPress={()=>this.props.navigation.navigate('ConversationScreenChat',{nome: "Paulo"})} />
          <Button title="João" onPress={()=>this.props.navigation.navigate('ConversationScreenChat',{nome: "João"})} />
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     // marginTop: 20,
    }
  })  