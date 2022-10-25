import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import TabNavigation from "./TabNavigation";
import Detailsscreen from "../screens/DetailsScreen";
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <TailwindProvider>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Root" component={TabNavigation} />
                        <Stack.Screen name="Details" component={Detailsscreen} />
                    </Stack.Navigator>
                </TailwindProvider>
            </Provider>
        </NavigationContainer>

    );
}

export default MainNavigation
