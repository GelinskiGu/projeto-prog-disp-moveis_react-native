import { StyleSheet } from "react-native"

const EditarVacina_sty = StyleSheet.create({
    container: {

        containerView: {
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ADD4D0',
            width: '100%',
            height: '100%',
            gap: 8,
            marginTop: 65,
        },

        containerKeyboard: {
            backgroundColor: '#ADD4D0',
            width: '100%',
            height: '100%',
        },

    },

    containerInputs: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        marginLeft: 30,
    },

    containerRadioButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    text: {
        flex: 50,
        color: '#FFFFFF',
        fontSize: 17,
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'right',
        alignSelf: 'center',
        labelRadioButtonText: {
            color: '#FFFFFF',
            fontSize: 16,
            fontFamily: 'AveriaLibre-Regular',
            marginLeft: 68,
            paddingRight: 5,
        },
        textRadioButton: {
            color: '#FFFFFF',
            fontSize: 14,
            fontFamily: 'AveriaLibre-Regular',
        }
    },

    inputs: {
        flex: 60,
        width: '100%',
        fontSize: 16,
        height: 30,
        backgroundColor: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        paddingRight: 10,
        marginRight: 50,
        marginLeft: 10,
        color: '#419ED7',
        alignSelf: 'center',
        paddingVertical: 5,
    },

    buttons: {
        buttonContainer: {
            flex: 65,
            flexDirection: 'column',
            width: '100%',
            marginRight: 50,
            gap: -20,
        },

        textButton: {
            color: '#FFFFFF',
            fontSize: 17,
            fontFamily: 'AveriaLibre-Regular',
        },

        button1: {
            width: '94%',
            backgroundColor: '#419ED7',
            alignItems: 'center',
            justifyContent: 'center',
            height: 28,
            borderWidth: 1,
            borderColor: '#419ED7',
            borderStyle: 'solid',
        },

        button2: {
            marginTop: 45,
            width: '40%',
            height: 10,
            backgroundColor: '#37BD6D',
            height: 38,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#37BD6D',
            borderStyle: 'solid',
        },

        button3: {
            marginTop: 150,
            width: '25%',
            height: 10,
            backgroundColor: '#FD7979',
            height: 38,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#FD7979',
            borderStyle: 'solid',
        }

    },

    trashIcon: {
        width: '25%',
        marginLeft: 0,
        marginRight: 0,
    }

})

export { EditarVacina_sty } 