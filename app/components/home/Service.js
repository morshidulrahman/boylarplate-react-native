import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import ServiceItem from "./ServiceItem";

import { SendMoneyScreen, DepositeScreen } from "../../screens"

const Service = ({ navigation }) => {

  return (
    <View style={tw`bg-gray-100 flex-row flex-wrap justify-between items-center py-5 px-4 `}>
      <ServiceItem
        icon="send"
        color="orange"
        name="Send Money"
        description="To acc to acc"
        navigator={() => navigation.navigate(SendMoneyScreen)}
      />
      <ServiceItem
        icon="money"
        color="green"
        name="Deposit Money"
        description="Manage Account"
        navigator={() => navigation.navigate(DepositeScreen)}
      />
    </View>
  );
};

export default Service;
