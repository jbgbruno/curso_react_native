import React, { Component } from "react"
import { View, Text, Button, StyleSheet } from "react-native"

export default class Tela1 extends Component{
    static navigationOptions = ({navigation})=> ({
        title:"Tela 2"
    })
    render(){
        return(
            <View style={styles.container}>
                <Text> Tela 2 </Text>
                <Button title='ir para tela 3' onPress={()=>this.props.navigation.navigate('Tela3')}/>
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