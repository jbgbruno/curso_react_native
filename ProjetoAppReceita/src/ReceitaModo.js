import React,{Component} from 'react'
import {View, Text,FlatList,StyleSheet} from 'react-native'


export default class ReceitaModo extends Component{
    static navigationOptions = {
        tabBarLabel:'Modo'
    }

    constructor(props){
        super(props)
        this.state =  {}
    }
    render(){
        return(
            <View style={styles.areaTab}>
              <FlatList 
                    data={this.props.screenProps.modo}
                    renderItem={({item})=>  <Text style={styles.modItem}>- Passo {item.key}: {item.txt}</Text>}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    areaTab:{
        flex: 1,
        margin: 10,
    },
    modItem:{
        fontSize: 16,
        marginBottom: 10,
    },
})