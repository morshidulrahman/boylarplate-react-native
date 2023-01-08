import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import TabNavigation from "./TabNavigation";
import { WalletScreen, HomeScreen, ProfileScreen, SendMoneyScreen } from "../screens"
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <TailwindProvider>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="TabNavigation" component={TabNavigation} />
                        <Stack.Screen name="HomeScreen" component={HomeScreen} />
                        <Stack.Screen name="WalletScreen" component={WalletScreen} />
                        <Stack.Screen name="SendMoneyScreen" component={SendMoneyScreen} />
                        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                    </Stack.Navigator>
                </TailwindProvider>
            </Provider>
        </NavigationContainer>

    );
}

export default MainNavigation
