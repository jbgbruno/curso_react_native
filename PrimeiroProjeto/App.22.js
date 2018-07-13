import React, { Component } from 'react'
import {View,FlatList,ImageBackground, Text, Button, StyleSheet, Platform} from 'react-native'
import MsgItem from './src/msgItem'
export default class PrimeiroProjeto extends Component{
  constructor(props){
    super(props)
    this.state = {
      chat:[
        {key:"1", nome:"pessoa1", msg:"Oi", m:true},
        {key:"2", nome:"pessoa2", msg:"Oi,sfsdfsadf", m:false},
        {key:"3", nome:"pessoa1", msg:"Osafsadf sadf sadfsdfdsa fsdf sfi", m:true},
        {key:"4", nome:"pessoa2", msg:"Osfsd fsadf sadf sdfsdf dfgrtgrty gryhr hr hri", m:false},
        {key:"5", nome:"pessoa1", msg:"Ofsdf dfg dfgd fgtwege ege.ge geg erg.e rg.e rg.erg fwqfw etgthry .i", m:true},
        {key:"6", nome:"pessoa2", msg:"saf sadfOi", m:false},
        {key:"7", nome:"pessoa1", msg:"Owsf xcvcgbtyerti", m:true},
        {key:"8", nome:"pessoa2", msg:"O34r34r 34f fsdfasfi", m:false},
        {key:"9", nome:"pessoa1", msg:"ok, bye", m:true},
      ]
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <ImageBackground source={require('./assets/images/bg.jpg')} style={styles.chat} >
          <FlatList data={this.state.chat} renderItem={({item})=><MsgItem data={item}/>} />
        </ImageBackground>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: (Platform.OS =='ios')? 20 : 20,

  },
  chat:{
    flex: 1
  }
})

