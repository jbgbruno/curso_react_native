import React,{Component} from 'react'
import {View, Text,Image,TouchableHighlight, StyleSheet} from 'react-native'

export default class ReceitaItem extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <TouchableHighlight underlayColor="#ccc" onPress={this.props.onPress}>
            <View style={styles.area}>
                <Image resizeMode='contain' source={{uri:this.props.data.imagem}} style={styles.imagem}/>
                <View style={styles.areaInfo}>
                    <Text style={styles.nome}>{this.props.data.nome}</Text>
                    <Text style={styles.info}>{this.props.data.rendimento} porções - {this.props.data.preparo} minutos </Text>
                </View>
            </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    area:{
        height: 80,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        flex: 1,
        flexDirection: 'row',
    },
    imagem:{
        height: 70,
        width: 100,
        marginTop: 5,
        marginLeft: 10,
    },
    areaInfo:{

        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginHorizontal: 10,
        

    },
    nome:{
        fontSize: 14,
        fontWeight: 'bold',
    },
    info:{
        color: '#999'
    }
})