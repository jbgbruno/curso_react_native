import React, { Component } from 'react'
import {View,FlatList, Text, Button, StyleSheet, Platform} from 'react-native'
import ListItem from './src/listItem'
export default class PrimeiroProjeto extends Component{
  constructor(props){
    super(props)
    this.state = {
      list:[
        {key:'1', img:'https://www.b7web.com.br/avatar1.png', nome:'Joao Bruno', msg:'Deu certo1'},
        {key:'2', img:'https://www.b7web.com.br/avatar2.png', nome:'Bruno', msg:'Deu certo2'},
        {key:'3', img:'https://www.b7web.com.br/avatar3.png', nome:'Aparecida', msg:'Deu certo3'},
        {key:'4', img:'https://www.b7web.com.br/avatar1.png', nome:'TesteAvatar', msg:'Deu certo4'},
        {key:'5', img:'https://www.b7web.com.br/avatar2.png', nome:'TesteAVATAR', msg:'Deu certo5'},
        {key:'6', img:'https://www.b7web.com.br/avatar3.png', nome:'Teste', msg:'Deu certo6'},
      ]
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <FlatList data={this.state.list} renderItem={({item})=><ListItem data={item}/>} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: (Platform.OS =='ios')? 20 : 20,

  }
})

