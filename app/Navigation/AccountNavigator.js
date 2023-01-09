import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen, RegisterScreen } from "../screens";

const AccountNavigator = () => {
  const AccountStack = createNativeStackNavigator();
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AccountStack.Screen name="LoginScreen" component={LoginScreen} />
      <AccountStack.Screen
        name="RegisterWithEmailPassword"
        component={RegisterScreen}
      />
    </AccountStack.Navigator>
  );
};

export default AccountNavigator;
