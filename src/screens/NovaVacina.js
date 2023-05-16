import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { TextInputMask } from "react-native-masked-text";

import { NovaVacina_sty } from "../components/MyStyles/NovaVacina_sty";
import { EditarVacina_sty } from "../components/MyStyles/EditarVacina_sty";
import contas from "../data/Contas";



const NovaVacina = (props) => {
    const [dataVacinacao, setDataVacinacao] = useState('');
    const [vacina, setVacina] = useState('');
    const [dose, setDose] = useState('');
    const [proxVacinacao, setProxVacinacao] = useState('');

    const emailUsuarioLogado = props.route.params?.emailUsuarioLogado;

    const cadastrar = () => {
        if (dataVacinacao && vacina && dose) {
            const vacinaCriada = {
                nome: vacina,
                dataVacinacao: dataVacinacao,
                dose: dose,
                proxVacinacao: proxVacinacao,
            };
            if (contas[emailUsuarioLogado])
                contas[emailUsuarioLogado].vacinas[vacina] = vacinaCriada;
        }
        props.navigation.navigate("MyDrawer", { emailUsuarioLogado: emailUsuarioLogado });
        props.navigation.pop();
        props.navigation.navigate("MyDrawer", { emailUsuarioLogado: emailUsuarioLogado });
    }

    return (
        <KeyboardAvoidingView style={EditarVacina_sty.container.containerKeyboard}>
            <ScrollView>
                <View style={EditarVacina_sty.container.containerView}>
                    <View style={EditarVacina_sty.containerInputs}>
                        <Text style={EditarVacina_sty.text}>Data de vacinação</Text>
                        <View style={EditarVacina_sty.containerDate}>
                            <TextInputMask
                                type={'datetime'}
                                options={{
                                    format: 'DD/MM/YYYY'
                                }}
                                placeholder="Data da vacina..."
                                placeholderTextColor={'#8B8B8B'}
                                label={'DataVacinacao'}
                                style={EditarVacina_sty.inputs}
                                value={dataVacinacao}
                                onChangeText={setDataVacinacao}></TextInputMask>
                            <Image source={require('../../assets/images/icon.png')} style={EditarVacina_sty.dateIcon} />
                        </View>
                    </View>
                    <View style={EditarVacina_sty.containerInputs}>
                        <Text style={EditarVacina_sty.text}>Vacina</Text>
                        <TextInput placeholder="Nome da vacina tomada..." placeholderTextColor={'#8B8B8B'} label={'Vacina'} style={EditarVacina_sty.inputs} value={vacina} onChangeText={setVacina}></TextInput>
                    </View>
                    <View style={EditarVacina_sty.containerRadioButton}>
                        <View style={EditarVacina_sty.textRadioButtonContainer}>
                            <Text style={EditarVacina_sty.textRadioButton}>Dose</Text>
                        </View>
                        <View style={EditarVacina_sty.buttonsGroup}>
                            <View style={EditarVacina_sty.radioButton}>
                                <RadioButton
                                    value="dose1"
                                    status={dose == '1a. dose' ? 'checked' : 'unchecked'}
                                    onPress={() => setDose('1a. dose')}
                                    color="#419ED7"
                                />
                                <Text style={EditarVacina_sty.textRadioButton}>1a. dose</Text>
                            </View>
                            <View style={EditarVacina_sty.radioButton}>
                                <RadioButton
                                    value="dose2"
                                    status={dose == '2a. dose' ? 'checked' : 'unchecked'}
                                    onPress={() => setDose('2a. dose')}
                                    color="#419ED7"
                                />
                                <Text style={EditarVacina_sty.textRadioButton}>2a. dose</Text>
                            </View>
                            <View style={EditarVacina_sty.radioButton}>
                                <RadioButton
                                    value="dose3"
                                    status={dose == '3a. dose' ? 'checked' : 'unchecked'}
                                    onPress={() => setDose('3a. dose')}
                                    color="#419ED7"
                                />
                                <Text style={EditarVacina_sty.textRadioButton}>3a. dose</Text>
                            </View>
                            <View style={EditarVacina_sty.radioButton}>
                                <RadioButton
                                    value="doseUnica"
                                    status={dose == 'Dose única' ? 'checked' : 'unchecked'}
                                    onPress={() => setDose('Dose única')}
                                    color="#419ED7"
                                />
                                <Text style={EditarVacina_sty.textRadioButton}>Dose única</Text>
                            </View>
                        </View>
                    </View>
                    <View style={EditarVacina_sty.containerInputs}>
                        <Text style={[EditarVacina_sty.text, { alignSelf: 'flex-start', paddingTop: 2 }]}>Comprovante</Text>
                        <View style={EditarVacina_sty.buttons.buttonContainer}>
                            <TouchableOpacity style={EditarVacina_sty.buttons.button1}><Text style={EditarVacina_sty.buttons.textButton}>Selecionar imagem...</Text></TouchableOpacity>
                            <Image source={require('../../assets/images/image-comprovante.png')} style={EditarVacina_sty.proofVaccineImage}></Image>
                        </View>
                    </View>
                    <View style={[EditarVacina_sty.containerInputs, { marginRight: 5 }]}>
                        <Text style={EditarVacina_sty.text}>Próxima vacinação</Text>
                        <View style={EditarVacina_sty.containerDate}>
                            <TextInputMask
                                type={'datetime'}
                                options={{
                                    format: 'DD/MM/YYYY'
                                }} placeholder="Próxima dose..." placeholderTextColor={'#8B8B8B'} label={'ProximaVacinacao'} style={EditarVacina_sty.inputs} value={proxVacinacao} onChangeText={setProxVacinacao}></TextInputMask>
                            <Image source={require('../../assets/images/icon.png')} style={EditarVacina_sty.dateIcon} />
                        </View>
                    </View>
                    <TouchableOpacity onPress={cadastrar} style={NovaVacina_sty.buttons.button2}>
                        <Text style={NovaVacina_sty.buttons.textButton}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    )
}

export default NovaVacina;