import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import { useState, useEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import { ProximasVacinas_sty } from "../components/MyStyles/ProximasVacinas_sty";
import MyCard from "../components/MyCard/MyCard";

import contas from "../data/Contas";


// TODO: Arrumar botão de Nova Vacina quando adicionado novos cards.

const ProximasVacinas = (props) => {
    const [dataVacinacao, setDataVacinacao] = useState('');
    const [vacina, setVacina] = useState('');
    const [dose, setDose] = useState('');
    const [proxVacinacao, setProxVacinacao] = useState('');
    const [myComponents, setMyComponents] = useState([]);

    const emailUsuarioLogado = props.route.params?.emailUsuarioLogado;

    const novaVacina = () => {
        props.navigation.navigate("NovaVacina", { emailUsuarioLogado: emailUsuarioLogado });
    }

    useEffect(() => {
        console.log("Usuario logado: " + emailUsuarioLogado);

        const components = [];
        if (contas[emailUsuarioLogado]) {
            for (const vacina in contas[emailUsuarioLogado].vacinas) {
                console.log(vacina);
                const objVacina = contas[emailUsuarioLogado].vacinas[vacina];
                if (objVacina.proxVacinacao) {
                    const nomeVacinaObj = objVacina.nome;
                    const dataDoseObj = objVacina.proxVacinacao;
                    const component = <MyCard key={vacina} nomeVacina={nomeVacinaObj} data={dataDoseObj} />;
                    components.push(component);
                }
            }

            setMyComponents(components);
        }
    }, []);


    return (
        <KeyboardAvoidingView style={ProximasVacinas_sty.container.containerKeyboard}>
            <ScrollView>
                <View style={ProximasVacinas_sty.container.containerView}>
                    {myComponents}
                </View>
            </ScrollView>

            <TouchableOpacity style={ProximasVacinas_sty.buttonContainer} onPress={novaVacina}>
                <Text style={ProximasVacinas_sty.buttonText}>Nova Vacina</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView >
    )
}

export default ProximasVacinas;