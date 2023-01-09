import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import SafeAreaWrapper from "../configs/SafeAreaWrapper";
import tw from "twrnc";
import DateTimePicker from "@react-native-community/datetimepicker";

const DepositeScreen = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [text, setText] = useState();

  const [card, setCard] = useState(null);
  const [name, setName] = useState(null);
  const [money, setMoney] = useState(null);
  const [ExpirationDate, setExpirationDate] = useState(null);
  const [error, setError] = useState(null);

  const onChange = (event, selectedData) => {
    const currDate = selectedData || date;
    setShow(!show);
    setDate(currDate);
    let tempDate = new Date(currDate);
    setText(tempDate);
  };
  const DepositedHandlebar = () => {
    if ((card, name, money, ExpirationDate)) {
      console.log(card, name, money, ExpirationDate);
    } else {
      setError("All input boxes must be filled");
    }
  };

  useEffect(() => {
    text &&
      setExpirationDate(
        `${text?.getDate()}-${text?.getMonth() + 1}-${text?.getFullYear()}`
      );
  }, [text]);

  return (
    <SafeAreaWrapper>
      <View style={tw`p-4 w-full bg-white h-full  justify-center items-center`}>
        <View style={tw`w-full`}>
          <Text style={tw`text-[30px] font-bold pt-4 text-center`}>
            Deposite Money
          </Text>
          {error && (
            <Text
              style={tw`text-[14px] bg-red-500 p-4 mt-3 text-white rounded text-center`}
            >
              {error}
            </Text>
          )}
          <View style={tw`my-1 mt-10`}>
            <Text style={tw`font-semibold text-lg`}>Enter Card Number*</Text>
            <TextInput
              style={tw`rounded border border-gray-300 p-2`}
              placeholder="99 - 00 - 77 - 55"
              placeholderTextColor="gray"
              keyboardType="numeric"
              value={card}
              onChangeText={(e) => setCard(e)}
            />
          </View>
          <View style={tw`my-1 `}>
            <Text style={tw`font-semibold pt-1 text-lg`}>
              Card Holder's Name*
            </Text>
            <TextInput
              style={tw`rounded border border-gray-300 p-2`}
              placeholder="Enter Name"
              placeholderTextColor="gray"
              value={name}
              onChangeText={(e) => setName(e)}
            />
          </View>
          <View style={tw`my-1`}>
            <Text style={tw`font-semibold pt-1 text-lg`}>Amount*</Text>
            <TextInput
              style={tw`rounded border border-gray-300 p-2`}
              placeholder="Enter Your Amount"
              placeholderTextColor="gray"
              keyboardType="numeric"
              value={money}
              onChangeText={(e) => setMoney(e)}
            />
          </View>
          <View style={tw`my-1`}>
            <Text style={tw`font-semibold pb-1 text-lg`}>Expiration Date*</Text>
            <Text
              onPress={() => setShow(true)}
              style={tw`rounded border border-gray-300 p-4`}
            >
              {ExpirationDate ? ExpirationDate : "Enter Date"}
            </Text>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
          <View style={tw` items-center mt-10`}>
            <TouchableOpacity
              style={tw`bg-[#0081C9] w-1/2 p-3 rounded-full text-center`}
              // eslint-disable-next-line no-undef
              onPress={() => DepositedHandlebar()}
            >
              <Text style={tw`text-center text-white font-bold text-[16px]`}>
                Deposit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default DepositeScreen;
