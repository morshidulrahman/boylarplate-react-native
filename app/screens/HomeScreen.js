import React from "react";
import SafeAreaWrapper from "../configs/SafeAreaWrapper";
import { Header, Service, Total_Balance } from "../components/home";

const HomeScreen = () => {
  return (
    <SafeAreaWrapper>
        <Header />
        <Total_Balance />
        <Service />
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
