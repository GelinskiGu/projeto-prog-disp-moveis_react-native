import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import { useState, useEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { NovaVacina_sty } from "../components/NovaVacina_sty";
import contas from "../data/Contas";


// TODO: Colocar icone de data

const NovaVacina = (props) => {
    const [dataVacinacao, setDataVacinacao] = useState('');
    const [vacina, setVacina] = useState('');
    const [dose, setDose] = useState('');
    const [proxVacinacao, setProxVacinacao] = useState('');

    const cadastrar = () => {
        props.navigation.navigate("MinhasVacinas");
        contas["Gelinski"] = {
            nome: "teste",
        }
        console.log(contas);
    }

    return (
        <KeyboardAvoidingView style={NovaVacina_sty.container.containerKeyboard}>
            <ScrollView>
                <View style={NovaVacina_sty.container.containerView}>
                    <View style={NovaVacina_sty.containerInputs}>
                        <Text style={NovaVacina_sty.text}>Data de vacinação</Text>
                        <TextInput label={'DataVacinacao'} style={[NovaVacina_sty.inputs, { flex: 40, marginRight: 107 }]} value={dataVacinacao} onChangeText={setDataVacinacao}></TextInput>
                        <Image source={require('../../assets/images/icon.png')} style={{ marginRight: 113, marginLeft: -132, width: 20, height: 20 }} />
                    </View>
                    <View style={NovaVacina_sty.containerInputs}>
                        <Text style={NovaVacina_sty.text}>Vacina</Text>
                        <TextInput label={'Vacina'} style={NovaVacina_sty.inputs} value={vacina} onChangeText={setVacina}></TextInput>
                    </View>
                    <View style={NovaVacina_sty.containerRadioButton}>
                        <View style={{}}>
                            <Text style={{
                                color: '#FFFFFF',
                                fontSize: 16,
                                fontFamily: 'AveriaLibre-Regular',
                                marginLeft: 68,
                                paddingRight: 5,
                            }}>Dose</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="dose1"
                                status={dose == 'dose1' ? 'checked' : 'unchecked'}
                                onPress={() => setDose('dose1')}
                                color="#419ED7"
                            />
                            <Text style={NovaVacina_sty.textRadioButton}>1a. dose</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 0 }}>
                            <RadioButton
                                value="dose2"
                                status={dose == 'dose2' ? 'checked' : 'unchecked'}
                                onPress={() => setDose('dose2')}
                                color="#419ED7"
                            />
                            <Text style={NovaVacina_sty.textRadioButton}>2a. dose</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 127 }}>
                            <RadioButton
                                value="dose3"
                                status={dose == 'dose3' ? 'checked' : 'unchecked'}
                                onPress={() => setDose('dose3')}
                                color="#419ED7"
                            />
                            <Text style={NovaVacina_sty.textRadioButton}>3a. dose</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="doseUnica"
                                status={dose == 'doseUnica' ? 'checked' : 'unchecked'}
                                onPress={() => setDose('doseUnica')}
                                color="#419ED7"
                            />
                            <Text style={NovaVacina_sty.textRadioButton}>Dose única</Text>
                        </View>
                    </View>
                    <View style={NovaVacina_sty.containerInputs}>
                        <Text style={[NovaVacina_sty.text, { marginRight: 10, alignSelf: 'flex-start', marginTop: 3 }]}>Comprovante</Text>
                        <View style={NovaVacina_sty.buttons.buttonContainer}>
                            <TouchableOpacity style={NovaVacina_sty.buttons.button1}><Text style={NovaVacina_sty.buttons.textButton}>Selecionar imagem...</Text></TouchableOpacity>
                            <Image source={require('../../assets/images/image-comprovante.png')} style={{ width: '100%', marginBottom: -25 }} resizeMode="contain"></Image>
                        </View>
                    </View>
                    <View style={NovaVacina_sty.containerInputs}>
                        <Text style={NovaVacina_sty.text}>Próxima vacinação</Text>
                        <TextInput
                            label={'ProximaVacinacao'}
                            style={[NovaVacina_sty.inputs, { flex: 40, marginRight: 107 }]}
                            value={proxVacinacao}
                            onChangeText={setProxVacinacao}>
                        </TextInput>
                        <Image source={require('../../assets/images/icon.png')} style={{ marginRight: 113, marginLeft: -132, width: 20, height: 20 }} />
                    </View>
                    <View style={NovaVacina_sty.buttons.button2}>
                        <TouchableOpacity onPress={cadastrar}>
                            <Text style={NovaVacina_sty.buttons.textButton}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    )
}

export default NovaVacina;