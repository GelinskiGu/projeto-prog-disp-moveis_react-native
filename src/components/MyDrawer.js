import { createDrawerNavigator } from "@react-navigation/drawer";

import MyVaccinesScreen from "../screens/MyVaccinesScreen";
import ProximasVacinas from "../screens/ProximasVacinas";
import MyCustomDrawer from "./MyCustomDrawer/MyCustomDrawer";
import { useSelector } from "react-redux";


const Drawer = createDrawerNavigator()

const MyDrawer = () => {
    const nome = useSelector((state) => state.user.name)

    return (
        <Drawer.Navigator drawerContent={(props) => <MyCustomDrawer {...props} nome={nome} />} initialRouteName="Tela1" screenOptions={{}}>
            <Drawer.Screen name="MyVaccinesScreen" component={MyVaccinesScreen} options={{
                headerTitleStyle: {
                    color: '#419ED7',
                    fontFamily: 'AveriaLibre-Regular',
                    fontSize: 36,
                },
                headerStyle: { backgroundColor: '#C1E7E3' },
                headerTitle: 'Minhas Vacinas',
            }} />
            <Drawer.Screen name="ProximasVacinas" component={ProximasVacinas} options={{
                headerTitleStyle: {
                    color: '#419ED7',
                    fontFamily: 'AveriaLibre-Regular',
                    fontSize: 36,
                },
                headerStyle: { backgroundColor: '#C1E7E3' },
                headerTitle: 'Próximas Vacinas',
            }} />
        </Drawer.Navigator>
    )
}

export default MyDrawer