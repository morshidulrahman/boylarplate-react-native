import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import ServiceItem from "./ServiceItem";

const Service = () => {
  return (
    <View style={tw`bg-gray-100 flex-row flex-wrap justify-between items-center py-5 px-4 `}>
      <ServiceItem
        icon="send"
        color="orange"
        name="Send Money"
        description="To acc to acc"
      />
      <ServiceItem
        icon="money"
        color="green"
        name="Recive Money"
        description="Manage Account"
      />
    </View>
  );
};

export default Service;
