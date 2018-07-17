import React, {Component} from 'react'
import {View, Image,Text, FlatList, StyleSheet} from 'react-native'

export default class HomeProducts extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: props.navigation.state.params.products
        }        
    }
    static navigationOptions = ({navigation})=>({
        title: navigation.state.params.title

    })
    render(){
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.state.list}  
                    renderItem={({item}) => <ProductItem data={item}/>}
                />
            </View>
        )
    }
    
}
class ProductItem extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <View style={styles.listaItem}>
                <Image style={styles.listaImagem} source={this.props.data.img}/>
                <View >
                    <Text style={styles.listaNome}>{this.props.data.name}</Text>
                     
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },      
    listaItem:{
        marginTop: 10,
        marginHorizontal : 10,
        height: 100,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor:"#fff"
    },
    listaImagem:{
        height: 64,
        width:64,
        marginLeft: 20,
        marginRight: 20,
    },
    listaNome:{
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
    },  
})