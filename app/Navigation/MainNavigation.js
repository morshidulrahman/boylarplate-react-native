import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import TabNavigation from "./TabNavigation";
import {
  DepositeScreen,
  LoginScreen,
  ProfileScreen,
  SendMoneyScreen,
} from "../screens";
import AccountNavigator from "./AccountNavigator";
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const { currentUser } = useSelector((state) => state.currentUser);
  console.log(
    "🚀 ~ file: MainNavigation.js:19 ~ MainNavigation ~ currentUser",
    currentUser
  );

  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!currentUser.length ? (
            <Stack.Screen name="TabNavigation" component={TabNavigation} />
          ) : (
            <Stack.Screen
              name="AccountNavigator"
              component={AccountNavigator}
            />
          )}

          <Stack.Screen name="DepositeScreen" component={DepositeScreen} />
          <Stack.Screen name="SendMoneyScreen" component={SendMoneyScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default MainNavigation;
