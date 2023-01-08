import React from "react";
import SafeAreaWrapper from "../configs/SafeAreaWrapper";
import { Header, Service, Total_Balance } from "../components/home";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaWrapper>
      <Header />
      <Total_Balance navigation={navigation} />
      <Service navigation={navigation} />
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
