import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-date-picker'

import { NovaVacina_sty } from "../components/MyStyles/NovaVacina_sty";
import { EditarVacina_sty } from "../components/MyStyles/EditarVacina_sty";
import contas from "../data/Contas";



const NovaVacina = (props) => {
    const [dataVacinacao, setDataVacinacao] = useState(new Date());
    const [vacina, setVacina] = useState('');
    const [dose, setDose] = useState('');
    const [proxVacinacao, setProxVacinacao] = useState(new Date());
    const [placeholderDateTextDataVacinacao, setPlaceholderDateTextDataVacinacao] = useState('Data da vacina...');
    const [placeholderDateTextProxVacinacao, setPlaceholderDateTextProxVacinacao] = useState('Próxima vacina...');
    const [placeholderDateColorDataVacinacao, setPlaceholderDateColorDataVacinacao] = useState('#8B8B8B');
    const [placeholderDateColorProxVacinacao, setPlaceholderDateColorProxVacinacao] = useState('#8B8B8B');
    const [openDataVacinacao, setOpenDataVacinacao] = useState(false);
    const [openProxVacinacao, setOpenProxVacinacao] = useState(false);

    const emailUsuarioLogado = props.route.params?.emailUsuarioLogado;

    const cadastrar = () => {
        if (dataVacinacao && vacina && dose) {
            const vacinaCriada = {
                nome: vacina,
                dataVacinacao: placeholderDateTextDataVacinacao,
                dose: dose,
                proxVacinacao: placeholderDateTextProxVacinacao,
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
                            <TouchableOpacity
                                onPress={() => setOpenDataVacinacao(true)}
                                style={NovaVacina_sty.inputs}
                            ><Text style={[NovaVacina_sty.placeholderText, { color: placeholderDateColorDataVacinacao }]}>{placeholderDateTextDataVacinacao}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setOpenDataVacinacao(true)}>
                                <Image source={require('../../assets/images/icon.png')} style={NovaVacina_sty.image} />
                            </TouchableOpacity>
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
                            <TouchableOpacity
                                onPress={() => setOpenProxVacinacao(true)}
                                style={NovaVacina_sty.inputs}
                            ><Text style={[NovaVacina_sty.placeholderText, { color: placeholderDateColorProxVacinacao }]}>{placeholderDateTextProxVacinacao}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setOpenProxVacinacao(true)}>
                                <Image source={require('../../assets/images/icon.png')} style={NovaVacina_sty.image} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={cadastrar} style={NovaVacina_sty.buttons.button2}>
                        <Text style={NovaVacina_sty.buttons.textButton}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

                <DatePicker
                    modal
                    open={openDataVacinacao}
                    date={dataVacinacao}
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
                        setOpenDataVacinacao(false)
                        setPlaceholderDateTextDataVacinacao(`${formattedDay}/${formattedMonth}/${year}`)
                        setPlaceholderDateColorDataVacinacao("#419ED7")
                        setDataVacinacao(data)
                    }}
                    onCancel={() => {
                        setOpenDataVacinacao(false)
                    }}
                />

                <DatePicker
                    modal
                    open={openProxVacinacao}
                    date={dataVacinacao}
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
                        setOpenProxVacinacao(false)
                        setPlaceholderDateTextProxVacinacao(`${formattedDay}/${formattedMonth}/${year}`)
                        setPlaceholderDateColorProxVacinacao("#419ED7")
                        setDataVacinacao(data)
                    }}
                    onCancel={() => {
                        setOpenProxVacinacao(false)
                    }}
                />

            </ScrollView>
        </KeyboardAvoidingView >
    )
}

export default NovaVacina;