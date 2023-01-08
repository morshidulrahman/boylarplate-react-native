import { View, Text, Image } from "react-native";
import React from "react";
import SafeAreaWrapper from "../configs/SafeAreaWrapper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import tw from 'twrnc';
const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaWrapper style={tw`bg-white flex-1 pt-5`}>
      <View style={tw`p-4 w-full bg-white  justify-center items-center`}>
        <Text style={tw`text-2xl font-bold`}>Profile</Text>
        <View style={tw`bg-[#F7F6F2] rounded-full mt-10`}>
          <Image
            style={tw`rounded-full p-2`}
            source={{
              uri: "https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=",
              width: 150,
              height: 150,
              resizeMode: "contain",
            }}
          />
        </View>
        <View style={tw`items-center justify-center mt-8`}>
          <Text style={tw`text-3xl font-semibold text-[#000000] mb-1`}>Roxini Rathor</Text>
          <Text style={tw`text-sm  text-[#808080]`}>rathorcomplex@gamil.com</Text>
        </View>

      </View>
      <View style={tw`mt-5 p-10`}>
        <View style={tw`flex-row items-center mb-8 w-full`}>
          <Text style={tw`flex items-center justify-center bg-[#F7F6F2] p-2 rounded-full mr-6`}>
            <FontAwesome5
              name="key"
              size={22}
              color={"green"}
            /></Text>
          <Text style={tw`text-xl font-semibold`}>Password</Text>
        </View>
        <View style={tw`flex-row items-center mb-8 w-full`}>
          <Text style={tw`flex items-center justify-center bg-[#F7F6F2] p-2 rounded-full mr-6`}>
            <FontAwesome5
              name="language"
              size={22}
              color={"green"}
            /></Text>
          <Text style={tw`text-xl font-semibold`}>Languages</Text>
        </View>
        <View style={tw`flex-row items-center mb-8 w-full`}>
          <Text style={tw`flex items-center justify-center bg-[#F7F6F2] p-2 rounded-full mr-6`}>
            <Ionicons
              name="information-circle"
              size={22}
              color={"green"}
            /></Text>
          <Text style={tw`text-xl font-semibold`}>App information</Text>
        </View>
        <View style={tw`flex-row items-center mb-8 w-full`}>
          <Text style={tw`flex items-center justify-center bg-[#F7F6F2] p-2 rounded-full mr-6`}>
            <FontAwesome5
              name="headphones-alt"
              size={22}
              color={"green"}
            /></Text>
          <Text style={tw`text-xl font-semibold`}>Customer Care</Text>
        </View>

      </View>
    </SafeAreaWrapper>
  );
};

export default ProfileScreen;
