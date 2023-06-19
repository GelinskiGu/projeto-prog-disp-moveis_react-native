import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';

import { MyCustomDrawer_sty } from './MyCustomDrawer_sty';


const MyCustomDrawer = (props) => {
    const name = useSelector((state) => state.user.name).split(" ")[0];

    return (
        <DrawerContentScrollView style={MyCustomDrawer_sty.container}>
            <View style={MyCustomDrawer_sty.container.containerFlex}>
                <View style={MyCustomDrawer_sty.container.container1}>
                    <Text style={MyCustomDrawer_sty.text}>Olá {name}</Text>
                    <View style={MyCustomDrawer_sty.line} />
                </View>

                <View style={MyCustomDrawer_sty.container.container2}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("MinhasVacinas")} style={MyCustomDrawer_sty.container.container2.containerRow}>
                        <Image source={require('../../../assets/images/icon-vaccine.png')} style={MyCustomDrawer_sty.images.image1} />
                        <Text style={MyCustomDrawer_sty.text}>Minhas Vacinas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate("ProximasVacinas")} style={MyCustomDrawer_sty.container.container2.containerRow}>
                        <Image source={require('../../../assets/images/calendar.png')} style={MyCustomDrawer_sty.images.image2} />
                        <Text style={MyCustomDrawer_sty.text}>Próximas Vacinas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.popToTop()} style={MyCustomDrawer_sty.container.container2.containerRow}>
                        <Image source={require('../../../assets/images/logout_icon.png')} style={MyCustomDrawer_sty.images.image3} />
                        <Text style={MyCustomDrawer_sty.text}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

export default MyCustomDrawer