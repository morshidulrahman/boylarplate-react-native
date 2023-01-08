import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import SafeAreaWrapper from "../configs/SafeAreaWrapper";
const Settingscreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaWrapper>
      <Text onPress={() => navigation.navigate("Details")}>Settingscreen</Text>
    </SafeAreaWrapper>
  );
};

export default Settingscreen;
