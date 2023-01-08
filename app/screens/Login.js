import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
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

const Login = () => {
  return (
    <SafeAreaWrapper
      style={tw`flex-1 items-center justify-center bg-stone-700`}
    >
      <View style={tw``}>
        <TouchableOpacity>
          <Text style={tw`mb-5 bg-green-300 px-3 py-2 text-center`}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={tw` bg-blue-300 px-3 py-2 text-center`}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaWrapper>
  );
};

export default Login;
