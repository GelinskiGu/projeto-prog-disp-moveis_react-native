import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, FlatList } from "react-native";
import { useState, useEffect } from 'react';

import MyVaccines from "../components/MyVaccines/MyVaccines";
import { MinhasVacinas_sty } from "../components/MyStyles/MinhasVacinas_sty";
import { useSelector } from "react-redux";

import { db } from '../firebase/config'
import { collection, query, getDocs, onSnapshot } from 'firebase/firestore';

const MinhasVacinas = (props) => {
    const [vaccinesList, setVaccinesList] = useState([])
    const [searchText, setSearchText] = useState('');


    const userId = useSelector((state) => state.user.userLoggedId);
    const name = useSelector((state) => state.user.name);
    const birthDate = useSelector((state) => state.user.birthDate);
    const gender = useSelector((state) => state.user.gender);

    console.log("Dados: " + userId + name + birthDate + gender);

    const novaVacina = () => {
        props.navigation.navigate("NovaVacina");
    }

    const filteredList = vaccinesList.filter((item) =>
        item.nome.toLowerCase().includes(searchText.toLowerCase())
    );

    useEffect(() => {
        const vaccinesCollectionRef = collection(db, "users", userId, "vaccines");

        const q = query(vaccinesCollectionRef)


        onSnapshot(q, (querySnapshot) => {
            const vaccines = [];

            querySnapshot.forEach((doc) => {
                vaccines.push({
                    id: doc.id,
                    dataVacinacao: doc.data().dataVacinacao,
                    dose: doc.data().dose,
                    nome: doc.data().nome,
                    proxVacinacao: doc.data().proxVacinacao,
                });
            })

            setVaccinesList(vaccines);
        })

        console.log(`Vacinas: ${JSON.stringify(vaccinesList)}`);

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
                        <FlatList
                            extraData={filteredList}
                            data={filteredList}
                            renderItem={({ item }) => {
                                return <MyVaccines
                                    navigation={props.navigation}
                                    id={item.id}
                                    dataVacinacao={item.dataVacinacao}
                                    dose={item.dose}
                                    nome={item.nome}
                                    proxVacinacao={item.proxVacinacao}
                                />
                            }}
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