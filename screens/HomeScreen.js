import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import React from "react";
import tw from "twrnc";

import tandooriTalesLogoNoBg from "../assets/images/tandoori-tales-logo-no-bg.png";

import chickenTikkaMasala from "../assets/images/chicken-tikka-masala.jpg";
import paneerButterMasala from "../assets/images/paneer-butter-masala.jpg";
import biryani from "../assets/images/biryani.jpg";
import saagPaneer from "../assets/images/saag-paneer.webp";
import lambRoganJosh from "../assets/images/lamb-rogan-josh.jpg";
import chickenBalti from "../assets/images/chicken-balti.jpg";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#ffead8]`}>
      <ScrollView contentContainerStyle={tw`px-4`}>
        {/* Logo Section */}
        <View style={tw`items-center mb-2`}>
          <Image
            source={tandooriTalesLogoNoBg}
            style={tw`w-40 h-40`}
            resizeMode="contain"
          />
        </View>

        {/* Welcome Message */}
        <View style={tw`mb-6`}>
          <Text style={tw`text-2xl font-bold text-gray-800 text-center`}>
            Welcome to Tandoori Tales
          </Text>
          <Text style={tw`text-base text-gray-600 text-center mt-2`}>
            Enjoy top quality Indian cuisine in the heart of Cardiff.
          </Text>
        </View>

        {/* Featured Items Section */}
        <View style={tw`mb-6`}>
          <Text style={tw`text-xl font-semibold text-gray-800 mb-4`}>
            Featured Dishes
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={tw`mr-4`}>
              <Image
                source={chickenTikkaMasala}
                style={tw`w-40 h-40 rounded-lg`}
                resizeMode="cover"
              />
              <Text style={tw`text-center text-gray-700 mt-2`}>
                Chicken Tikka Masala
              </Text>
            </View>

            <View style={tw`mr-4`}>
              <Image
                source={paneerButterMasala}
                style={tw`w-40 h-40 rounded-lg`}
                resizeMode="cover"
              />
              <Text style={tw`text-center text-gray-700 mt-2`}>
                Paneer Butter Masala
              </Text>
            </View>

            <View style={tw`mr-4`}>
              <Image
                source={biryani}
                style={tw`w-40 h-40 rounded-lg`}
                resizeMode="cover"
              />
              <Text style={tw`text-center text-gray-700 mt-2`}>Biryani</Text>
            </View>

            <View style={tw`mr-4`}>
              <Image
                source={saagPaneer}
                style={tw`w-40 h-40 rounded-lg`}
                resizeMode="cover"
              />
              <Text style={tw`text-center text-gray-700 mt-2`}>
                Saag Paneer
              </Text>
            </View>

            <View style={tw`mr-4`}>
              <Image
                source={lambRoganJosh}
                style={tw`w-40 h-40 rounded-lg`}
                resizeMode="cover"
              />
              <Text style={tw`text-center text-gray-700 mt-2`}>
                Lamb Rogan Josh
              </Text>
            </View>

            <View style={tw`mr-4`}>
              <Image
                source={chickenTikkaMasala}
                chickenBalti
                style={tw`w-40 h-40 rounded-lg`}
                resizeMode="cover"
              />
              <Text style={tw`text-center text-gray-700 mt-2`}>
                Chicken Balti
              </Text>
            </View>
          </ScrollView>
        </View>

        {/* View Menu Button */}
        <View style={tw`items-center`}>
          <Button
            title="View Full Menu"
            color="#FF6347"
            onPress={() => console.log("View Menu Pressed")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
