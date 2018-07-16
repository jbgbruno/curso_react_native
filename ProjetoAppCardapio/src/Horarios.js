import React, {Component} from 'react'
import {View, Image, StyleSheet} from 'react-native'

export default class Horarios extends Component{
    static navigationOptions = {
        tabBarLabel:'Horarios',
        tabBarIcon: ({focused, tintColor})=> {
            if(focused){
                return(
                    <Image source={require('../assets/images/horario_azul.png')} style={styles.icon} />
                )
            }else{
                return(
                    <Image source={require('../assets/images/horario_preto.png')} style={styles.icon} />
                )
            }

            
        }
    }
    render(){
        return (
            <View>
                
            </View>
        )
    }
    
}
const styles = StyleSheet.create({
    icon:{
        width:26,
        height:26
    }        
})