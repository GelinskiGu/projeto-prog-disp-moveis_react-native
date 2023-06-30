import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, FlatList } from "react-native";
import { useState, useEffect } from 'react';

import MyVaccines from "../components/MyVaccines/MyVaccines";
import { MyVaccinesScreen_sty } from "../components/MyStyles/MyVaccinesScreen_sty";
import { useSelector } from "react-redux";

import { db } from '../firebase/config'
import { collection, query, onSnapshot } from 'firebase/firestore';

// TODO: Arrumar nomenclatura do banco de dados para vacinas.

const MyVaccinesScreen = (props) => {
    const [vaccinesList, setVaccinesList] = useState([])
    const [searchText, setSearchText] = useState('');


    const userId = useSelector((state) => state.user.userLoggedId);

    const goToNewVaccine = () => {
        props.navigation.navigate("NovaVacina");
    }

    const filteredList = vaccinesList.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    useEffect(() => {
        const vaccinesCollectionRef = collection(db, "users", userId, "vaccines");

        const q = query(vaccinesCollectionRef)


        onSnapshot(q, (querySnapshot) => {
            const vaccines = [];

            querySnapshot.forEach((doc) => {
                vaccines.push({
                    vaccineId: doc.id,
                    name: doc.data().nome,
                    vaccineDate: doc.data().dataVacinacao,
                    nextVaccineDate: doc.data().proxVacinacao,
                    dose: doc.data().dose,
                });
            })

            setVaccinesList(vaccines);
        })

    }, []);

    return (
        <View style={MyVaccinesScreen_sty.container.containerKeyboard}>
            <ScrollView>
                <View style={MyVaccinesScreen_sty.container.containerView}>
                    <View style={MyVaccinesScreen_sty.inputContainer}>
                        <Image source={require('../../assets/images/icon_search.png')} style={MyVaccinesScreen_sty.icon} />
                        <TextInput placeholder="PESQUISAR VACINA..."
                            placeholderTextColor={'#8B8B8B'}
                            style={{ paddingVertical: 0, fontFamily: 'AveriaLibre-Regular', color: '#3F92C5', fontSize: 14, width: '100%' }}
                            onChangeText={(text) => setSearchText(text)}></TextInput>
                    </View>
                    <View style={MyVaccinesScreen_sty.container.containerMyVaccines}>
                        <FlatList
                            extraData={filteredList}
                            data={filteredList}
                            renderItem={({ item }) => {
                                return <MyVaccines
                                    vaccineId={item.vaccineId}
                                    name={item.name}
                                    vaccineDate={item.vaccineDate}
                                    nextVaccineDate={item.nextVaccineDate}
                                    dose={item.dose}
                                />
                            }}
                            keyExtractor={item => item.vaccineId}
                            numColumns={2}
                            scrollEnabled={false} />
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity style={MyVaccinesScreen_sty.buttonContainer} onPress={goToNewVaccine}>
                <Text style={MyVaccinesScreen_sty.button.text}>Nova Vacina</Text>
            </TouchableOpacity>
        </View >
    )
}

export default MyVaccinesScreen;