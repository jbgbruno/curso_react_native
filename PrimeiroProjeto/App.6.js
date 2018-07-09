import React, { Component } from 'React'
import { View, Text, SectionList, StyleSheet } from 'react-native'


export default class PrimeiroProjeto extends Component {
  constructor(props){
    super(props)
    this.state = {
      listData:[
      {title:'B', data:[        
        {key: "1",nome: 'Bruno', idade:26},
      ]},
      {title:'J', data:[
        {key: "2",nome: 'Joao', idade:20},
        {key: "3",nome: 'Joao Bruno', idade:28},
        {key: "4",nome: 'Joao Bruno Gomes', idade:30}
      ]},
      {title:'D', data:[
        {key: "5",nome: 'Davi', idade:29},
        {key: "6",nome: 'Damiao', idade:60},
        {key: "7",nome: 'Daniel', idade:40}
      ]},


        
      ]
    }

  }
  listRender(item){
    return (
        <Text style={styles.Item}>{item.nome}-{item.idade}</Text>
    )
  }
  listSectionRender(section){
    return (
      <Text style={styles.Section}>{section.title}</Text>
    )
  }
  render() {
    return(
      <View style={styles.body}>
        <SectionList style={styles.FlatList} sections={this.state.listData} renderItem={({item})=>this.listRender(item)} renderSectionHeader={({section}) => this.listSectionRender(section)}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    flex: 1,
  },
  FlatList:{
    //backgroundColor: '#aaa',
  },
  Item:{
    padding: 10,
    fontSize: 18,
    height: 40
  },
  Section:{
    padding: 10,
    backgroundColor: "#ccc",
    fontSize: 14,
  },

  
})