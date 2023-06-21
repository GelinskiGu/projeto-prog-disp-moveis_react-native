import { View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView } from "react-native";
import { useState, useEffect } from 'react';
import { Inicial_sty } from "../components/MyStyles/Inicial_sty";
import { KeyboardAvoidingView } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from "../firebase/config";
import { useDispatch } from 'react-redux'
import { reducerSetUserData } from '../../redux/userDataSlice'
import { collection, query, where, getDocs } from 'firebase/firestore';

import LinearGradient from 'react-native-linear-gradient';


const Inicial = (props) => {
    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');
    const [paddingSenha, setPaddingSenha] = useState(6);
    const [mensagemErro, setMensagemErro] = useState('');

    const dispatch = useDispatch()

    const updateUserDataRedux = async () => {
        const usersCollectionRef = collection(db, "users");
        const q = query(usersCollectionRef, where("email", "==", email));

        const doc = await getDocs(q);
        const userData = doc.docs[0].data();

        const userId = doc.docs[0].id;
        const name = userData.fullName;
        const birthDate = userData.birthDate.toDate().toDateString();
        const birthDateFormatted = userData.birthDateFormatted;
        const gender = userData.gender;

        dispatch(reducerSetUserData({
            userLoggedId: userId,
            name: name,
            email: email,
            birthDate: birthDate,
            birthDateFormatted: birthDateFormatted,
            gender: gender
        }));

        console.log("Atualizado!");

    }

    const authenticate = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userLogged) => {
                console.log("Usuário autenticado com sucesso: " + JSON.stringify(userLogged))
                setMensagemErro('');
                setPaddingSenha(6);

                updateUserDataRedux().then(() => {
                    props.navigation.navigate("MyDrawer");
                }).catch((error) => {
                    console.log("Erro ao atualizar usuário no Redux: " + JSON.stringify(error));
                });

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