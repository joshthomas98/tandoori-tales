import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import tw from "twrnc";

const ProfileScreen = ({ navigation }) => {
  // Dummy user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture:
      "https://www.facebook.com/photo/?fbid=10224862540927973&set=a.1468054978518", // Example URL
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-[#ffead8]`}>
      <View style={tw`flex-1 p-4`}>
        {/* Profile Picture */}
        <View style={tw`items-center mb-6`}>
          <Image
            source={{ uri: user.profilePicture }}
            style={tw`w-32 h-32 rounded-full border-2 border-gray-300`}
          />
          <Text style={tw`text-2xl font-bold mt-2`}>{user.name}</Text>
          <Text style={tw`text-gray-600`}>{user.email}</Text>
        </View>

        {/* Profile Options */}
        <TouchableOpacity
          style={tw`bg-[#333333] rounded-full px-6 py-3 mb-4`}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Text style={tw`text-xl font-bold text-white text-center`}>
            Edit Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`bg-[#333333] rounded-full px-6 py-3 mb-4`}
          onPress={() => navigation.navigate("OrderHistory")}
        >
          <Text style={tw`text-xl font-bold text-white text-center`}>
            Order History
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`bg-[#333333] rounded-full px-6 py-3`}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={tw`text-xl font-bold text-white text-center`}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
