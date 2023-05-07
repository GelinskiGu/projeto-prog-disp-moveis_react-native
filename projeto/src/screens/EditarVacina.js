import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, Modal } from "react-native";
import { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { TextInputMask } from "react-native-masked-text";

import { EditarVacina_sty } from "../components/MyStyles/EditarVacina_sty";

import contas from "../data/Contas";


const EditarVacina = (props) => {
    const [dataVacinacao, setDataVacinacao] = useState(props.route.params?.data);
    const [vacina, setVacina] = useState(props.route.params?.nome);
    const [dose, setDose] = useState(props.route.params?.dose);
    const [proxVacinacao, setProxVacinacao] = useState(props.route.params?.proxVacinacao);
    const [isVisible, setIsVisible] = useState(false);

    const emailUsuarioLogado = props.route.params?.emailUsuarioLogado;

    const modalYes = () => {
        setIsVisible(false);
        delete contas[emailUsuarioLogado].vacinas[vacina];
        props.navigation.pop();
        props.navigation.pop();
        props.navigation.navigate("MyDrawer", { emailUsuarioLogado: emailUsuarioLogado });
    };

    const modalCancel = () => {
        setIsVisible(false);
    };

    const salvarAlteracoes = () => {
        if (dataVacinacao && vacina && dose) {
            const vacinaAlterada = {
                nome: vacina,
                dataVacinacao: dataVacinacao,
                dose: dose,
                proxVacinacao: proxVacinacao,
            };
            if (contas[emailUsuarioLogado])
                contas[emailUsuarioLogado].vacinas[vacina] = vacinaAlterada;
        }
        props.navigation.navigate("MyDrawer", { emailUsuarioLogado: emailUsuarioLogado });
        props.navigation.pop();
        props.navigation.navigate("MyDrawer", { emailUsuarioLogado: emailUsuarioLogado });
    }

    return (
        <KeyboardAvoidingView style={EditarVacina_sty.container.containerKeyboard}>
            <ScrollView>
                <Modal
                    visible={isVisible}
                    animationType='fade'
                    transparent={true}>

                    <View style={EditarVacina_sty.modalStyle.containerView}>
                        <View style={EditarVacina_sty.modalStyle.containerModal}>
                            <View style={EditarVacina_sty.modalStyle.textContainer} >
                                <Text style={EditarVacina_sty.modalStyle.modalText}>Tem certeza que deseja remover essa vacina?</Text>
                            </View>

                            <View style={EditarVacina_sty.modalStyle.buttonsContainer}>
                                <TouchableOpacity style={EditarVacina_sty.modalStyle.buttonYes} onPress={modalYes}>
                                    <Text style={EditarVacina_sty.modalStyle.buttonText}>SIM</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={EditarVacina_sty.modalStyle.buttonCancel} onPress={modalCancel}>
                                    <Text style={EditarVacina_sty.modalStyle.buttonText}>CANCELAR</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                <View style={EditarVacina_sty.container.containerView}>
                    <View style={EditarVacina_sty.containerInputs}>
                        <Text style={EditarVacina_sty.text}>Data de vacinação</Text>
                        <View style={EditarVacina_sty.containerDate}>
                            <TextInputMask
                                type={'datetime'}
                                options={{
                                    format: 'DD/MM/YYYY'
                                }} label={'DataVacinacao'} style={EditarVacina_sty.inputs} value={dataVacinacao} onChangeText={setDataVacinacao}></TextInputMask>
                            <Image source={require('../../assets/images/icon.png')} style={EditarVacina_sty.dateIcon} />
                        </View>
                    </View>
                    <View style={EditarVacina_sty.containerInputs}>
                        <Text style={EditarVacina_sty.text}>Vacina</Text>
                        <TextInput label={'Vacina'} style={EditarVacina_sty.inputs} value={vacina} onChangeText={setVacina}></TextInput>
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
                                }} label={'ProximaVacinacao'} style={EditarVacina_sty.inputs} value={proxVacinacao} onChangeText={setProxVacinacao}></TextInputMask>
                            <Image source={require('../../assets/images/icon.png')} style={EditarVacina_sty.dateIcon} />
                        </View>
                    </View>
                    <View style={EditarVacina_sty.containerButtons}>

                        <TouchableOpacity style={EditarVacina_sty.containerButtons.button1} onPress={salvarAlteracoes}>
                            <Text style={EditarVacina_sty.buttons.textButton}>Salvar alterações</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={EditarVacina_sty.containerButtons.button2} onPress={() => setIsVisible(true)}>
                            <Image source={require('../../assets/images/trash2.png')} style={EditarVacina_sty.trashIcon} />
                            <Text style={EditarVacina_sty.buttons.textButton}>Excluir</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    )
}

export default EditarVacina;