import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import tw from "twrnc";

const ReservationItem = ({ reservation }) => (
  <View style={tw`bg-white p-4 mb-2 rounded-lg shadow`}>
    <Text style={tw`text-xl font-semibold`}>{reservation.name}</Text>
    <Text style={tw`text-gray-600`}>{reservation.date}</Text>
  </View>
);

const ReservationsScreen = ({ navigation }) => {
  const [reservations, setReservations] = useState([
    { id: "1", name: "Dinner with Family", date: "2024-08-15" },
    { id: "2", name: "Business Meeting", date: "2024-08-20" },
    // Add more reservation items here
  ]);

  const handleAddReservation = () => {
    // Navigation logic to a screen where you can add a new reservation
    navigation.navigate("AddReservation");
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-[#ffead8]`}>
      <View style={tw`flex-1 p-4`}>
        <Text style={tw`text-3xl font-bold mb-4`}>Your Reservations</Text>
        <FlatList
          data={reservations}
          renderItem={({ item }) => <ReservationItem reservation={item} />}
          keyExtractor={(item) => item.id}
        />
        <TouchableOpacity
          style={tw`bg-[#333333] rounded-full px-6 py-3 mt-4`}
          onPress={handleAddReservation}
        >
          <Text style={tw`text-2xl font-bold text-white text-center`}>
            Add Reservation
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ReservationsScreen;
