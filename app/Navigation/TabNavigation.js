import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DepositeScreen,
  HomeScreen,
  ProfileScreen,
  SendMoneyScreen,
} from "../screens";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";

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
          paddingTop: 10,
          paddingBottom: 10,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={22}
              color={focused ? "#0081C9" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DepositeScreen"
        component={DepositeScreen}
        options={{
          tabBarLabel: "deposite",
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="wallet"
              size={22}
              color={focused ? "#0081C9" : "gray"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="SendMoneyScreen"
        component={SendMoneyScreen}
        options={{
          tabBarLabel: "SendMoneyScreen",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="send"
              size={22}
              color={focused ? "#0081C9" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "profile",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="user-alt"
              size={22}
              color={focused ? "#0081C9" : "gray"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
