import { View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView } from "react-native";
import { useState, useEffect } from 'react';
import { Inicial_sty } from "../components/MyStyles/Inicial_sty";
import { KeyboardAvoidingView } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase/config";

import LinearGradient from 'react-native-linear-gradient';

import contas from "../data/Contas";

const Inicial = (props) => {
    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');
    const [paddingSenha, setPaddingSenha] = useState(6);
    const [mensagemErro, setMensagemErro] = useState('');

    const authenticate = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userLogged) => {
                console.log("Usuário autenticado com sucesso: " + JSON.stringify(userLogged))
                setMensagemErro('');
                setPaddingSenha(6);
                props.navigation.navigate("MyDrawer", { emailUsuarioLogado: 'testefirebase@teste.com' });
            })
            .catch((error) => {
                console.log("Falha ao autenticar o usuário: " + JSON.stringify(error))
                setPaddingSenha(24);
                if (error.code === 'auth/user-not-found') {
                    setMensagemErro(<Text style={Inicial_sty.login.messageErrorView.textMessageError}>E-mail não cadastrado.</Text>);
                }
                else if (error.code === 'auth/wrong-password') {
                    setMensagemErro(<Text style={Inicial_sty.login.messageErrorView.textMessageError}>Senha incorreta.</Text>);
                }
                else if (error.code === 'auth/invalid-email') {
                    setMensagemErro(<Text style={Inicial_sty.login.messageErrorView.textMessageError}>E-mail inválido.</Text>);
                }
                else if (error.code === 'auth/too-many-requests') {
                    setMensagemErro(<Text style={Inicial_sty.login.messageErrorView.textMessageError}>Muitas tentativas. Tente novamente mais tarde.</Text>);
                }
                else if (error.code === 'auth/network-request-failed') {
                    setMensagemErro(<Text style={Inicial_sty.login.messageErrorView.textMessageError}>Sem conexão com a internet.</Text>);
                }
                else {
                    setMensagemErro(<Text style={Inicial_sty.login.messageErrorView.textMessageError}>Erro.</Text>);
                }
            })
    }

    const entrar = () => {
        for (const key in contas) {
            if (key === email) {
                const emailUsuario = contas[key].email;
                const passwordUsuario = contas[key].password;
                if (emailUsuario === email && passwordUsuario === password) {
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
            <LinearGradient colors={[
                'rgba(84, 131, 126, 0.2)',
                'rgba(255, 255, 255, 0.62)',
                'rgba(221, 230, 229, 0.68)',
                'rgba(59, 94, 90, 0.51)'
            ]}
                locations={[0.0028, 0.0989, 0.3541, 1.0065]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
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
                                            value={password}
                                            onChangeText={setSenha}
                                        ></TextInput>
                                        {mensagemErro}
                                    </View>
                                </View>
                            </View>

                            <View style={Inicial_sty.buttons_container}>
                                <TouchableOpacity style={Inicial_sty.buttons_container.buttons1} onPress={authenticate}>
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
            </LinearGradient>
        </ImageBackground >

    )
}

export default Inicial;