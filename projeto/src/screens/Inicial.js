import { View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView } from "react-native";
import { useState, useEffect } from 'react';
import { Font_sty } from "../components/Font_sty";
import { KeyboardAvoidingView } from 'react-native';

// TODO: Arrumar imagem de fundo.

const Inicial = (props) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    return (

        <ImageBackground source={require('../../assets/images/InicialBackgroundImage.jpg')} style={{ width: '100%', height: '100%' }}>
            <KeyboardAvoidingView style={Font_sty.container.keyboard} behavior="height">
                <ScrollView>
                    <View style={Font_sty.container}>
                        <View style={Font_sty.header}>
                            <ImageBackground source={require('../../assets/images/icon-vaccine.png')} style={Font_sty.header.headerIcon} />
                            <Text style={Font_sty.header.header_text}>MyHealth</Text>
                        </View>

                        <View behavior="padding" style={Font_sty.text}>
                            <Text style={Font_sty.text.text_text}>Controle as suas vacinas e fique seguro</Text>
                        </View>

                        <View style={Font_sty.login} behavior="padding">
                            <View style={Font_sty.login.login_views} behavior="padding">
                                <Text style={Font_sty.login.login_text}>E-mail</Text>
                                <TextInput label={'Email'} style={Font_sty.login.login_box} value={email} onChangeText={setEmail}></TextInput>
                            </View>
                            <View style={Font_sty.login.login_views} behavior="padding">
                                <Text style={Font_sty.login.login_text}>Senha</Text>
                                <TextInput secureTextEntry={true} label={'Senha'} style={Font_sty.login.login_box} value={senha} onChangeText={setSenha}></TextInput>
                            </View>
                        </View>

                        <View style={Font_sty.buttons_container}>
                            <TouchableOpacity style={Font_sty.buttons_container.buttons1} onPress={() => { props.navigation.navigate("MinhasVacinas") }}>
                                <Text style={Font_sty.buttons_container.textButton1}>Entrar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Font_sty.buttons_container.buttons2} onPress={() => { props.navigation.navigate("NovaConta") }}>
                                <Text style={Font_sty.buttons_container.textButton1}>Criar minha conta</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Font_sty.buttons_container.buttons3}>
                                <Text style={Font_sty.buttons_container.textButton2}>Esqueci minha senha</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground >

    )
}

export default Inicial;