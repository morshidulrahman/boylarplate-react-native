import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ServiceItem = ({ icon, color, name, description, navigator }) => {
  return (
    <TouchableOpacity
      style={tw`w-[48%] border border-gray-100 rounded-5 p-4 py-6 bg-white`}
      onPress={navigator}
    >
      <View style={tw`bg-gray-100 w-15 h-15 rounded-full justify-center items-center`}>
        <Text>
          <FontAwesome name={icon} size={35} color={color} style={tw``} />
        </Text>
      </View>
      <Text style={tw`font-bold text-[30px] my-5`}>{name}</Text>
      <Text style={tw`text-[19px]`}>{description}</Text>
    </TouchableOpacity>
  );
};

export default ServiceItem;
