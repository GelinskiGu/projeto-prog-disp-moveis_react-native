import { StyleSheet } from "react-native"

const NovaVacina_sty = StyleSheet.create({
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

    },

    textRadioButton: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'AveriaLibre-Regular',
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
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },

        button2: {
            marginTop: 180,
            width: '35%',
            height: 10,
            backgroundColor: '#37BD6D',
            height: 38,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#37BD6D',
            borderStyle: 'solid',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 5,
            elevation: 5,
        }

    },

})

export { NovaVacina_sty } 