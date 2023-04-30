import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useState, useEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { NovaVacina_sty } from "../components/NovaVacina_sty";

const NovaVacina = () => {
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [data, setData] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaRep, setSenhaRep] = useState('');


    return (
        <KeyboardAvoidingView style={NovaVacina_sty.container.containerKeyboard}>
            <ScrollView>
                <View style={NovaVacina_sty.container.containerView}>
                    <View style={NovaVacina_sty.containerInputs}>
                        <Text style={NovaVacina_sty.text}>Data de Vacinação</Text>
                        <TextInput label={'Email'} style={NovaVacina_sty.inputs} value={nome} onChangeText={setNome}></TextInput>
                    </View>
                    <View style={NovaVacina_sty.containerInputs}>
                        <Text style={NovaVacina_sty.text}>Vacina</Text>
                        <TextInput label={'Email'} style={NovaVacina_sty.inputs} value={nome} onChangeText={setNome}></TextInput>
                    </View>
                    <View style={NovaVacina_sty.containerInputs}>
                        <View style={{ marginRight: 20, marginLeft: 50 }}>
                            <Text style={NovaVacina_sty.text}>Dose</Text>
                        </View>
                        <View style={NovaVacina_sty.containerInputs}>
                            <RadioButton
                                value="masculino"
                                status={sexo == 'masculino' ? 'checked' : 'unchecked'}
                                onPress={() => setSexo('masculino')}
                                color="#419ED7"
                            />
                            <Text style={{}}>Masculino</Text>
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
                            <Text style={{}}>Feminino</Text>
                        </View>
                    </View>
                    <View style={NovaVacina_sty.containerInputs}>
                        <Text style={NovaVacina_sty.text}>Comprovante</Text>
                        <TextInput label={'Email'} style={NovaVacina_sty.inputs} value={nome} onChangeText={setNome}></TextInput>
                    </View>
                    <View style={NovaVacina_sty.containerInputs}>
                        <Text style={NovaVacina_sty.text}>Próxima vacinação</Text>
                        <TextInput label={'Email'} style={NovaVacina_sty.inputs} value={nome} onChangeText={setNome}></TextInput>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default NovaVacina;