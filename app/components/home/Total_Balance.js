import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";

const Total_Balance = ({navigation}) => {
  return (
    <View style={tw`flex-row justify-center items-center px-4 pb-1`}>
      <View
        style={tw`flex-row justify-between items-center bg-blue-700 w-full p-7 py-9 rounded-3`}
      >
        <View style={tw`py-1`}>
          <Text style={tw`text-white text-[18px]`}>Total_Balance</Text>
          <Text style={tw`text-white text-[30px] font-bold mt-2`}>$10</Text>
        </View>
        <TouchableOpacity
         onPress={() => navigation.navigate("SendMoneyScreen")}
        >
          <Text>
            <Ionicons
              name="ios-add-circle"
              size={60}
              color={"white"}
              style={tw``}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Total_Balance;
