import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WalletScreen, DashboardScreen, HomeScreen, ProfileScreen } from "../screens"
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={
                {
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "red",
                    tabBarStyle: {
                        borderTopWidth: 0,
                        paddingTop: 10,
                        paddingBottom: 10,
                        height: 70,

                    }
                }}>
            <Tab.Screen name="HomeScreen" component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <Ionicons name="home" size={22} color={"gray"} />
                    ),
                }}
            />
            <Tab.Screen name="WalletScreen"
                component={WalletScreen}
                options={{
                    tabBarLabel: 'dashboard',
                    tabBarIcon: () => (
                        <Entypo name="wallet" size={22} color={"gray"} />
                    ),
                }} />
            <Tab.Screen name="DashboardScreen" component={DashboardScreen}
                options={{
                    tabBarLabel: 'DashboardScreen',
                    tabBarIcon: () => (
                        <Ionicons name="md-stats-chart" size={22} color={"gray"} />
                    ),
                }}
            />
            <Tab.Screen name="profile" component={ProfileScreen}
                options={{
                    tabBarLabel: 'profile',
                    tabBarIcon: () => (
                        <FontAwesome5 name="user-alt" size={22} color={"gray"} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation