import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '../configs/SafeAreaWrapper'
import tw from 'twrnc';

const SendMoneyScreen = () => {
    return (
        <SafeAreaWrapper >
            <View style={tw`items-center justify-center`}>
                <Text style={tw`text-2xl capitalize font-semibold py-1`}>
                    send money
                </Text>
            </View>
            <View style={tw`p-4 w-full bg-white`}>
                <View className="">
                    <Text style={tw`font-semibold pb-2 text-lg`}>Enter email</Text>
                    <TextInput
                        style={tw`rounded-md border px-2 py-1`}
                        placeholder='enter your email'
                        placeholderTextColor="gray"
                        autoFocus={true}
                    />
                </View>
                <View style={tw`py-2 mb-4`}>
                    <Text style={tw`font-semibold pb-2 text-lg`}>Enter email</Text>
                    <TextInput
                        style={tw`rounded-md border px-2 py-1`}
                        placeholder='enter your amount'
                        placeholderTextColor="gray"
                        autoFocus={true}
                        keyboardType='numeric'
                    />
                </View>
                <View >
                    <Button
                        title="send"
                        color="#0081C9"
                    />
                </View>
            </View>
        </SafeAreaWrapper>
    )
}

export default SendMoneyScreen