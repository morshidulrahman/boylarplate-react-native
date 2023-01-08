import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import React from "react";
import SafeAreaWrapper from "../configs/SafeAreaWrapper";
import tw from "twrnc";

const SendMoneyScreen = () => {
  return (
    <SafeAreaWrapper>
      <View style={tw`p-4 w-full bg-white h-full  justify-center items-center`}>
        <View style={tw`w-full px-3`}>
          <Text style={tw`text-[30px] font-bold pt-4 text-center`}>
            Send Money
          </Text>
          <View style={tw`my-2 mt-10`}>
            <Text style={tw`font-semibold pb-2 text-lg`}>Email</Text>
            <TextInput
              style={tw`rounded border border-gray-300 p-2`}
              placeholder="Enter Your Email..."
              placeholderTextColor="gray"
              autoFocus={true}
            />
          </View>
          <View style={tw`my-2`}>
            <Text style={tw`font-semibold pb-2 text-lg`}>Amount</Text>
            <TextInput
              style={tw`rounded border border-gray-300 p-2`}
              placeholder="Enter Your Amount..."
              placeholderTextColor="gray"
              autoFocus={false}
              keyboardType="numeric"
            />
          </View>
          <View style={tw` items-center mt-8`}>
            <TouchableOpacity
              style={tw`bg-[#0081C9] w-1/2 p-3 rounded-full text-center`}
              onPress={console.log("SendMoneyScreen")}
            >
              <Text style={tw`text-center text-white font-bold text-[16px]`}>
                Send
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default SendMoneyScreen;
