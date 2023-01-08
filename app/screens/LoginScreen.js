import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import tw from "twrnc";
import SafeAreaWrapper from "../configs/SafeAreaWrapper";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { app } from "../../firebase.config";

const LoginScreen = () => {
  return (
    <SafeAreaWrapper>
      <View style={tw`p-4 w-full bg-white h-full  justify-center items-center`}>
        <View style={tw`w-full px-3`}>
          <Text style={tw`text-[30px] font-bold pt-4 text-center`}>
            Sign In
          </Text>
          <View style={tw`my-1 mt-10`}>
            <Text style={tw`font-semibold pt-2 text-lg`}>Email</Text>
            <TextInput
              style={tw`rounded border border-gray-300 p-3`}
              placeholder="Enter Your Email..."
              placeholderTextColor="gray"
              autoFocus={true}
            />
          </View>
          <View style={tw`my-1`}>
            <Text style={tw`font-semibold pt-2 text-lg`}>Password</Text>
            <TextInput
              style={tw`rounded border border-gray-300 p-3`}
              placeholder="Enter Your Password..."
              placeholderTextColor="gray"
              autoFocus={false}
              keyboardType="visible-password"
            />
          </View>
          <View style={tw` items-center mt-8`}>
            <TouchableOpacity
              style={tw`bg-[#0081C9] w-1/2 p-3 rounded-full text-center`}
              onPress={console.log("Log in")}
            >
              <Text style={tw`text-center text-white font-bold text-[16px]`}>
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default LoginScreen;
