import { StyleSheet } from "react-native"

const NovaVacina_sty = StyleSheet.create({
    container: {

        containerView: {
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ADD4D0',
            width: '100%',
            height: '100%',
            paddingVertical: 0,
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

    text: {
        flex: 40,
        color: '#FFFFFF',
        fontSize: 17,
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'right',
        labelRadioButton: {
            color: '#FFFFFF',
            marginRight: -22,
            fontSize: 16,
            fontFamily: 'AveriaLibre-Regular',
            textAlign: 'right',
            marginLeft: 60,
        },
        textRadioButton: {
            color: '#FFFFFF',
            fontSize: 16,
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

})

export { NovaVacina_sty } 