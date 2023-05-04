import { createDrawerNavigator } from "@react-navigation/drawer";

import MinhasVacinas from "../screens/MinhasVacinas";
import ProximasVacinas from "../screens/ProximasVacinas";
import MyCustomDrawer from "./MyCustomDrawer/MyCustomDrawer";

import contas from "../data/Contas";

const Drawer = createDrawerNavigator()

const MyDrawer = (props) => {
    const emailUsuarioLogado = props.route.params?.emailUsuarioLogado;
    const nome = contas[emailUsuarioLogado].nomeCompleto.split(" ")[0];

    return (
        <Drawer.Navigator drawerContent={(props) => <MyCustomDrawer {...props} nome={nome} />} initialRouteName="Tela1" screenOptions={{}}>
            <Drawer.Screen name="MinhasVacinas" component={MinhasVacinas} options={{
                headerTitleStyle: {
                    color: '#419ED7',
                    fontFamily: 'AveriaLibre-Regular',
                    fontSize: 36,
                },
                headerStyle: { backgroundColor: '#C1E7E3' },
                headerTitle: 'Minhas Vacinas',
            }} initialParams={{ emailUsuarioLogado: props.route.params.emailUsuarioLogado }} />
            <Drawer.Screen name="ProximasVacinas" component={ProximasVacinas} />
        </Drawer.Navigator>
    )
}

export default MyDrawer