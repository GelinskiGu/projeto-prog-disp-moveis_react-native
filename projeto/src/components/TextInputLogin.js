import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { useState, useEffect } from 'react';


const TextInputLogin = (props) => {
    const [text, setText] = useState("");


    return (
        <TextInput
            label={props.label}
            value={text}
            textColor={'#419ED7'}
            onChangeText={text => {
                console.log(text);
                setText(text)
            }}
            underlineColor={'transparent'}
        />
    );
};

export default TextInputLogin;