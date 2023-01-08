import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '../configs/SafeAreaWrapper'

const SendMoneyScreen = () => {
    return (
        <SafeAreaWrapper >
            <View className="items-center justify-center">
                <Text className="text-2xl capitalize font-semibold py-1">
                    send money
                </Text>
            </View>
            <View className="p-4 w-full bg-white ">
                <View className="">
                    <Text className="font-semibold pb-2 text-lg">Enter email</Text>
                    <TextInput
                        className="rounded-md border px-2 py-1"
                        placeholder='enter your email'
                        placeholderTextColor="gray"
                        autoFocus={true}
                    />
                </View>
                <View className="py-2 mb-4">
                    <Text className="font-semibold pb-2 text-lg">Enter Amount</Text>
                    <TextInput
                        className="rounded-md border px-2 py-1"
                        placeholder='enter your email'
                        placeholderTextColor="gray"
                        autoFocus={true}
                        keyboardType='numeric'
                    />
                </View>
                <View >
                    <Button
                        className="rounded-md py-2"
                        title="send"
                        color="#0081C9"
                    />
                </View>
            </View>
        </SafeAreaWrapper>
    )
}

export default SendMoneyScreen