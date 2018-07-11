import React, {Component} from 'react'
import {View, Text,Image, TextInput, Button} from 'react-native'
import {DrawerActions} from 'react-navigation'
export default class TelaInicial extends Component{
    constructor(props){
      super(props)
      this.state = {
        nome: ""
      }
     
    }
    static navigationOptions = ({navigation})=> ({
      drawerLabel: "Inicial",
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
          <Text>Tela inicial</Text>
          <Button title="Abrir DrawerNavigator" onPress={()=>this.props.navigation.dispatch(DrawerActions.openDrawer())} />
        </View>
      )
    }
  }
