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
            gap: -4,
            marginVertical: 5,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
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
            fontFamily: 'AveriaLibre-Regular',
            color: '#419ED7',
            fontSize: 24,
            paddingTop: 2,
        },

        textDose: {
            fontFamily: 'AveriaLibre-Regular',
            fontSize: 13,
            marginBottom: 2,
            backgroundColor: '#3F92C5',
            color: '#FFFFFF',
            paddingHorizontal: 10,
            marginVertical: 5,
            paddingVertical: 1,
        },

        textDate: {
            fontFamily: 'AveriaLibre-Regular',
            fontSize: 13,
            marginBottom: -28,
            marginTop: 5,
        },

        textDoseDate: {
            fontFamily: 'AveriaLibre-Regular',
            fontSize: 11,
            alignSelf: 'flex-end',
            marginTop: -28,
            color: '#FD7979',
        },
    }
})

export { MyVaccines_sty } 