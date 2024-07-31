import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import tw from "twrnc";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const RewardsScreen = ({ navigation }) => {
  // Receive navigation prop
  const [spiceFlamesCollected, setSpiceFlamesCollected] = useState(0);

  const handleNewOrder = () => {
    // Update spice flames collected, reset if 5 are collected
    setSpiceFlamesCollected((prev) => (prev < 5 ? prev + 1 : 0));
  };

  const getRewardMessage = () => {
    if (spiceFlamesCollected === 5) {
      return "Congratulations! You have earned 50% off your next order!";
    }
    return `Collect ${5 - spiceFlamesCollected} more spice flame${
      5 - spiceFlamesCollected > 1 ? "s" : ""
    } to get 50% off your next order.`;
  };

  const navigateToOrderScreen = () => {
    navigation.navigate("Order");
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-[#ffead8]`}>
      <ScrollView
        contentContainerStyle={tw`flex-1 justify-center items-center`}
      >
        <Text style={tw`text-3xl font-bold mb-4`}>Rewards</Text>
        <View style={tw`flex-row mb-4`}>
          {[...Array(5)].map((_, index) => (
            <MaterialIcons
              key={index}
              name="local-fire-department"
              size={48}
              color={index < spiceFlamesCollected ? "red" : "grey"}
              style={tw`mx-2`}
            />
          ))}
        </View>
        <Text style={tw`text-xl mb-6 mx-3 text-center`}>
          {getRewardMessage()}
        </Text>
        <TouchableOpacity
          style={tw`bg-[#333333] rounded-full px-6 py-3`}
          onPress={navigateToOrderScreen}
        >
          <Text style={tw`text-2xl font-bold text-white text-center`}>
            Place New Order
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RewardsScreen;

const styles = StyleSheet.create({});
