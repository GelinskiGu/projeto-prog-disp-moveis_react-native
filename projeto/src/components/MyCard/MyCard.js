import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import { useState, useEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import { MyCard_sty } from "./MyCard_sty";

const MyCard = (props) => {
    return (
        <View style={MyCard_sty.container.containerView}>
            <Text style={MyCard_sty.text.textName}>{props.nomeVacina}</Text>
            <Text style={MyCard_sty.text.textDate}>{props.data}</Text>
        </View>
    )
}

export default MyCard;