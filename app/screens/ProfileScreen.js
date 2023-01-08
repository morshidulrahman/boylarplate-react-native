<<<<<<< HEAD
import { View, Text } from "react-native";
import React from "react";

const ProfileScreen = () => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};
=======
import { View, Text } from 'react-native'
import React from 'react'
import SafeAreaWrapper from "../configs/SafeAreaWrapper"
const ProfileScreen = () => {
    return (
        <SafeAreaWrapper>
            <View>
                <Text>ProfileScreen</Text>
            </View>
        </SafeAreaWrapper>
    )
}
>>>>>>> be3aaa7268c68f2123d2398b711e838dd927b436

export default ProfileScreen;
