import { View, Text, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { useState, useEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import { ProximasVacinas_sty } from "../components/MyStyles/ProximasVacinas_sty";
import MyCard from "../components/MyCard/MyCard";

import contas from "../data/Contas";

import { useSelector } from "react-redux";

import { db } from '../firebase/config'
import { collection, query, getDocs, onSnapshot, where, Timestamp } from 'firebase/firestore';


const ProximasVacinas = (props) => {
    const [myComponents, setMyComponents] = useState([]);
    const [vaccinesList, setVaccinesList] = useState([])

    const userId = useSelector((state) => state.user.userLoggedId);

    const novaVacina = () => {
        props.navigation.navigate("NovaVacina");
    }

    useEffect(() => {
        const currentDate = Timestamp.now();

        const vaccinesCollectionRef = collection(db, "users", userId, "vaccines");

        const q = query(vaccinesCollectionRef, where("proxVacinacaoTimestamp", ">=", currentDate))

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


    }, []);


    return (
        <KeyboardAvoidingView style={ProximasVacinas_sty.container.containerKeyboard}>
            <ScrollView>
                <View style={ProximasVacinas_sty.container.containerView}>
                    {vaccinesList.map((vaccine) => (
                        <MyCard
                            id={vaccine.id}
                            nomeVacina={vaccine.nome}
                            vaccineDate={vaccine.dataVacinacao}
                            data={vaccine.proxVacinacao}
                            dose={vaccine.dose}
                            navigation={props.navigation}
                        />))}
                </View>
            </ScrollView>

            <TouchableOpacity style={ProximasVacinas_sty.buttonContainer} onPress={novaVacina}>
                <Text style={ProximasVacinas_sty.buttonText}>Nova Vacina</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView >
    )
}

export default ProximasVacinas;