import { StyleSheet } from "react-native"

const ProximasVacinas_sty = StyleSheet.create({
    container: {
        containerView: {
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ADD4D0',
            width: '100%',
            height: '100%',
        },

        containerKeyboard: {
            backgroundColor: '#ADD4D0',
            width: '100%',
            height: '100%',
        },

    },

    button: {
        container: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '35%',
            height: 30,
            marginTop: 400,
            backgroundColor: "#37BD6D",
        },

        text: {
            fontFamily: 'AveriaLibre-Regular',
            fontSize: 17,
            color: '#FFFFFF',
        }
    }
})

export { ProximasVacinas_sty } 