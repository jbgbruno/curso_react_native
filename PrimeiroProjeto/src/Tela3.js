import React,{ Component } from "react"
import { View, Text, Button, StyleSheet } from "react-native"
import {NavigationActions, StackActions } from 'react-navigation'

export default class Tela1 extends Component{
    static navigationOptions = ({navigation})=> ({
        title:"Tela 3"
    })
    render(){
        return(
            <View style={styles.container}>
                <Text> Tela 3</Text>
                <Button title='Votar para tela 2' onPress={()=>this.props.navigation.goBack()}/>
                <Button title='Votar para tela 1' onPress={()=>this.props.navigation.dispatch(StackActions.reset({
                    index:0,
                    actions:[
                        NavigationActions.navigate({routeName:'Tela1'})
                    ]
                }))}/>
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