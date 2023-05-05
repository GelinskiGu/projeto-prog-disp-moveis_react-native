import { View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView } from "react-native";
import { useState, useEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import { RecuperarSenha_sty } from "../components/MyStyles/RecuperarSenha_sty";

import contas from "../data/Contas";



const RecuperarSenha = (props) => {
    const [email, setEmail] = useState('');

    return (
        <KeyboardAvoidingView style={RecuperarSenha_sty.containerView.keyboard} behavior="height">
            <View style={RecuperarSenha_sty.containerView}>
                <View style={RecuperarSenha_sty.container}>
                    <Text style={RecuperarSenha_sty.text}>E-mail</Text>
                    <TextInput placeholder="Seu e-mail..." placeholderTextColor={'#8B8B8B'} style={RecuperarSenha_sty.input} label={'Email'} value={email} onChangeText={setEmail}></TextInput>
                </View>

                <TouchableOpacity>
                    <Text>Recuperar senha</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

    )
}

export default RecuperarSenha;