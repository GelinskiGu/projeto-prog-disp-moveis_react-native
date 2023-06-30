import { View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView } from "react-native";
import { useState } from 'react';
import { LoginScreen_sty } from "../components/MyStyles/LoginScreen_sty";
import { KeyboardAvoidingView } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from "../firebase/config";
import { useDispatch } from 'react-redux'
import { reducerSetUserData } from '../../redux/userDataSlice'
import { collection, query, where, getDocs } from 'firebase/firestore';

import LinearGradient from 'react-native-linear-gradient';


const LoginScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [paddingPassword, setPaddingPassword] = useState(6);
    const [errorMessage, setErrorMessage] = useState('');

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
                setErrorMessage('');
                setPaddingPassword(6);

                updateUserDataRedux().then(() => {
                    props.navigation.navigate("MyDrawer");
                }).catch((error) => {
                    console.log("Erro ao atualizar usuário no Redux: " + JSON.stringify(error));
                });

            })
            .catch((error) => {
                console.log("Falha ao autenticar o usuário: " + JSON.stringify(error))
                setPaddingPassword(24);
                if (error.code === 'auth/user-not-found') {
                    setErrorMessage(<Text style={LoginScreen_sty.login.messageErrorView.textMessageError}>E-mail não cadastrado.</Text>);
                }
                else if (error.code === 'auth/wrong-password') {
                    setErrorMessage(<Text style={LoginScreen_sty.login.messageErrorView.textMessageError}>Senha incorreta.</Text>);
                }
                else if (error.code === 'auth/invalid-email') {
                    setErrorMessage(<Text style={LoginScreen_sty.login.messageErrorView.textMessageError}>E-mail inválido.</Text>);
                }
                else if (error.code === 'auth/too-many-requests') {
                    setErrorMessage(<Text style={LoginScreen_sty.login.messageErrorView.textMessageError}>Muitas tentativas. Tente novamente mais tarde.</Text>);
                }
                else if (error.code === 'auth/network-request-failed') {
                    setErrorMessage(<Text style={LoginScreen_sty.login.messageErrorView.textMessageError}>Sem conexão com a internet.</Text>);
                }
                else {
                    setErrorMessage(<Text style={LoginScreen_sty.login.messageErrorView.textMessageError}>Erro.</Text>);
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
                <KeyboardAvoidingView style={LoginScreen_sty.container.keyboard} behavior="height">
                    <ScrollView>
                        <View style={LoginScreen_sty.container}>
                            <View style={LoginScreen_sty.header}>
                                <ImageBackground source={require('../../assets/images/icon-vaccine.png')} style={LoginScreen_sty.header.headerIcon} />
                                <Text style={LoginScreen_sty.header.header_text}>MyHealth</Text>
                            </View>

                            <View style={LoginScreen_sty.text}>
                                <Text style={LoginScreen_sty.text.text_text}>Controle as suas vacinas e fique seguro</Text>
                            </View>

                            <View style={LoginScreen_sty.login}>
                                <View style={LoginScreen_sty.login.login_views}>
                                    <Text style={LoginScreen_sty.login.login_text}>E-mail</Text>
                                    <TextInput
                                        keyboardType="email-address"
                                        placeholder='Digite o e-mail de sua conta...'
                                        placeholderTextColor={'#8B8B8B'}
                                        label={'Email'}
                                        style={LoginScreen_sty.login.login_box}
                                        value={email}
                                        onChangeText={setEmail}></TextInput>
                                </View>
                                <View style={LoginScreen_sty.login.login_views}>
                                    <Text style={[LoginScreen_sty.login.login_text, { paddingBottom: paddingPassword }]}>Senha</Text>
                                    <View style={LoginScreen_sty.login.messageErrorView}>
                                        <TextInput
                                            placeholder='Digite a senha de sua conta...'
                                            placeholderTextColor={'#8B8B8B'}
                                            secureTextEntry={true}
                                            label={'Senha'}
                                            style={LoginScreen_sty.login.messageErrorView.login_box}
                                            value={password}
                                            onChangeText={setPassword}
                                        ></TextInput>
                                        {errorMessage}
                                    </View>
                                </View>
                            </View>

                            <View style={LoginScreen_sty.buttons_container}>
                                <TouchableOpacity style={LoginScreen_sty.buttons_container.buttons1} onPress={authenticate}>
                                    <Text style={LoginScreen_sty.buttons_container.textButton1}>Entrar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={LoginScreen_sty.buttons_container.buttons2} onPress={() => { props.navigation.navigate("NovaConta") }}>
                                    <Text style={LoginScreen_sty.buttons_container.textButton1}>Criar minha conta</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={LoginScreen_sty.buttons_container.buttons3} onPress={() => props.navigation.navigate("RecuperarSenha")}>
                                    <Text style={LoginScreen_sty.buttons_container.textButton2}>Esqueci minha senha</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </LinearGradient>
        </ImageBackground >

    )
}

export default LoginScreen;