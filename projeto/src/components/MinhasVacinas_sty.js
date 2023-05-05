import { StyleSheet } from "react-native"

const MinhasVacinas_sty = StyleSheet.create({
    container: {
        containerView: {
            flex: 2,
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ADD4D0',
            width: '100%',
            height: '100%',
            marginTop: 25,
            zIndex: 0,
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
            alignSelf: 'flex-end',
            width: '100%',
            backgroundColor: "#49B976",
            // marginTop: 200,
            //  marginBottom: 50,
            // height: 30,
            elevation: 10,
            borderRadius: 5,
        },

        text: {
            fontFamily: 'AveriaLibre-Regular',
            fontSize: 17,
            color: '#FFFFFF',
            alignSelf: 'center',
        },


    },

    inputContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        width: '90%',
        height: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        //paddingVertical: -5,
        gap: 2
    },

    icon: {
        width: 16,
        height: 16,
        marginLeft: 5,
    },

    buttonContainer: {
        flex: 1,
        backgroundColor: '#37BD6D',
        width: '30%',
        height: 30,
        zIndex: 1,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignSelf: 'center',
        position: 'relative',
        elevation: 10,
        justifyContent: 'center',
    },
})

export { MinhasVacinas_sty } 