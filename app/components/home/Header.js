import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = () => {
  return (
    <View style={tw`flex-row justify-between items-center px-4 py-4`}>
      <View style={tw`flex-row items-center`}>
        <Image
          style={tw`rounded-full border border-[#0081C9]`}
          source={{
            uri: "https://picsum.photos/200",
            width: 50,
            height: 50,
            resizeMode: "contain",
          }}
        />
        <View style={tw`ml-2`}>
          <Text style={tw`text-[18px]`}>Hello, Mahadi</Text>
          <Text style={tw`text-[22px] font-bold`}>Welcome Back!</Text>
        </View>
      </View>
      <TouchableOpacity style={tw`border border-gray-400 rounded-full w-10 h-10 flex-row justify-center items-center`} >
        <Text>
          <Ionicons
            name="notifications"
            size={25}
            color={"gray"}
            style={tw``}
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
