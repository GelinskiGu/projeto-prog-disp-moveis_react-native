import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import { useState } from 'react';

import { RecuperarSenha_sty } from "../components/MyStyles/RecuperarSenha_sty";

import { auth } from "../firebase/config";
import { sendPasswordResetEmail } from 'firebase/auth';

const RecuperarSenha = (props) => {
    const [email, setEmail] = useState('');

    const recoverPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log("E-mail de redefinição enviado com sucesso. Verifique sua caixa de entrada")
                props.navigation.popToTop();
            })
            .catch((error) => {
                console.log("Falha ao enviar e-mail de redefinição: " + JSON.stringify(error))
            })
    }

    return (
        <KeyboardAvoidingView style={RecuperarSenha_sty.containerView.keyboard} behavior="height">
            <View style={RecuperarSenha_sty.containerView}>
                <View style={RecuperarSenha_sty.container}>
                    <Text style={RecuperarSenha_sty.text}>E-mail</Text>
                    <TextInput placeholder="Seu e-mail..." placeholderTextColor={'#8B8B8B'} style={RecuperarSenha_sty.input} label={'Email'} value={email} onChangeText={setEmail}></TextInput>
                </View>

                <TouchableOpacity style={RecuperarSenha_sty.button} onPress={recoverPassword}>
                    <Text style={RecuperarSenha_sty.textButton}>Recuperar senha</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

    )
}

export default RecuperarSenha;