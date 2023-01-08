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
    console.log({ fullName, email, password, confirmPassword });
  };

  return (
    <SafeAreaWrapper
      style={tw`flex-1 items-center justify-center bg-stone-700`}
    >
      <View style={tw`bg-white px-6 py-8 rounded shadow-md text-black w-full`}>
        <Text style={tw`mb-8 text-2xl text-center`}>Sign up</Text>
        <TextInput
          mode="flat"
          label="Full-Name"
          type="text"
          textContentType="name"
          keyboardType="default"
          style={tw`border border-grey-300 w-full p-3 rounded mb-4`}
          placeholder="Full Name"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
        <TextInput
          mode="flat"
          label="E-mail"
          placeholder="Enter Email"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={tw`border border-grey-300 w-full p-3 rounded mb-4`}
        />

        <TextInput
          mode="flat"
          label="Password"
          placeholder="Enter Password"
          keyboardType="visible-password"
          textContentType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={tw`border border-grey-300 w-full p-3 rounded mb-4`}
        />
        <TextInput
          mode="flat"
          label="Confirm-Password"
          placeholder="Confirm Password"
          keyboardType="visible-password"
          textContentType="password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          style={tw`border border-grey-light w-full p-3 rounded mb-4`}
        />
        <TouchableOpacity onPress={handleRegister}>
          <Text
            style={tw`w-full text-center py-3 rounded bg-green-500 text-white my-1`}
          >
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaWrapper>
  );
};

export default RegisterWithEmailPassword;
