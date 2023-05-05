import { StyleSheet } from "react-native"

const Inicial_sty = StyleSheet.create({
    container: {
        paddingTop: 70,
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 70,
        keyboard: {
            width: '100%',
            height: '100%',
        }
    },

    header: {
        flex: 2.5,
        alignItems: 'center',
        flexDirection: 'row',
        header_text: {
            fontSize: 44,
            fontFamily: 'AveriaLibre-Regular',
            color: '#419ED7',
            textDecorationLine: 'underline',

        },

        headerIcon: {
            width: 44,
            height: 40,

        }
    },

    text: {
        flex: 1,
        paddingHorizontal: 21,
        text_text: {
            flex: 30,
            fontSize: 32,
            textAlign: 'center',
            fontFamily: 'AveriaLibre-Regular',
            color: '#419ED7',
        },
    },

    login: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 24,
        gap: 14,
        login_views: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 3,
        },
        login_text: {
            flex: 1.2,
            fontSize: 16,
            alignSelf: 'center',
            fontFamily: 'AveriaLibre-Regular',
            color: '#FFFFFF',
        },
        login_box: {
            flex: 6,
            color: '#419ED7',
            fontFamily: 'AveriaLibre-Regular',
            fontSize: 16,
            alignSelf: 'center',
            height: 37,
            backgroundColor: '#FFFFFF',
            borderRadius: 6,
            paddingVertical: 5,
        },
        messageErrorView: {
            flex: 6,
            flexDirection: 'column',
            alignItems: 'flex-start',

            textMessageError: {
                fontFamily: 'AveriaLibre-Regular',
                color: '#FD7979',
                fontSize: 15,
            },

            login_box: {
                flex: 6,
                width: '100%',
                color: '#419ED7',
                fontFamily: 'AveriaLibre-Regular',
                fontSize: 16,
                alignSelf: 'center',
                height: 37,
                backgroundColor: '#FFFFFF',
                alignSelf: 'center',
                borderRadius: 6,
                paddingVertical: 10,
            },
        },
    },

    buttons_container: {
        flex: 3,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: 10,
        gap: 55,
        buttons1: {
            backgroundColor: '#37BD6D',
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            width: '35%',
            borderWidth: 1,
            borderColor: '#37BD6D',
            borderStyle: 'solid',
            borderRadius: 10,
            elevation: 10,
        },
        buttons2: {
            backgroundColor: '#419ED7',
            alignItems: 'center',
            justifyContent: 'center',
            width: '60%',
            height: 40,
            borderWidth: 1,
            borderColor: '#419ED7',
            borderStyle: 'solid',
            borderRadius: 10,
            elevation: 10,
        },
        buttons3: {
            backgroundColor: '#B0CCDE',
            alignItems: 'center',
            justifyContent: 'center',
            width: '60%',
            height: 35,
            borderWidth: 1,
            borderColor: '#B0CCDE',
            borderStyle: 'solid',
            borderRadius: 10,
            elevation: 10,
        },

        textButton1: {
            color: '#FFFFFF',
            fontFamily: 'AveriaLibre-Regular',
            fontSize: 22,
            alignSelf: 'center',
        },

        textButton2: {
            color: '#FFFFFF',
            fontFamily: 'AveriaLibre-Regular',
            fontSize: 20,
        }


    },

})

export { Inicial_sty } 