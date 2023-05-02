import { StyleSheet } from "react-native"

const MinhasVacinas_sty = StyleSheet.create({
    container: {
        containerView: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ADD4D0',
            width: '100%',
            height: '100%',
            marginTop: 25,
        },

        containerKeyboard: {
            flex: 1,
            backgroundColor: '#ADD4D0',
            width: '100%',
            height: '100%',
        },

        containerMyVaccines: {
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 25,
        },

    },

    button: {
        container: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '35%',
            backgroundColor: "#49B976",
            marginTop: 200,
            marginBottom: 50,
            height: 30,
        },

        text: {
            fontFamily: 'AveriaLibre-Regular',
            fontSize: 17,
            color: '#FFFFFF',
        },


    },

    inputContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        width: '90%',
        height: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: -5,
        gap: 2
    },
})

export { MinhasVacinas_sty } 