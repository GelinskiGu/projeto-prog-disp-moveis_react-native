import { StyleSheet } from "react-native"

const RecuperarSenha_sty = StyleSheet.create({
    containerView: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ADD5D0',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',


        keyboard: {
            flex: 1,
            width: '100%',
            height: '100%',

        }
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        gap: 10,
    },

    text: {
        flex: 10,
        textAlign: 'right',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 16,
        color: '#FFFFFF',
    },

    input: {
        flex: 60,
        backgroundColor: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 16,
        color: '#419ED7',
        height: 30,
        paddingVertical: 5,
    },


})

export { RecuperarSenha_sty } 