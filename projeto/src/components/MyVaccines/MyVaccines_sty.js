import { StyleSheet } from "react-native"

const MyVaccines_sty = StyleSheet.create({

    container: {
        containerView: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: '#FFFFFF',
            width: '47%',
            borderRadius: 10,
            paddingHorizontal: 14,
            paddingVertical: 4,
            marginLeft: '2%',
            gap: 2,
            marginVertical: 5,
            elevation: 5,
        },

        containerKeyboard: {
            backgroundColor: '#ADD4D0',
            width: '100%',
            height: '100%',
        },
    },

    text: {
        textNameVaccine: {
            flex: 1,
            fontFamily: 'AveriaLibre-Regular',
            color: '#419ED7',
            fontSize: 22,
            paddingTop: 2,
        },

        textDose: {
            flex: 1,
            fontFamily: 'AveriaLibre-Regular',
            fontSize: 14,
            backgroundColor: '#3F92C5',
            color: '#FFFFFF',
            paddingHorizontal: 10,
        },

        textDate: {
            flex: 1,
            fontFamily: 'AveriaLibre-Regular',
            fontSize: 13,
            color: '#8B8B8B',
            paddingVertical: 2,
        },

        textDoseDate: {
            flex: 1,
            fontFamily: 'AveriaLibre-Regular',
            fontSize: 11,
            alignSelf: 'flex-end',
            color: '#FD7979',
        },
    },

    image: {
        flex: 1,
        width: 160,
        height: 70,
    },
})

export { MyVaccines_sty } 