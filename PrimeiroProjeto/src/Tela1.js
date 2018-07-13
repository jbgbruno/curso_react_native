import React,{ Component } from "react"
import { View, Text, Button, StyleSheet } from "react-native"

export default class Tela1 extends Component {
    static navigationOptions = ({navigation})=> ({
        title:"Tela 1"
    })
    render(){
        return(
            <View style={styles.container}>
                <Text> Tela 1 </Text>
                <Button title='ir para tela 2' onPress={()=>this.props.navigation.navigate('Tela2')}/>
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