import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";

import { Provider } from "react-redux";
import { store } from "../../redux/store"

import Inicial from "./Inicial";
import NovaConta from "./NovaConta";
import NovaVacina from "./NovaVacina";
import EditarVacina from "./EditarVacina";
import ProximasVacinas from "./ProximasVacinas";
import MinhasVacinas from "./MinhasVacinas";
import MyDrawer from "../components/MyDrawer";
import RecuperarSenha from "./RecuperarSenha";


const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Inicial">
                    <Stack.Screen name="Inicial" component={Inicial} options={{ headerShown: false }} />
                    <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
                    <Stack.Screen name="NovaConta" component={NovaConta} options={{
                        headerTitleStyle: {
                            color: '#419ED7',
                            fontFamily: 'AveriaLibre-Regular',
                            fontSize: 36,
                        },
                        headerStyle: { backgroundColor: '#C1E7E3' },
                        headerTitle: 'Nova Conta',
                    }} />
                    <Stack.Screen name="NovaVacina" component={NovaVacina} options={{
                        headerTitleStyle: {
                            color: '#419ED7',
                            fontFamily: 'AveriaLibre-Regular',
                            fontSize: 36,
                        },
                        headerStyle: { backgroundColor: '#C1E7E3' },
                        headerTitle: 'Nova Vacina',
                    }} />
                    <Stack.Screen name="EditarVacina" component={EditarVacina} options={{
                        headerTitleStyle: {
                            color: '#419ED7',
                            fontFamily: 'AveriaLibre-Regular',
                            fontSize: 36,
                        },
                        headerStyle: { backgroundColor: '#C1E7E3' },
                        headerTitle: 'Editar Vacina',
                    }} />
                    <Stack.Screen name="ProximasVacinas" component={ProximasVacinas} options={{
                        headerTitleStyle: {
                            color: '#419ED7',
                            fontFamily: 'AveriaLibre-Regular',
                            fontSize: 36,
                        },
                        headerStyle: { backgroundColor: '#C1E7E3' },
                        headerTitle: 'Próximas Vacinas',
                    }} />
                    <Stack.Screen name="MinhasVacinas" component={MinhasVacinas} options={{
                        headerTitleStyle: {
                            color: '#419ED7',
                            fontFamily: 'AveriaLibre-Regular',
                            fontSize: 36,
                        },
                        headerStyle: { backgroundColor: '#C1E7E3' },
                        headerTitle: 'Minhas Vacinas',
                    }} />
                    <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{
                        headerTitleStyle: {
                            color: '#419ED7',
                            fontFamily: 'AveriaLibre-Regular',
                            fontSize: 36,
                        },
                        headerStyle: { backgroundColor: '#C1E7E3' },
                        headerTitle: 'MyHealth',
                        headerLeft: () => (
                            <Image
                                source={require('../../assets/images/icon-vaccine.png')}
                                style={{ marginLeft: 10, width: 35, height: 35 }}
                            />)
                    }}
                    />
                </Stack.Navigator>
            </NavigationContainer >
        </Provider>
    )
}

export default Navigation; 