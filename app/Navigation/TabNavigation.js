import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Settingscreen from "../screens/Settingscreen";
import DashboardScreen from "../screens/DashboardScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AntDesign from "react-native-vector-icons/AntDesign";
import SearchScreen from "../screens/SearchScreen";
import Login from "../screens/Login";

import RegisterWithEmailPassword from "../screens/RegisterWithEmailPassword";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          paddingTop: 5,
          paddingBottom: 20,
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={RegisterWithEmailPassword}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <AntDesign name="bars" size={30} color={"red"} />,
        }}
      />
      <Tab.Screen
        name="dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: "dashboard",
          tabBarIcon: () => (
            <AntDesign name="barschart" size={30} color={"red"} />
          ),
        }}
      />
      <Tab.Screen
        name="screen"
        component={SearchScreen}
        options={{
          tabBarLabel: "search",
          tabBarIcon: () => (
            <AntDesign name="search1" size={30} color={"red"} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "profile",
          tabBarIcon: () => <AntDesign name="user" size={30} color={"red"} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
