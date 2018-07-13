import React, { Component } from 'react'
import {View, StatusBar, Picker,Slider,Switch,ScrollView, Text,TextInput, Button, StyleSheet} from 'react-native'
import DatePicker from 'react-native-datepicker'

class InputMaisMenos extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue: 0
    }
    this.adicionar = this.adicionar.bind(this)
    this.diminuir = this.diminuir.bind(this)

  }
  adicionar(){
    let s = this.state
    s.inputValue = s.inputValue + 1
    this.setState(s)
  }
  diminuir(){
    let s = this.state
    if(s.inputValue == 0){return}
    s.inputValue = s.inputValue -1
    this.setState(s)
  }
  render(){
    return(
      <View style={styles.areaInputPlus}>
        <Button title='-' onPress={this.diminuir}/>
        <TextInput  style={styles.inputPlus} onChangeText={(inputValue) => this.setState({inputValue})}
        value={this.state.inputValue.toString()} keyboardType='numeric'/>
        <Button title='+' onPress={this.adicionar}/>

      </View>

    )
  }
}

export default class ProjetoTentandoFazer extends Component{
  constructor(props){
    super(props)
    this.state = {
      nome: '', date:"",sexo: '', altura: 1.5,peso: 60, doador: false, salario:'',banco:'',qntCartoes: 0
    }
    this.Enviar = this.Enviar.bind(this)
  }
  Enviar(){
    let s = this.state
    alert('Nome:'+s.nome+
      '\nSexo: '+s.sexo+
      '\nAltura: '+s.altura+
      '\nPeso: '+s.peso+
      '\nDoador de Orgãos: '+s.doador+
      '\nSalario: '+s.salario+
      '\nBanco: '+s.banco+
      '\nNº de Cartões: '+s.qntCartoes)
  }
  render(){
   
    return(
      <View style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="dark-content"/>
        <ScrollView>
        <Text style={styles.headers}>Dados Pessoais</Text>
        <View style={styles.rowInput}>
          <Text style={styles.labelInput}>Nome</Text>
          <TextInput style={styles.input} underlineColorAndroid='transparent' placeholder="Digite seu nome"/>
        </View>
        <View style={styles.rowInput}>
          <Text style={styles.labelInput}>Data de Nascimento</Text>
          <DatePicker
            date={this.state.date}
            mode="date"
            placeholder="Selecione a Data"
            format="DD-MM-YYYY"
            minDate="01-01-1950"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => {this.setState({date: date})}}
          />
        </View>
        <View style={styles.rowInput}>
          <Text style={styles.labelInput}>Sexo</Text>
          <Picker
          style={styles.input}
          selectedValue={this.state.sexo}
          onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}>
              <Picker.Item label="Masculino" value="M" />
              <Picker.Item label="Feminino" value="F" />
          </Picker>
        </View>
        <View style={styles.rowInput}>
          <Text style={styles.labelInput}>Altura</Text>
          <Slider style={styles.input} minimumTrackTintColor='#f00' value={this.state.altura} minimumValue={1} maximumValue={3} onValueChange={(altura)=>this.setState({altura: altura})}/>
        </View>
        <View style={styles.rowInput}>
          <Text style={styles.labelInput}>Peso</Text>
          <Slider style={styles.input} minimumTrackTintColor='#f00' value={this.state.peso} minimumValue={10} maximumValue={300} onValueChange={(p)=>this.setState({peso: p})}/>
        </View>
        <View style={styles.rowInput}>
          <Text style={styles.labelInput}>Doador de Orgãos</Text>
          <Switch style={styles.input}   value={this.state.doador} onValueChange={(v)=>this.setState({doador:v})}/>
        </View>
        <Text style={styles.headers}>Dados Financeiros</Text>
        <View style={styles.rowInput}>
          <Text style={styles.labelInput}>Salário</Text>
          <Slider style={styles.input} minimumTrackTintColor='#f00' value={this.state.valor} minimumValue={200} maximumValue={3000} onValueChange={(v)=>this.setState({valor: v})}/>
        </View>
        <View style={styles.rowInput}>
          <Text style={styles.labelInput}>Banco</Text>
          <Picker
          style={styles.input}
          selectedValue={this.state.banco}
          onValueChange={(itemValue, itemIndex) => this.setState({banco: itemValue})}>
              <Picker.Item label="Banco do Brasil" value="0" />
              <Picker.Item label="Caixa Economica" value="1" />
              <Picker.Item label="Itau" value="2" />
          </Picker>
        </View>
        <View style={styles.rowInput}>
          <Text style={styles.labelInput}>Nº:Cartões</Text>
          <InputMaisMenos />
        </View>
        <Button title="Enviar" onPress={this.Enviar}/>
        
      </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 20,

  },
  rowInput:{
    padding: 10,
    flex:1
  },
  headers:{
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
    alignSelf: 'center',
  },
  labelInput:{
    fontWeight: 'bold'
  },
  input:{
    borderWidth: 1,
    height: 40,
    borderColor: '#000',
    paddingLeft: 3,
   
  },
  inputText:{
    borderWidth: 1,
    borderColor: '#000',
    fontSize:20
  },
  areaInputPlus:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputPlus:{
    width: '50%',
    flexWrap: 'wrap', 
    textAlign:'center',
    fontSize:20
  }
})

