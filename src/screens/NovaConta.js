import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, Button } from "react-native";
import { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-date-picker'

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { NovaConta_sty } from "../components/MyStyles/NovaConta_sty";
import contas from "../data/Contas";


// TODO: Colocar um messageEmail para quando o email já estiver cadastrado

const NovaConta = (props) => {
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [data, setData] = useState(new Date());
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRep, setPasswordRep] = useState('');
    const [margem, setMargem] = useState(0);
    const [mensagemPassword, setMensagemPassword] = useState('');
    const [placeholderDateText, setPlaceholderDateText] = useState('Selecione a data...');
    const [placeholderDateColor, setPlaceholderDateColor] = useState('#8B8B8B');
    const [open, setOpen] = useState(false);


    const cadastrarUsuario1 = () => {
        if (password !== passwordRep) {
            setMargem(20);
            setMensagemPassword(<Text style={NovaConta_sty.textWrongFields}>Password não confere!</Text>);
        }
        else {
            const pessoa = {
                nomeCompleto: nome,
                sexo: sexo,
                dataNascimento: placeholderDateText,
                email: email,
                password: password,
                vacinas: {},
            };
            contas[email] = pessoa;
            props.navigation.pop();
        }
    }

    const createUser = () => {
        if (password !== passwordRep) {
            setMargem(20);
            setMensagemPassword(<Text style={NovaConta_sty.textWrongFields}>Senha não confere!</Text>);
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log("Usuário criado com sucesso: " + JSON.stringify(userCredential));
                    props.navigation.pop();
                })
                .catch((error) => {
                    console.log("Erro ao criar usuário: " + JSON.stringify(error));
                    setMargem(20);
                    if (error.code == "auth/weak-password")
                        setMensagemPassword(<Text style={NovaConta_sty.textWrongFields}>Senha fraca!</Text>);
                    else if (error.code == "auth/email-already-in-use")
                        setMensagemPassword(<Text style={NovaConta_sty.textWrongFields}>Email já cadastrado!</Text>);
                    else
                        setMensagemPassword(<Text style={NovaConta_sty.textWrongFields}>Erro ao criar usuário!</Text>);
                });
        }
    }


    return (
        <KeyboardAvoidingView style={NovaConta_sty.container.keyboard}>
            <ScrollView>
                <View style={NovaConta_sty.container}>
                    <View style={[NovaConta_sty.containerInputs, { marginTop: 0, }]}>
                        <Text style={NovaConta_sty.text}>Nome completo</Text>
                        <TextInput placeholder="Seu nome..." placeholderTextColor={'#8B8B8B'} label={'NomeCompleto'} style={NovaConta_sty.inputs} value={nome} onChangeText={setNome}></TextInput>
                    </View>
                    <View style={NovaConta_sty.radioButtonGroup}>
                        <View style={{ marginRight: 0, marginLeft: 0, flex: 13 }}>
                            <Text style={{
                                color: '#FFFFFF',
                                marginRight: 0,
                                fontSize: 16,
                                fontFamily: 'AveriaLibre-Regular',
                                textAlign: 'right',
                                marginLeft: 0,
                            }}>Sexo</Text>
                        </View>
                        <View style={{ flex: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="masculino"
                                status={sexo == 'masculino' ? 'checked' : 'unchecked'}
                                onPress={() => setSexo('masculino')}
                                color="#419ED7"
                            />
                            <Text style={NovaConta_sty.textRadioButton}>Masculino</Text>
                        </View>
                        <View style={{ flex: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="feminino"
                                status={sexo == 'feminino' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setSexo('feminino')

                                    console.log(sexo)
                                }}
                                color="#419ED7"
                            />
                            <Text style={NovaConta_sty.textRadioButton}>Feminino</Text>
                        </View>
                    </View>
                    <View style={NovaConta_sty.containerInputs}>
                        <Text style={NovaConta_sty.text}>Data nascimento</Text>
                        <View style={NovaConta_sty.dataContainer}>
                            <TouchableOpacity
                                onPress={() => setOpen(true)}
                                style={NovaConta_sty.inputs}
                            ><Text style={[NovaConta_sty.placeholderText, { color: placeholderDateColor }]}>{placeholderDateText}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setOpen(true)}>
                                <Image source={require('../../assets/images/icon.png')} style={NovaConta_sty.image} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={NovaConta_sty.containerInputs}>
                        <Text style={NovaConta_sty.text}>E-mail</Text>
                        <TextInput keyboardType="email-address" placeholder="Seu e-mail..." placeholderTextColor={'#8B8B8B'} label={'Email'} style={NovaConta_sty.inputs} value={email} onChangeText={setEmail}></TextInput>
                    </View>
                    <View style={NovaConta_sty.containerInputs}>
                        <Text style={NovaConta_sty.text}>Password</Text>
                        <TextInput placeholder="Sua password..." placeholderTextColor={'#8B8B8B'} secureTextEntry={true} label={'Password'} style={NovaConta_sty.inputs} value={password} onChangeText={setPassword}></TextInput>
                    </View>
                    <View style={NovaConta_sty.containerInputs}>
                        <Text style={[NovaConta_sty.text, { marginBottom: margem, }]}> Repetir password</Text>
                        <View style={NovaConta_sty.containerInputWrongField}>
                            <TextInput placeholder="Repita sua password..." placeholderTextColor={'#8B8B8B'} secureTextEntry={true} label={'PasswordRep'} style={NovaConta_sty.inputs} value={passwordRep} onChangeText={setPasswordRep}></TextInput>
                            {mensagemPassword}
                        </View>
                    </View>
                    <TouchableOpacity onPress={createUser} style={NovaConta_sty.button}><Text style={NovaConta_sty.button.textButton}>Cadastrar</Text></TouchableOpacity>
                </View>
                <DatePicker
                    modal
                    open={open}
                    date={data}
                    androidVariant="nativeAndroid"
                    mode="date"
                    locale="pt-BR"
                    title="Selecione uma data"
                    cancelText="Cancelar"
                    confirmText="Confirmar"
                    onConfirm={(data) => {
                        const day = data.getDate();
                        const month = data.getMonth() + 1;
                        const year = data.getFullYear();

                        const formattedDay = day < 10 ? `0${day}` : day;
                        const formattedMonth = month < 10 ? `0${month}` : month;
                        setOpen(false)
                        setPlaceholderDateText(`${formattedDay}/${formattedMonth}/${year}`)
                        setPlaceholderDateColor("#419ED7")
                        setData(data)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </ScrollView>
        </KeyboardAvoidingView >
    )
}

export default NovaConta;