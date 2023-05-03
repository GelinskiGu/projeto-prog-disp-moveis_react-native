import { StyleSheet } from "react-native"

const MyCustomDrawer_sty = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ADD4D0',


        containerFlex: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#ADD4D0',
        },


        container1: {
            marginTop: 60,
        },

        container2: {
            gap: 12,

            containerRow: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 7,
                marginLeft: 5,
            },
        },
    },



    text: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 24,
        color: '#419ED7',
        alignSelf: 'center',
        textAlign: 'center',
    },

    line: {
        borderBottomWidth: 1.6,
        borderBottomColor: '#419ED7',
        marginVertical: 35,
        marginHorizontal: -36,
    },

    images: {
        image1: {
            width: 30,
            height: 30,
        },

        image2: {
            width: 32,
            height: 32,
        },

        image3: {
            width: 25,
            height: 25,
            marginLeft: 7,
        },
    },

})

export { MyCustomDrawer_sty } 