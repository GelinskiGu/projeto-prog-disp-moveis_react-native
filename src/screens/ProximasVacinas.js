import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useState, useEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import { ProximasVacinas_sty } from "../components/MyStyles/ProximasVacinas_sty";
import MyCard from "../components/MyCard/MyCard";

import contas from "../data/Contas";



const ProximasVacinas = (props) => {
    const [myComponents, setMyComponents] = useState([]);

    const emailUsuarioLogado = props.route.params?.emailUsuarioLogado;

    const novaVacina = () => {
        props.navigation.navigate("NovaVacina", { emailUsuarioLogado: emailUsuarioLogado });
    }

    useEffect(() => {
        const components = [];
        let id = 0;
        if (contas[emailUsuarioLogado]) {
            for (const vacina in contas[emailUsuarioLogado].vacinas) {
                const objVacina = contas[emailUsuarioLogado].vacinas[vacina];
                if (objVacina.proxVacinacao) {
                    const nomeVacinaObj = objVacina.nome;
                    const dataDoseObj = objVacina.proxVacinacao;
                    const dataObj = objVacina.dataVacinacao;
                    const doseObj = objVacina.dose;
                    const component = <MyCard
                        key={id}
                        nomeVacina={nomeVacinaObj}
                        data={dataDoseObj}
                        onPress={() => {
                            props.navigation.navigate("EditarVacina", {
                                emailUsuarioLogado: emailUsuarioLogado,
                                data: dataObj,
                                nome: nomeVacinaObj,
                                dose: doseObj,
                                proxVacinacao: objVacina.proxVacinacao,
                            });
                        }}
                    />;
                    components.push(component);
                    id++;
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