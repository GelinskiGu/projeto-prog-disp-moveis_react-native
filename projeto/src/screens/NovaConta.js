import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useState, useEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { NovaConta_sty } from "../components/NovaConta_sty";

// TODO: criar useEffect para mostrar senha nao confere e estilizar esse texto.
const NovaConta = () => {
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [data, setData] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaRep, setSenhaRep] = useState('');

    let mensagemSenha = null;
    if (senha !== senhaRep) {
        mensagemSenha = <Text>Senha não confere!</Text>;
    }
    return (
        <KeyboardAvoidingView style={NovaConta_sty.container.keyboard}>
            <ScrollView>
                <View style={NovaConta_sty.container}>
                    <View style={[NovaConta_sty.containerInputs, { marginTop: -160, }]}>
                        <Text style={NovaConta_sty.text}>Nome completo</Text>
                        <TextInput label={'Email'} style={NovaConta_sty.inputs} value={nome} onChangeText={setNome}></TextInput>
                    </View>
                    <View style={NovaConta_sty.radioButtonGroup} behavior="height">
                        <View style={{ marginRight: 20, marginLeft: 50 }}>
                            <Text style={NovaConta_sty.text.labelRadioButton}>Sexo</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="masculino"
                                status={sexo == 'masculino' ? 'checked' : 'unchecked'}
                                onPress={() => setSexo('masculino')}
                                color="#419ED7"
                            />
                            <Text style={NovaConta_sty.text.textRadioButton}>Masculino</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="feminino"
                                status={sexo == 'feminino' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setSexo('feminino')

                                    console.log(sexo)
                                }}
                                color="#419ED7"
                            />
                            <Text style={NovaConta_sty.text.textRadioButton}>Feminino</Text>
                        </View>
                    </View>
                    <View style={NovaConta_sty.containerInputs}>
                        <Text style={NovaConta_sty.text}>Data nascimento</Text>
                        <TextInput label={'DataNascimento'} style={NovaConta_sty.inputs} value={data} onChangeText={setData}></TextInput>
                    </View>
                    <View style={NovaConta_sty.containerInputs}>
                        <Text style={NovaConta_sty.text}>E-mail</Text>
                        <TextInput label={'Email'} style={NovaConta_sty.inputs} value={email} onChangeText={setEmail}></TextInput>
                    </View>
                    <View style={NovaConta_sty.containerInputs}>
                        <Text style={NovaConta_sty.text}>Senha</Text>
                        <TextInput secureTextEntry={true} label={'Senha'} style={NovaConta_sty.inputs} value={senha} onChangeText={setSenha}></TextInput>
                    </View>
                    <View style={NovaConta_sty.containerInputs}>
                        <Text style={NovaConta_sty.text}>Repetir senha</Text>
                        <TextInput secureTextEntry={true} label={'SenhaRep'} style={NovaConta_sty.inputs} value={senhaRep} onChangeText={setSenhaRep}></TextInput>
                        {mensagemSenha}
                    </View>
                    <View style={NovaConta_sty.button}>
                        <TouchableOpacity ><Text style={NovaConta_sty.button.textButton}>Cadastrar</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default NovaConta;