import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import { useState, useEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { NovaConta_sty } from "../components/NovaConta_sty";
import contas from "../data/Contas";
import { transformer } from "../../metro.config";

// TODO: Tirar clgs
// ** Layout Finalizado **

const NovaConta = (props) => {
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [data, setData] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaRep, setSenhaRep] = useState('');
    const [margem, setMargem] = useState(0);
    const [mensagemSenha, setMensagemSenha] = useState('');


    const cadastrarUsuario = () => {
        if (senha !== senhaRep) {
            setMargem(20);
            setMensagemSenha(<Text style={NovaConta_sty.textWrongFields}>Senha não confere!</Text>);
        }
        else {
            const pessoa = {
                nomeCompleto: nome,
                sexo: sexo,
                dataNascimento: data,
                email: email,
                senha: senha,
                vacinas: {},
            };
            contas[email] = pessoa;
            console.log(contas);
            props.navigation.pop();
        }
    }


    return (
        <KeyboardAvoidingView style={NovaConta_sty.container.keyboard}>
            <ScrollView>
                <View style={NovaConta_sty.container}>
                    <View style={[NovaConta_sty.containerInputs, { marginTop: 0, }]}>
                        <Text style={NovaConta_sty.text}>Nome completo</Text>
                        <TextInput placeholder="Seu nome..." placeholderTextColor='rgba(0, 0, 0, 0.4)' label={'NomeCompleto'} style={NovaConta_sty.inputs} value={nome} onChangeText={setNome}></TextInput>
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
                            <TextInput placeholder="Data de nascimento..." placeholderTextColor='rgba(0, 0, 0, 0.4)' label={'DataNascimento'} style={NovaConta_sty.inputs} value={data} onChangeText={setData}></TextInput>
                            <Image source={require('../../assets/images/icon.png')} style={NovaConta_sty.image} />
                        </View>
                    </View>
                    <View style={NovaConta_sty.containerInputs}>
                        <Text style={NovaConta_sty.text}>E-mail</Text>
                        <TextInput placeholder="Seu e-mail..." placeholderTextColor='rgba(0, 0, 0, 0.4)' label={'Email'} style={NovaConta_sty.inputs} value={email} onChangeText={setEmail}></TextInput>
                    </View>
                    <View style={NovaConta_sty.containerInputs}>
                        <Text style={NovaConta_sty.text}>Senha</Text>
                        <TextInput placeholder="Sua senha..." placeholderTextColor='rgba(0, 0, 0, 0.4)' secureTextEntry={true} label={'Senha'} style={NovaConta_sty.inputs} value={senha} onChangeText={setSenha}></TextInput>
                    </View>
                    <View style={NovaConta_sty.containerInputs}>
                        <Text style={[NovaConta_sty.text, { marginBottom: margem, }]}> Repetir senha</Text>
                        <View style={NovaConta_sty.containerInputWrongField}>
                            <TextInput placeholder="Repita sua senha..." placeholderTextColor='rgba(0, 0, 0, 0.4)' secureTextEntry={true} label={'SenhaRep'} style={NovaConta_sty.inputs} value={senhaRep} onChangeText={setSenhaRep}></TextInput>
                            {mensagemSenha}
                        </View>
                    </View>
                    <View style={NovaConta_sty.button}>
                        <TouchableOpacity onPress={cadastrarUsuario}><Text style={NovaConta_sty.button.textButton}>Cadastrar</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    )
}

export default NovaConta;