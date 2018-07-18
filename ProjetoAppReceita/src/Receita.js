import React,{Component} from 'react'
import {View, Text,TouchableHighlight,Image, StyleSheet} from 'react-native'
import {createMaterialTopTabNavigator} from 'react-navigation'
import ReceitaResumo from './ReceitaResumo'
import ReceitaIngredientes from './ReceitaIngredientes'
import ReceitaModo from './ReceitaModo'

const Abas = createMaterialTopTabNavigator({
    ReceitaResumo: {screen:ReceitaResumo},
    ReceitaIngredientes:{screen:ReceitaIngredientes},
    ReceitaModo:{screen:ReceitaModo}
},{
    tabBarPosition:'top',
    tabBarOptions:{
        showIcon: false,
        style:{
            backgroundColor: "#eee",
        },
        labelStyle:{
            fontSize: 14,
            height: 47,
            lineHeight: 47,
            
        },
        activeTintColor: '#333',
        inactiveTintColor:'#aaa'

    }
})

export default class Lista extends Component{
    static navigationOptions = {
        title: 'Receitas',
        header:null
    }
    constructor(props) {
		super(props);
		this.state = {
		
        };
        this.goBack = this.goBack.bind(this)

    }
    goBack(){
        this.props.navigation.goBack()
    }
    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight underlayColor="#ccc" style={styles.backButton} onPress={this.goBack}>
                    <Image source={require('../assets/images/back.png')} style={styles.image}/>
                </TouchableHighlight>
                <Image source={{uri: this.props.navigation.state.params.imagem}} style={styles.receitaImagem} />
                <Abas screenProps={this.props.navigation.state.params} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:20
    },
    backButton:{
        width:26,
        height:26,
        marginLeft: 10,
        marginTop:5,
        zIndex: 99
    },
    image:{
        height:26,
        width:26,

    },
    receitaImagem:{
        height:200,
        marginTop: - 51
    }
})