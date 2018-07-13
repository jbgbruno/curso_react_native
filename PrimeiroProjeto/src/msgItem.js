import React, { Component } from 'react'
import {View,FlatList,Image, Text, TouchableHighlight, StyleSheet, Platform} from 'react-native'

export default class MsgItem extends Component{
    constructor(props){
        super(props)
        
        this.estilo =  (props.data.m) ? styles.balaoDireita : styles.balaoEsquerda
    }

    render(){
        return(
            
                <View style={[styles.balao,this.estilo]}>
                                       
                    <Text numberOfLines={1} style={styles.infoNome}>{this.props.data.nome}</Text>
                    <Text style={styles.infoMsg}>{this.props.data.msg}</Text>
                    
                </View>
            
            
        )
    }
}

const styles = StyleSheet.create({
    balao:{
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    balaoEsquerda:{
        backgroundColor: '#FFF',
        alignSelf: 'flex-start',
        marginRight: 50,
    },
    balaoDireita:{
        backgroundColor: '#3AB05A',
        alignSelf: 'flex-end',
        marginLeft:50
    },
    info:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10,
    },
    infoNome:{
        fontSize: 17,
        fontWeight: 'bold',
    },
    infoMsg:{

    }
})