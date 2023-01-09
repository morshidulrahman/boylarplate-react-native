import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import tw from "twrnc";
import SafeAreaWrapper from "../configs/SafeAreaWrapper";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../Redux/features/currentUserSlice";
import { app } from "../../firebase.config";

const RegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setError(null);
  }, [fullName, email, password, confirmPassword]);

  const handleRegister = async () => {
    setError(null);

    if (!fullName && !email && !password && !confirmPassword) {
      return false;
    } else if (password === confirmPassword) {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch(getCurrentUser(user));
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
          // ..
        });
    } else {
      setError("Password do not match");
    }
  };

  return (
    <SafeAreaWrapper
      style={tw`flex-1 items-center justify-center bg-stone-700`}
    >
      <View style={tw`bg-white px-6 py-8 rounded shadow-md text-black w-full`}>
        <Text style={tw`text-[30px] font-bold py-4 mb-7 text-center`}>
          Sign up
        </Text>
        <Text style={tw`font-semibold text-lg`}>Name</Text>
        <TextInput
          mode="flat"
          label="Full-Name"
          type="text"
          textContentType="name"
          keyboardType="default"
          style={tw`rounded border border-gray-300 p-3 my-1`}
          placeholder="Enter Full Name..."
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
        <Text style={tw`font-semibold text-lg`}>Email</Text>
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
        <Text style={tw`font-semibold text-lg`}>Password</Text>
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
        <TextInput
          mode="flat"
          label="Confirm-Password"
          placeholder="Confirm Password..."
          keyboardType="visible-password"
          textContentType="password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          style={tw`rounded border border-gray-300 p-3 my-1`}
        />
        {error && (
          <Text
            style={tw`p-3 bg-red-600 text-white text-lg text-center rounded-md capitalize`}
          >
            {error}
          </Text>
        )}
        <View style={tw` items-center mt-8`}>
          <TouchableOpacity
            style={tw`bg-[#0081C9] w-1/2 p-3 rounded-full text-center`}
            onPress={handleRegister}
          >
            <Text style={tw`text-center text-white font-bold text-[16px]`}>
              Registration
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default RegisterScreen;
