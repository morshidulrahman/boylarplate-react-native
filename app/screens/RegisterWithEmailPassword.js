import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import tw from "twrnc";
import SafeAreaWrapper from "../configs/SafeAreaWrapper";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase.config";

const RegisterWithEmailPassword = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //   const auth = getAuth(app);

  const handleRegister = () => {
    console.log({ email });
  };

  return (
    <SafeAreaWrapper>
      <View style={tw`p-4 w-full bg-white h-full  justify-center items-center`}>
        <View style={tw`w-full`}>
          <Text style={tw`text-[30px] font-bold py-4 mb-7 text-center`}>
            Sign Up
          </Text>
          <TextInput
            type="text"
            style={tw`rounded border border-gray-300 p-3 my-1`}
            placeholder="Full Name..."
            value={fullName}
            onChangeText={(text) => setFullName(text)}
          />
          <TextInput
            mode="flat"
            label="E-mail"
            placeholder="Enter Email..."
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            type="text"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={tw`rounded border border-gray-300 p-3 my-1`}
          />

          <TextInput
            type="password"
            style={tw`rounded border border-gray-300 p-3 my-1`}
            placeholder="Password..."
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            type="password"
            style={tw`rounded border border-gray-300 p-3 my-1`}
            placeholder="Confirm Password..."
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <View style={tw` items-center mt-8`}>
            <TouchableOpacity
              style={tw`bg-[#0081C9] w-1/2 p-3 rounded-full text-center`}
              onPress={console.log("SendMoneyScreen")}
            >
              <Text style={tw`text-center text-white font-bold text-[16px]`}>
                Registation
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default RegisterWithEmailPassword;
