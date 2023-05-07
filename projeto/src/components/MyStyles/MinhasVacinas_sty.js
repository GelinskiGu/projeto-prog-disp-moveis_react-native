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
            flexDirection: 'column',
            width: '100%',
            height: '100%',
        },

        containerMyVaccines: {
            flex: 1,
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
            fontSize: 18,
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

export { MinhasVacinas_sty } 