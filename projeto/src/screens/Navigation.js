import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Inicial from "./Inicial";
import NovaConta from "./NovaConta";
import NovaVacina from "./NovaVacina";
import EditarVacina from "./EditarVacina";

// TODO: Implementar navegação entre telas.

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="EditarVacina">
                <Stack.Screen name="Inicial" component={Inicial} options={{ headerShown: false }} />
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
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default Navigation; 