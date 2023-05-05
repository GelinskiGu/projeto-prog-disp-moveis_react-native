import { StyleSheet } from "react-native"

const EditarVacina_sty = StyleSheet.create({
    container: {

        containerView: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ADD4D0',
            height: '100%',
            width: '95%',
            gap: 13,
            marginTop: 65,
        },

        containerKeyboard: {
            flex: 1,
            backgroundColor: '#ADD4D0',
            width: '100%',
            height: '100%',
        },

    },

    containerInputs: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        //    marginLeft: 30,
    },

    containerRadioButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },

    text: {
        flex: 50,
        color: '#FFFFFF',
        fontSize: 17,
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'right',
        alignSelf: 'center',

    },

    inputs: {
        flex: 60,
        width: '100%',
        fontSize: 16,
        height: 35,
        backgroundColor: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        //   paddingRight: 10,
        //   marginRight: 50,
        //    marginLeft: 10,
        color: '#419ED7',
        alignSelf: 'center',
        paddingVertical: 5,
        //     paddingVertical: 5,
    },

    buttons: {
        buttonContainer: {
            flex: 65,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            width: '100%',
            //    marginRight: 50,
            //    gap: -20,
        },

        textButton: {
            color: '#FFFFFF',
            fontSize: 16,
            fontFamily: 'AveriaLibre-Regular',
        },

        button1: {
            width: '80%',
            backgroundColor: '#419ED7',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'flex-start',
            height: 28,
            borderWidth: 1,
            borderColor: '#419ED7',
            borderStyle: 'solid',
        },

        button2: {
            // marginTop: 45,
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
            //  marginTop: 150,
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
        width: 20,
        height: 20,
        marginLeft: 5,
    },

    containerDate: {
        flex: 50,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginRight: 42,
    },

    dateIcon: {
        width: 22,
        height: 22,
        marginRight: 5,
    },

    proofVaccineImage: {
        width: 210,
        height: 100,
        alignSelf: 'flex-start',
    },

    textRadioButtonContainer: {
        flex: 50,
        alignItems: 'flex-end',
        alignSelf: 'flex-start',
        paddingTop: 7,
    },

    textRadioButton: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
    },

    buttonsGroup: {
        flex: 70,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: -8,
    },

    radioButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        flexBasis: '45%',
    },

    containerButtons: {
        width: '100%',
        height: '100%',
        marginTop: 40,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 100,

        button1: {
            flex: 1,
            width: '40%',
            height: 35,
            backgroundColor: '#37BD6D',
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 10,
        },

        button2: {
            flex: 1,
            flexDirection: 'row',
            width: '25%',
            height: 30,
            backgroundColor: '#FD7979',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 5,
            elevation: 10,
        },


    },

    modalStyle: {
        containerView: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.2)'
        },

        containerModal: {
            flex: 1,
            backgroundColor: '#FFFFFF',
            justifyContent: 'space-between',
            marginVertical: 330,
            width: '70%',
            borderColor: '#B9DFDB',
            borderWidth: 2,
            borderStyle: 'solid',
        },

        textContainer: {
            flex: 1,
            justifyContent: 'center',
        },

        modalText: {
            color: '#FD7979',
            fontSize: 19,
            fontFamily: 'AveriaLibre-Regular',
            textAlign: 'center',
        },

        buttonsContainer: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
        },

        buttonYes: {
            width: '45%',
            height: 35,
            backgroundColor: '#FF8383',
            justifyContent: 'center',
        },

        buttonCancel: {
            width: '45%',
            height: 35,
            backgroundColor: '#3F92C5',
            justifyContent: 'center',
        },

        buttonText: {
            color: '#FFFFFF',
            fontSize: 22,
            fontFamily: 'AveriaLibre-Regular',
            textAlign: 'center',
        },
    },

})

export { EditarVacina_sty } 