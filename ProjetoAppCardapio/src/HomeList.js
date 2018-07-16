import React, {Component} from 'react'
import {View, Image, StyleSheet} from 'react-native'

export default class HomeList extends Component{
    static navigationOptions = {
        title:'Restaurante XYZ',
        tabBarLabel:'Inicio',
        tabBarIcon: ({focused, tintColor})=> {
            if(focused){
                return(
                    <Image source={require('../assets/images/home_azul.png')} style={styles.icon} />
                )
            }else{
                return(
                    <Image source={require('../assets/images/home_preto.png')} style={styles.icon} />
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