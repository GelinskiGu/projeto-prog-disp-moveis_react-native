import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import { useState } from 'react';

import { RecuperarSenha_sty } from "../components/MyStyles/RecuperarSenha_sty";

const RecuperarSenha = (props) => {
    const [email, setEmail] = useState('');

    return (
        <KeyboardAvoidingView style={RecuperarSenha_sty.containerView.keyboard} behavior="height">
            <View style={RecuperarSenha_sty.containerView}>
                <View style={RecuperarSenha_sty.container}>
                    <Text style={RecuperarSenha_sty.text}>E-mail</Text>
                    <TextInput placeholder="Seu e-mail..." placeholderTextColor={'#8B8B8B'} style={RecuperarSenha_sty.input} label={'Email'} value={email} onChangeText={setEmail}></TextInput>
                </View>

                <TouchableOpacity style={RecuperarSenha_sty.button} onPress={() => props.navigation.popToTop()}>
                    <Text style={RecuperarSenha_sty.textButton}>Recuperar senha</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

    )
}

export default RecuperarSenha;