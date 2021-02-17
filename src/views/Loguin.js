import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, Button } from 'react-native'
import Botao from '../components/Botao'

export default class Pedidos extends Component {
    render() {
        function executar() {
                        console.warn("X!!")
                    }
        return (
            <View style = {styles.container}>
                <Image style = {styles.Img} source = {require('../img/Login/LogoPigz.png')}/>
                <View backgroundColor = "none">
                    <Text style={styles.TxtG}>Entrar</Text>
                    <Text>Email ou Telefone:</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder = "example@pigz.com.br"
                    /> 
                    <Text>Senha:</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder = ". . . . . . . ."
                        secureTextEntry={true}
                        
                    />
                    <TouchableOpacity>
                        <Text style= {styles.Txt}>Esqueci a Senha</Text>
                    </TouchableOpacity>
                    
                    <Button 
                        style = {styles.BtnSubmit}
                        title = "Entrar"
                        color = "#FE671F"
                        onPress = {executar}/>

                    <TouchableOpacity style = {styles.Btn}>
                        <Text  style= {styles.TxtCentralizado}>Não tem uma conta?</Text>
                    </TouchableOpacity >

                    <View>
                        <TouchableOpacity style = {styles.BtnBranco}>
                        <Button title = "Quero vender no Pigz!"/>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                        <Text style= {styles.TxtCentralizado}>Termos de Serviço</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Text style= {styles.TxtCentralizado}>Politica de Privacidade</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF3EE",

        
    },
    input: {
        backgroundColor: "white",
        width: 335,
        height: 40,
        borderRadius: 5,

    },
    BtnSubmit: {
        borderRadius: 5,
        fontWeight: "bold"

    },
    Btn: {
        marginTop: 50,
        marginBottom: 10,
        fontWeight: "bold"
    },
    Txt: {
        marginTop: 10,
        fontWeight: "bold", 
        marginBottom: 30
    },
    TxtCentralizado: {
        marginTop: 0,
        marginBottom: 0,
        fontWeight: "bold", 
        textAlign: "center",
        fontWeight: "bold",
    },
    TxtG: {
        marginTop: 5,
        marginBottom: 15,
        fontWeight: "bold", 
        fontSize: 18
    },
    BtnBranco: {
        marginBottom: 100,
        color: "#fff"
    },
    Img: {
        marginTop:-30,
       marginBottom: 40 
    }
})