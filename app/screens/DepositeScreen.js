import { View, Text } from 'react-native'
import React from 'react'
import SafeAreaWrapper from "../configs/SafeAreaWrapper"
import tw from 'twrnc';
const DepositeScreen = () => {
    return (
        <SafeAreaWrapper >
            <View style={tw`items-center justify-center `}>
                <Text style={tw`text-2xl capitalize font-semibold py-1`}>
                    Deposite money
                </Text>
            </View>
            <View style={tw`p-4`}>
                <Text style={tw`text-xl font-semibold`}>helo</Text>
            </View>
        </SafeAreaWrapper>
    )
}

export default DepositeScreen