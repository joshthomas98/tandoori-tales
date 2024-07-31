import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const OrderScreen = () => {
  const [isClicked, setIsClicked] = useState("Delivery");

  return (
    <SafeAreaView style={tw`flex-1 bg-[#ffead8]`}>
      <ScrollView>
        <View style={tw`flex-1 pt-3 justify-center items-center bg-blue-200`}>
          <View style={tw`flex-row mb-4`}>
            <TouchableOpacity
              style={tw`${
                isClicked === "Delivery"
                  ? "bg-[#444444] border-4 border-white shadow-lg"
                  : "bg-[#333333]"
              } rounded-full mx-2 flex-row items-center`}
              onPress={() => setIsClicked("Delivery")}
            >
              <MaterialIcons
                name="delivery-dining"
                size={28}
                color="white"
                style={tw`ml-4 mr-2`}
              />
              <Text
                style={tw`text-2xl py-3 font-bold text-white text-center pr-6`}
              >
                Delivery
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`${
                isClicked === "Collection"
                  ? "bg-[#444444] border-4 border-white shadow-lg"
                  : "bg-[#333333]"
              } rounded-full mx-2 flex-row items-center`}
              onPress={() => setIsClicked("Collection")}
            >
              <MaterialIcons
                name="storefront"
                size={28}
                color="white"
                style={tw`ml-4 mr-2`}
              />
              <Text
                style={tw`text-2xl py-3 font-bold text-white text-center pr-6`}
              >
                Collection
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
