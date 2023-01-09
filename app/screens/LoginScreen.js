import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import tw from "twrnc";
import SafeAreaWrapper from "../configs/SafeAreaWrapper";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";

const LoginScreen = ({ navigation }) => {
  const [user, setUser] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, [email, password]);

  const loginHandler = async () => {
    setError(null);

    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);

        navigation.navigate("HomeScreen");
        // ...
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        setError(
          errorCode.split("/")[1].split("-").join(" ") ||
            errorMessage.split("/")[1]
        );
      });
  };

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
              mode="flat"
              label="E-mail"
              placeholder="Enter Email..."
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={tw`rounded border border-gray-300 p-3 my-1`}
            />
          </View>
          <View style={tw`my-1`}>
            <Text style={tw`font-semibold pt-2 text-lg`}>Password</Text>
            <TextInput
              mode="flat"
              label="Password"
              placeholder="Password..."
              keyboardType="visible-password"
              textContentType="password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={tw`rounded border border-gray-300 p-3 my-1`}
            />
          </View>
          {error && (
            <Text
              style={tw`p-3 ${
                user ? "bg-green-600" : "bg-red-600"
              } text-white text-lg text-center rounded-md capitalize`}
            >
              {user ? "Logged in" : error}
            </Text>
          )}
          <View style={tw` items-center mt-8`}>
            <TouchableOpacity
              style={tw`bg-[#0081C9] w-1/2 p-3 rounded-full text-center`}
              onPress={loginHandler}
            >
              <Text style={tw`text-center text-white font-bold text-[16px]`}>
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={tw`my-5 text-center`}
            onPress={() => navigation.navigate("RegisterWithEmailPassword")}
          >
            I need to Registration first.
          </Text>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default LoginScreen;
