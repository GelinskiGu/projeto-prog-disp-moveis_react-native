import { StyleSheet } from "react-native"

const NovaConta_sty = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ADD4D0',
        width: '100%',
        height: '100%',
        paddingVertical: 100,
        gap: 15,
        keyboard: {
            width: '100%',
            height: '100%',
            backgroundColor: '#ADD4D0',
        }
    },

    containerInputs: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
        gap: 8,
    },

    text: {
        flex: 40,
        color: '#FFFFFF',
        fontSize: 17,
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'right',

    },

    textRadioButton: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
    },

    inputs: {
        flex: 60,
        width: '100%',
        fontSize: 16,
        height: 30,
        backgroundColor: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        paddingRight: 0,
        marginRight: 0,
        marginLeft: 0,
        color: '#419ED7',
        alignSelf: 'center',
        paddingVertical: 5,
    },

    radioButtonGroup: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },

    button: {
        flex: 1,
        width: '50%',
        paddingVertical: 9,
        marginBottom: 0,
        marginTop: 200,
        elevation: 5,
        backgroundColor: '#37BD6D',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#37BD6D',
        borderStyle: 'solid',
        borderRadius: 10,
        textButton: {
            color: '#FFFFFF',
            fontSize: 18,
            fontFamily: 'AveriaLibre-Regular',
        },
    },

    containerInputWrongField: {
        flex: 60,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 0,
        marginLeft: 0,
    },

    textWrongFields: {
        flex: 40,
        fontFamily: 'AveriaLibre-Regular',
        color: '#FD7979',
        alignSelf: 'flex-start',
        textAlign: 'left',
    }
})

export { NovaConta_sty } 