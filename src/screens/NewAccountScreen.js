import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-date-picker'

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

import { NewAccountScreen_sty } from "../components/MyStyles/NewAccountScreen_sty";

// TODO: Colocar um messageEmail para quando o email já estiver cadastrado

const NewAccountScreen = (props) => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [date, setDate] = useState(new Date());
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRep, setPasswordRep] = useState('');
    const [margin, setMargin] = useState(0);
    const [passwordMessage, setPasswordMessage] = useState('');
    const [placeholderDateText, setPlaceholderDateText] = useState('Selecione a data...');
    const [placeholderDateColor, setPlaceholderDateColor] = useState('#8B8B8B');
    const [open, setOpen] = useState(false);

    const createUser = () => {
        if (password !== passwordRep) {
            setMargin(20);
            setPasswordMessage(<Text style={NewAccountScreen_sty.textWrongFields}>Senha não confere!</Text>);
        }
        else if (name == "" || gender == "" || email == "" || password == "" || passwordRep == "") {
            setMargin(20);
            setPasswordMessage(<Text style={NewAccountScreen_sty.textWrongFields}>Preencha todos os campos!</Text>);
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log("Usuário criado com sucesso: " + JSON.stringify(userCredential));

                    const dbCollection = collection(db, "users");
                    const user = {
                        fullName: name,
                        gender: gender,
                        birthDateFormatted: placeholderDateText,
                        birthDate: date,
                        email: email,
                    };
                    return addDoc(dbCollection, user);
                })
                .then(() => {
                    console.log("Usuário inserido com sucesso!");
                    props.navigation.pop();
                })
                .catch((error) => {
                    console.log("Erro ao criar usuário: " + JSON.stringify(error));
                    setMargin(20);
                    if (error.code == "auth/weak-password")
                        setPasswordMessage(<Text style={NewAccountScreen_sty.textWrongFields}>Senha fraca!</Text>);
                    else if (error.code == "auth/email-already-in-use")
                        setPasswordMessage(<Text style={NewAccountScreen_sty.textWrongFields}>Email já cadastrado!</Text>);
                    else if (error.code == "auth/invalid-email")
                        setPasswordMessage(<Text style={NewAccountScreen_sty.textWrongFields}>Email inválido!</Text>);
                    else
                        setPasswordMessage(<Text style={NewAccountScreen_sty.textWrongFields}>Erro ao criar usuário!</Text>);
                });
        }
    }


    return (
        <KeyboardAvoidingView style={NewAccountScreen_sty.container.keyboard}>
            <ScrollView>
                <View style={NewAccountScreen_sty.container}>
                    <View style={[NewAccountScreen_sty.containerInputs, { marginTop: 0, }]}>
                        <Text style={NewAccountScreen_sty.text}>Nome completo</Text>
                        <TextInput placeholder="Seu nome..." placeholderTextColor={'#8B8B8B'} label={'NomeCompleto'} style={NewAccountScreen_sty.inputs} value={name} onChangeText={setName}></TextInput>
                    </View>
                    <View style={NewAccountScreen_sty.radioButtonGroup}>
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
                                status={gender == 'masculino' ? 'checked' : 'unchecked'}
                                onPress={() => setGender('masculino')}
                                color="#419ED7"
                            />
                            <Text style={NewAccountScreen_sty.textRadioButton}>Masculino</Text>
                        </View>
                        <View style={{ flex: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="feminino"
                                status={gender == 'feminino' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setGender('feminino')

                                    console.log(gender)
                                }}
                                color="#419ED7"
                            />
                            <Text style={NewAccountScreen_sty.textRadioButton}>Feminino</Text>
                        </View>
                    </View>
                    <View style={NewAccountScreen_sty.containerInputs}>
                        <Text style={NewAccountScreen_sty.text}>Data nascimento</Text>
                        <View style={NewAccountScreen_sty.dataContainer}>
                            <TouchableOpacity
                                onPress={() => setOpen(true)}
                                style={NewAccountScreen_sty.inputs}
                            ><Text style={[NewAccountScreen_sty.placeholderText, { color: placeholderDateColor }]}>{placeholderDateText}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setOpen(true)}>
                                <Image source={require('../../assets/images/icon.png')} style={NewAccountScreen_sty.image} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={NewAccountScreen_sty.containerInputs}>
                        <Text style={NewAccountScreen_sty.text}>E-mail</Text>
                        <TextInput keyboardType="email-address" placeholder="Seu e-mail..." placeholderTextColor={'#8B8B8B'} label={'Email'} style={NewAccountScreen_sty.inputs} value={email} onChangeText={setEmail}></TextInput>
                    </View>
                    <View style={NewAccountScreen_sty.containerInputs}>
                        <Text style={NewAccountScreen_sty.text}>Senha</Text>
                        <TextInput placeholder="Sua senha..." placeholderTextColor={'#8B8B8B'} secureTextEntry={true} label={'Password'} style={NewAccountScreen_sty.inputs} value={password} onChangeText={setPassword}></TextInput>
                    </View>
                    <View style={NewAccountScreen_sty.containerInputs}>
                        <Text style={[NewAccountScreen_sty.text, { marginBottom: margin, }]}> Repetir senha</Text>
                        <View style={NewAccountScreen_sty.containerInputWrongField}>
                            <TextInput placeholder="Repita sua senha..." placeholderTextColor={'#8B8B8B'} secureTextEntry={true} label={'PasswordRep'} style={NewAccountScreen_sty.inputs} value={passwordRep} onChangeText={setPasswordRep}></TextInput>
                            {passwordMessage}
                        </View>
                    </View>
                    <TouchableOpacity onPress={createUser} style={NewAccountScreen_sty.button}><Text style={NewAccountScreen_sty.button.textButton}>Cadastrar</Text></TouchableOpacity>
                </View>
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    androidVariant="nativeAndroid"
                    mode="date"
                    locale="pt-BR"
                    title="Selecione uma data"
                    cancelText="Cancelar"
                    confirmText="Confirmar"
                    onConfirm={(date) => {
                        const day = date.getDate();
                        const month = date.getMonth() + 1;
                        const year = date.getFullYear();

                        const formattedDay = day < 10 ? `0${day}` : day;
                        const formattedMonth = month < 10 ? `0${month}` : month;
                        setOpen(false)
                        setPlaceholderDateText(`${formattedDay}/${formattedMonth}/${year}`)
                        setPlaceholderDateColor("#419ED7")
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </ScrollView>
        </KeyboardAvoidingView >
    )
}

export default NewAccountScreen;