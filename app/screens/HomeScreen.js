import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import SafeAreaWrapper from "../configs/SafeAreaWrapper";

const HomeScreen = () => {
  return (
    <SafeAreaWrapper>
      <View>
        <Text>hello i am babu</Text>
      </View>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
