import { StyleSheet } from "react-native"

const MyCard_sty = StyleSheet.create({
    container: {

        containerView: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'flex-start',
            backgroundColor: '#FFFFFF',
            width: '92%',
            gap: 0.5,
            borderRadius: 10,
            marginTop: 15,
            paddingHorizontal: 14,
            paddingVertical: 4,
            elevation: 10.
        },

        containerKeyboard: {
            backgroundColor: '#ADD4D0',
            width: '100%',
            height: '100%',
        },
    },

    text: {
        textName: {
            fontFamily: 'AveriaLibre-Regular',
            color: '#419ED7',
            fontSize: 26,
            paddingTop: 2,
        },

        textDate: {
            fontFamily: 'AveriaLibre-Regular',
            fontSize: 17,
            paddingBottom: 8,
            color: '#8B8B8B',
        },
    }
})

export { MyCard_sty } 