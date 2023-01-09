import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import SafeAreaWrapper from "../configs/SafeAreaWrapper";
import tw from "twrnc";
import { getDatabase, ref, set } from "firebase/database";
import { useSelector } from "react-redux";

const SendMoneyScreen = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(null);
  const currentUser = useSelector((state) => state);
  console.log(
    "🚀 ~ file: SendMoneyScreen.js:13 ~ SendMoneyScreen ~ currentUser",
    currentUser
  );

  useEffect(() => {
    setError(null);
  }, [email, amount]);

  const sendMoneyHandler = async () => {
    if (!email && !amount) {
      setError("email cant't be empty");
    } else if (!email.includes("@")) {
      setError("invalid email");
    } else if (amount <= 0) {
      setError("Amount cant't be 0 or less then 0");
    } else {
      const db = getDatabase();
      // set(ref(db, "users/" + userId), {
      //   fullName: 'jdfkads',
      //   email: email,
      //   amount: amount,
      // });
    }
  };

  return (
    <SafeAreaWrapper>
      <View style={tw`p-4 w-full bg-white h-full  justify-center items-center`}>
        <View style={tw`w-full px-3`}>
          <Text style={tw`text-[30px] font-bold pt-4 text-center`}>
            Send Money
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
              placeholderTextColor="gray"
            />
          </View>
          <View style={tw`my-1`}>
            <Text style={tw`font-semibold pt-2 text-lg`}>Amount</Text>
            <TextInput
              mode="flat"
              label="Amount"
              textContentType="oneTimeCode"
              keyboardType="decimal-pad"
              autoCapitalize="none"
              style={tw`rounded border border-gray-300 p-3`}
              placeholder="Enter Your Amount..."
              placeholderTextColor="gray"
              value={amount}
              onChangeText={(text) => setAmount(text)}
            />
          </View>
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
              onPress={sendMoneyHandler}
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
