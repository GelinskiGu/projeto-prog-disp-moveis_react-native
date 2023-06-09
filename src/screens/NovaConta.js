import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, Button } from "react-native";
import { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-date-picker'

import { NovaConta_sty } from "../components/MyStyles/NovaConta_sty";
import contas from "../data/Contas";


// ** Layout Finalizado **

const NovaConta = (props) => {
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [data, setData] = useState(new Date());
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaRep, setSenhaRep] = useState('');
    const [margem, setMargem] = useState(0);
    const [mensagemSenha, setMensagemSenha] = useState('');
    const [placeholderDateText, setPlaceholderDateText] = useState('Selecione a data...');
    const [placeholderDateColor, setPlaceholderDateColor] = useState('#8B8B8B');
    const [open, setOpen] = useState(false);


    const cadastrarUsuario = () => {
        if (senha !== senhaRep) {
            setMargem(20);
            setMensagemSenha(<Text style={NovaConta_sty.textWrongFields}>Senha não confere!</Text>);
        }
        else {
            const pessoa = {
                nomeCompleto: nome,
                sexo: sexo,
                dataNascimento: placeholderDateText,
                email: email,
                senha: senha,
                vacinas: {},
            };
            contas[email] = pessoa;
            props.navigation.pop();
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
                        <Text style={NovaConta_sty.text}>Senha</Text>
                        <TextInput placeholder="Sua senha..." placeholderTextColor={'#8B8B8B'} secureTextEntry={true} label={'Senha'} style={NovaConta_sty.inputs} value={senha} onChangeText={setSenha}></TextInput>
                    </View>
                    <View style={NovaConta_sty.containerInputs}>
                        <Text style={[NovaConta_sty.text, { marginBottom: margem, }]}> Repetir senha</Text>
                        <View style={NovaConta_sty.containerInputWrongField}>
                            <TextInput placeholder="Repita sua senha..." placeholderTextColor={'#8B8B8B'} secureTextEntry={true} label={'SenhaRep'} style={NovaConta_sty.inputs} value={senhaRep} onChangeText={setSenhaRep}></TextInput>
                            {mensagemSenha}
                        </View>
                    </View>
                    <TouchableOpacity onPress={cadastrarUsuario} style={NovaConta_sty.button}><Text style={NovaConta_sty.button.textButton}>Cadastrar</Text></TouchableOpacity>
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