import { View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView } from "react-native";
import { useState, useEffect } from 'react';
import { Inicial_sty } from "../components/MyStyles/Inicial_sty";
import { KeyboardAvoidingView } from 'react-native';

import contas from "../data/Contas";

// TODO: Arrumar imagem de fundo.

// ** Tela praticamente finalizada, se der tempo arrumar imagem de fundo. **

const Inicial = (props) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [paddingSenha, setPaddingSenha] = useState(6);
    const [mensagemErro, setMensagemErro] = useState('');

    const entrar = () => {
        for (const key in contas) {
            if (key === email) {
                const emailUsuario = contas[key].email;
                const senhaUsuario = contas[key].senha;
                if (emailUsuario === email && senhaUsuario === senha) {
                    setMensagemErro('');
                    setPaddingSenha(6);
                    props.navigation.navigate("MyDrawer", { emailUsuarioLogado: emailUsuario });
                    return;
                }
                else {
                    setPaddingSenha(24);
                    setMensagemErro(<Text style={Inicial_sty.login.messageErrorView.textMessageError}>E-mail e/ou senha inválidos.</Text>);
                    return;
                }
            }
        }
        setPaddingSenha(24);
        setMensagemErro(<Text style={Inicial_sty.login.messageErrorView.textMessageError}>E-mail não cadastrado.</Text>);
        return;
    }

    return (

        <ImageBackground source={require('../../assets/images/InicialBackgroundImage.jpg')} style={{ width: '100%', height: '100%' }}>
            <KeyboardAvoidingView style={Inicial_sty.container.keyboard} behavior="height">
                <ScrollView>
                    <View style={Inicial_sty.container}>
                        <View style={Inicial_sty.header}>
                            <ImageBackground source={require('../../assets/images/icon-vaccine.png')} style={Inicial_sty.header.headerIcon} />
                            <Text style={Inicial_sty.header.header_text}>MyHealth</Text>
                        </View>

                        <View style={Inicial_sty.text}>
                            <Text style={Inicial_sty.text.text_text}>Controle as suas vacinas e fique seguro</Text>
                        </View>

                        <View style={Inicial_sty.login}>
                            <View style={Inicial_sty.login.login_views}>
                                <Text style={Inicial_sty.login.login_text}>E-mail</Text>
                                <TextInput
                                    keyboardType="email-address"
                                    placeholder='Digite o e-mail de sua conta...'
                                    placeholderTextColor={'#8B8B8B'}
                                    label={'Email'}
                                    style={Inicial_sty.login.login_box}
                                    value={email}
                                    onChangeText={setEmail}></TextInput>
                            </View>
                            <View style={Inicial_sty.login.login_views}>
                                <Text style={[Inicial_sty.login.login_text, { paddingBottom: paddingSenha }]}>Senha</Text>
                                <View style={Inicial_sty.login.messageErrorView}>
                                    <TextInput
                                        placeholder='Digite a senha de sua conta...'
                                        placeholderTextColor={'#8B8B8B'}
                                        secureTextEntry={true}
                                        label={'Senha'}
                                        style={Inicial_sty.login.messageErrorView.login_box}
                                        value={senha}
                                        onChangeText={setSenha}
                                    ></TextInput>
                                    {mensagemErro}
                                </View>
                            </View>
                        </View>

                        <View style={Inicial_sty.buttons_container}>
                            <TouchableOpacity style={Inicial_sty.buttons_container.buttons1} onPress={entrar}>
                                <Text style={Inicial_sty.buttons_container.textButton1}>Entrar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Inicial_sty.buttons_container.buttons2} onPress={() => { props.navigation.navigate("NovaConta") }}>
                                <Text style={Inicial_sty.buttons_container.textButton1}>Criar minha conta</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Inicial_sty.buttons_container.buttons3} onPress={() => props.navigation.navigate("RecuperarSenha")}>
                                <Text style={Inicial_sty.buttons_container.textButton2}>Esqueci minha senha</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground >

    )
}

export default Inicial;