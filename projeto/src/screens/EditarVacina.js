import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import { useState, useEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { EditarVacina_sty } from "../components/EditarVacina_sty";

// TODO: Colocar icone de data.

const EditarVacina = () => {
    const [dataVacinacao, setDataVacinacao] = useState('11/08/2022');
    const [vacina, setVacina] = useState('Hepatite B');
    const [dose, setDose] = useState('dose1');
    const [proxVacinacao, setProxVacinacao] = useState('11/08/2023');


    return (
        <KeyboardAvoidingView style={EditarVacina_sty.container.containerKeyboard}>
            <ScrollView>
                <View style={EditarVacina_sty.container.containerView}>
                    <View style={EditarVacina_sty.containerInputs}>
                        <Text style={EditarVacina_sty.text}>Data de Vacinação</Text>
                        <TextInput label={'DataVacinacao'} style={EditarVacina_sty.inputs} value={dataVacinacao} onChangeText={setDataVacinacao}></TextInput>
                    </View>
                    <View style={EditarVacina_sty.containerInputs}>
                        <Text style={EditarVacina_sty.text}>Vacina</Text>
                        <TextInput label={'Vacina'} style={EditarVacina_sty.inputs} value={vacina} onChangeText={setVacina}></TextInput>
                    </View>
                    <View style={EditarVacina_sty.containerRadioButton}>
                        <View style={{}}>
                            <Text style={EditarVacina_sty.text.labelRadioButtonText}>Dose</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="dose1"
                                status={dose == 'dose1' ? 'checked' : 'unchecked'}
                                onPress={() => setDose('dose1')}
                                color="#419ED7"
                            />
                            <Text style={EditarVacina_sty.text.textRadioButton}>1a. dose</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 0 }}>
                            <RadioButton
                                value="dose2"
                                status={dose == 'dose2' ? 'checked' : 'unchecked'}
                                onPress={() => setDose('dose2')}
                                color="#419ED7"
                            />
                            <Text style={EditarVacina_sty.text.textRadioButton}>2a. dose</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 127 }}>
                            <RadioButton
                                value="dose3"
                                status={dose == 'dose3' ? 'checked' : 'unchecked'}
                                onPress={() => setDose('dose3')}
                                color="#419ED7"
                            />
                            <Text style={EditarVacina_sty.text.textRadioButton}>3a. dose</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="doseUnica"
                                status={dose == 'doseUnica' ? 'checked' : 'unchecked'}
                                onPress={() => setDose('doseUnica')}
                                color="#419ED7"
                            />
                            <Text style={EditarVacina_sty.text.textRadioButton}>Dose única</Text>
                        </View>
                    </View>
                    <View style={EditarVacina_sty.containerInputs}>
                        <Text style={[EditarVacina_sty.text, { marginRight: 10, alignSelf: 'flex-start', marginTop: 3 }]}>Comprovante</Text>
                        <View style={EditarVacina_sty.buttons.buttonContainer}>
                            <TouchableOpacity style={EditarVacina_sty.buttons.button1}><Text style={EditarVacina_sty.buttons.textButton}>Selecionar imagem...</Text></TouchableOpacity>
                            <Image source={require('../../assets/images/image-comprovante.png')} style={{ width: '100%', marginBottom: -25 }} resizeMode="contain"></Image>
                        </View>
                    </View>
                    <View style={EditarVacina_sty.containerInputs}>
                        <Text style={EditarVacina_sty.text}>Próxima vacinação</Text>
                        <TextInput label={'ProximaVacina'} style={EditarVacina_sty.inputs} value={proxVacinacao} onChangeText={setProxVacinacao}></TextInput>
                    </View>
                    <View style={EditarVacina_sty.buttons.button2}>
                        <TouchableOpacity><Text style={EditarVacina_sty.buttons.textButton}>Salvar alterações</Text></TouchableOpacity>
                    </View>
                    <View style={EditarVacina_sty.buttons.button3}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                <Image source={require('../../assets/images/trash2.png')} style={EditarVacina_sty.trashIcon} resizeMode="contain" />
                                <Text style={EditarVacina_sty.buttons.textButton}>Excluir</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    )
}

export default EditarVacina;