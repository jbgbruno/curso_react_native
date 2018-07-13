import React, {Component} from 'react'
import {View, Text,Image, TextInput, Button} from 'react-native'

export default class TelaInicial extends Component{
    constructor(props){
      super(props)
      this.state = {
        nome: ""
      }
      this.conversar = this.conversar.bind(this)
    }
    static navigationOptions = ({navigation})=> ({
      tabBarLabel: "Inicial",
      tabBarIcon: ({tintColor,focused})=>{
        if(focused){
        return (
           <Image source={require('../assets/images/home_on.png')} style={{width: 26, height:26}}/>
        )
        }else{
          return (
            <Image source={require('../assets/images/home_off.png')} style={{width: 26, height:26}}/>
         )
        }
      }
    })
  
    conversar(){
      this.props.navigation.navigate('Conversa',{nome: this.state.nome})
    }
    
    render(){
      return(
        <View>
          <TextInput style={{height:40, borderWidth:1,borderColor:"#000",width:200}} placeholder="Qual seu nome" onChangeText={(nome)=>{this.setState({nome:nome})}}/>
          <Button title="Conversar" onPress={this.conversar} />
        </View>
      )
    }
  }
