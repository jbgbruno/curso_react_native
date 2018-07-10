import React, { Component } from 'React'
import { View, Text, FlatList, StyleSheet } from 'react-native'


export default class PrimeiroProjeto extends Component {
  constructor(props){
    super(props)
    this.state = {
      listData:[
        {key:'1',id:113,NOME:"FARMACIA NOVA",usuario:"Taumar",created_at:"2018-05-19 13:03:33"},
        {key:'2',id:112,NOME:"SOBRAL IMPORTADOS",usuario:"Amorim",created_at:"2018-05-12 09:53:27"},
        {key:'3',id:111,NOME:"BERG MAGAZINE - ANT. JB MOVEIS - LJ3 CARIRIACU",usuario:"Theogenes",created_at:"2018-05-05 12:40:03"},
        {key:'4',id:110,NOME:"OFFICE PAPELARIA E INFORM\u00c1TICA",usuario:"Taumar",created_at:"2018-04-21 09:14:03"},
        {key:'5',id:109,NOME:"OFFICE PAPELARIA E INFORM\u00c1TICA",usuario:"Taumar",created_at:"2018-04-21 09:13:22"},
        {key:'6',id:108,NOME:"OFFICE PAPELARIA E INFORM\u00c1TICA",usuario:"Taumar",created_at:"2018-04-21 09:12:18"},
        {key:'7',id:107,NOME:"OFFICE PAPELARIA E INFORM\u00c1TICA",usuario:"Taumar",created_at:"2018-04-21 09:12:14"},
        {key:'8',id:106,NOME:"TROCAR",usuario:"Amorim",created_at:"2018-03-31 13:33:23"},
        {key:'9',id:105,NOME:"DROGARIA SAO JOSE - ICO",usuario:"Amorim",created_at:"2018-03-31 13:30:02"},
        {key:'10',id:104,NOME:"AZTECA CAL\u00c7ADOS - BARBALHA",usuario:"Theogenes",created_at:"2018-03-24 12:25:05"}
      ]
    }

  }

  listRender(item){
    return(
      <Text>#{item.id} - {item.NOME}</Text>
    )
  }


  render() {
    return(
      <View style={styles.body}>
        <FlatList style={styles.lista} data={this.state.listData} renderItem={({item})=>this.listRender(item)}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    flex: 1,
  },
  lista:{}
  

  
})