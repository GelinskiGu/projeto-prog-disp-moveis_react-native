import { StyleSheet } from "react-native"

const ProximasVacinas_sty = StyleSheet.create({
    container: {
        containerView: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ADD4D0',
            width: '100%',
            height: '100%',
        },

        containerKeyboard: {
            flex: 1,
            backgroundColor: '#ADD4D0',
            width: '100%',
            height: '100%',
        },

    },

    buttonText: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 18,
        color: '#FFFFFF',
        alignSelf: 'center',
    },

    buttonContainer: {
        flex: 1,
        backgroundColor: '#37BD6D',
        width: '40%',
        height: 40,
        zIndex: 1,
        bottom: 50,
        alignSelf: 'center',
        position: 'absolute',
        elevation: 15,
        justifyContent: 'center',
        borderRadius: 7,
    },
})

export { ProximasVacinas_sty } 