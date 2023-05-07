import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, FlatList } from "react-native";
import { useState, useEffect } from 'react';

import MyVaccines from "../components/MyVaccines/MyVaccines";
import { MinhasVacinas_sty } from "../components/MyStyles/MinhasVacinas_sty";
import contas from "../data/Contas";

const MinhasVacinas = (props) => {
    const [myComponents, setMyComponents] = useState([]);
    const [searchText, setSearchText] = useState('');

    const emailUsuarioLogado = props.route.params?.emailUsuarioLogado;

    const novaVacina = () => {
        props.navigation.navigate("NovaVacina", { emailUsuarioLogado: emailUsuarioLogado });
    }

    const filteredList = myComponents.filter((item) =>
        item.nomeVacina.toLowerCase().includes(searchText.toLowerCase())
    );

    useEffect(() => {
        const components = [];
        let id = 1;
        if (contas[emailUsuarioLogado]) {
            for (const vacina in contas[emailUsuarioLogado].vacinas) {
                const objVacina = contas[emailUsuarioLogado].vacinas[vacina];
                const nomeVacinaObj = objVacina.nome;
                const dataObj = objVacina.dataVacinacao;
                const doseObj = objVacina.dose;
                let dataDoseObj;
                if (objVacina.proxVacinacao)
                    dataDoseObj = "Próxima dose em: " + objVacina.proxVacinacao;
                else
                    dataDoseObj = "Não há próxima dose";

                const component = {
                    id: id,
                    nomeVacina: nomeVacinaObj,
                    dose: doseObj,
                    data: dataObj,
                    dataDose: dataDoseObj,
                    onPress: () => {
                        props.navigation.navigate("EditarVacina", {
                            emailUsuarioLogado: emailUsuarioLogado,
                            data: dataObj,
                            nome: nomeVacinaObj,
                            dose: doseObj,
                            proxVacinacao: objVacina.proxVacinacao,
                        });
                    }
                }
                components.push(component);
                id++;
            }

            setMyComponents(components);
        }
    }, []);

    return (
        <View style={MinhasVacinas_sty.container.containerKeyboard}>
            <ScrollView>
                <View style={MinhasVacinas_sty.container.containerView}>
                    <View style={MinhasVacinas_sty.inputContainer}>
                        <Image source={require('../../assets/images/icon_search.png')} style={MinhasVacinas_sty.icon} />
                        <TextInput placeholder="PESQUISAR VACINA..."
                            placeholderTextColor={'#8B8B8B'}
                            style={{ paddingVertical: 0, fontFamily: 'AveriaLibre-Regular', color: '#3F92C5', fontSize: 14, width: '100%' }}
                            onChangeText={(text) => setSearchText(text)}></TextInput>
                    </View>
                    <View style={MinhasVacinas_sty.container.containerMyVaccines}>
                        <FlatList data={filteredList}
                            renderItem={MyVaccines}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            scrollEnabled={false} />
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity style={MinhasVacinas_sty.buttonContainer} onPress={novaVacina}>
                <Text style={MinhasVacinas_sty.button.text}>Nova Vacina</Text>
            </TouchableOpacity>
        </View >
    )
}

export default MinhasVacinas;