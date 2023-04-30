import { StyleSheet } from "react-native"

const Font_sty = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 80,
        gap: 50,
        keyboard: {
            width: '100%',
            height: '100%',
        }
    },

    header: {
        flex: 2.5,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 20,
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
        width: '100%',
        marginBottom: 7,
        text_text: {
            flex: 30,
            fontSize: 32,
            marginHorizontal: 10,
            textAlign: 'center',
            fontFamily: 'AveriaLibre-Regular',
            color: '#419ED7',
        },
    },

    login: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        gap: 15,
        marginTop: 30,

        marginBottom: 20,
        login_views: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginHorizontal: 25,
            gap: 2,
        },
        login_text: {
            flex: 1,
            fontSize: 16,
            fontFamily: 'AveriaLibre-Regular',
            color: '#FFFFFF',
        },
        login_box: {
            flex: 6,
            color: '#419ED7',
            fontFamily: 'AveriaLibre-Regular',
            fontSize: 16,
            alignSelf: 'center',
            height: 35,
            backgroundColor: '#FFFFFF',
            marginVertical: 0,
            paddingRight: 10,
            borderRadius: 6,
            paddingVertical: 10,
        }
    },

    buttons_container: {
        flex: 3,
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 20,
        gap: 40,
        buttons1: {
            backgroundColor: '#37BD6D',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 120,
            borderWidth: 1,
            borderColor: '#37BD6D',
            borderStyle: 'solid',
            borderRadius: 10,
        },
        buttons2: {
            backgroundColor: '#419ED7',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 70,
            height: 40,
            borderWidth: 1,
            borderColor: '#419ED7',
            borderStyle: 'solid',
            borderRadius: 10,
        },
        buttons3: {
            backgroundColor: '#B0CCDE',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 70,
            height: 35,
            borderWidth: 1,
            borderColor: '#B0CCDE',
            borderStyle: 'solid',
            borderRadius: 10,
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

export { Font_sty } 