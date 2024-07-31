import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  Linking,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";

import tandooriTalesLogoNoBg from "../assets/images/tandoori-tales-logo-no-bg.png";

import chickenTikkaMasala from "../assets/images/chicken-tikka-masala.jpg";
import paneerButterMasala from "../assets/images/paneer-butter-masala.jpg";
import biryani from "../assets/images/biryani.jpg";
import saagPaneer from "../assets/images/saag-paneer.webp";
import lambRoganJosh from "../assets/images/lamb-rogan-josh.jpg";
import chickenBalti from "../assets/images/chicken-balti.jpg";

const HomeScreen = ({ navigation }) => {
  const navigateToOrderScreen = () => {
    navigation.navigate("Order");
  };

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
          <Text style={tw`text-base text-gray-600 text-center mt-2`}>
            Experience our authentic recipes crafted with the freshest
            ingredients by our award-winning chefs.
          </Text>
          <Text style={tw`text-base text-gray-600 text-center mt-2`}>
            Discover our menu, book a table, or order your favorite dishes for
            delivery.
          </Text>
        </View>

        {/* Featured Items Section */}
        <View style={tw`mb-4`}>
          <Text
            style={tw`text-xl text-center font-semibold text-gray-800 mb-4`}
          >
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
        <View style={tw`items-center mb-6`}>
          <Button
            title="View Full Menu"
            color="#FF6347"
            onPress={navigateToOrderScreen}
          />
        </View>

        {/* Promotions or Events Section */}
        <View style={tw`mb-6`}>
          <Text
            style={tw`text-xl text-center font-semibold text-gray-800 mb-4`}
          >
            Promotions & Events
          </Text>
          <View style={tw`bg-white p-4 rounded-lg shadow-md`}>
            <Text style={tw`text-lg font-bold text-gray-800 mb-2`}>
              Summer Special: 20% Off
            </Text>
            <Text style={tw`text-gray-700`}>
              Enjoy a 20% discount on all orders above £30 this summer. Offer
              valid until August 31.
            </Text>
          </View>
          <View style={tw`bg-white p-4 rounded-lg shadow-md mt-4`}>
            <Text style={tw`text-lg font-bold text-gray-800 mb-2`}>
              Live Music Night
            </Text>
            <Text style={tw`text-gray-700`}>
              Join us for a night of live music every Friday. Enjoy great food
              and entertainment from 7 PM onwards.
            </Text>
          </View>
        </View>

        {/* Divider */}
        <View style={tw`mb-4`}>
          <Text style={tw`text-center text-gray-500`}>------</Text>
        </View>

        {/* Customer Reviews/Testimonials Section */}
        <View style={tw`mb-6`}>
          <Text
            style={tw`text-xl text-center font-semibold text-gray-800 mb-4`}
          >
            Customer Reviews
          </Text>
          <View style={tw`bg-white p-4 rounded-lg shadow-md mb-4`}>
            <Text style={tw`text-lg font-bold text-gray-800 mb-2`}>
              John Doe
            </Text>
            <Text style={tw`text-gray-700 mb-2`}>
              "The best Indian food I’ve ever had! The service was amazing and
              the ambiance was perfect."
            </Text>
            <Text style={tw`text-yellow-500`}>★★★★★</Text>
          </View>
          <View style={tw`bg-white p-4 rounded-lg shadow-md mb-4`}>
            <Text style={tw`text-lg font-bold text-gray-800 mb-2`}>
              Jane Smith
            </Text>
            <Text style={tw`text-gray-700 mb-2`}>
              "A delightful experience. The flavors were authentic and the staff
              was incredibly friendly."
            </Text>
            <Text style={tw`text-yellow-500`}>★★★★★</Text>
          </View>
          <View style={tw`bg-white p-4 rounded-lg shadow-md`}>
            <Text style={tw`text-lg font-bold text-gray-800 mb-2`}>
              Michael Brown
            </Text>
            <Text style={tw`text-gray-700 mb-2`}>
              "Absolutely loved the food! Will definitely come back with my
              family."
            </Text>
            <Text style={tw`text-yellow-500`}>★★★★★</Text>
          </View>
        </View>

        {/* Divider */}
        <View style={tw`mb-1`}>
          <Text style={tw`text-center text-gray-500`}>------</Text>
        </View>

        {/* Contact Information and Social Media Links */}
        <View style={tw`mb-6 bg-[#FFE8D1] p-4 rounded-lg`}>
          <Text
            style={tw`text-xl text-center font-semibold text-gray-800 mb-4`}
          >
            Contact Us
          </Text>
          <View style={tw`bg-white p-4 rounded-lg shadow-md mb-4`}>
            <Text style={tw`text-lg font-bold text-gray-800 mb-2`}>
              Contact Information
            </Text>
            <Text style={tw`text-gray-700 mb-2`}>Phone: 01234 567890</Text>
            <Text style={tw`text-gray-700 mb-2`}>
              Address: 128 Queen St, Cardiff, CF10 1AA
            </Text>
            <Text style={tw`text-gray-700 mb-2`}>
              Hours: Mon-Sun 12:00 PM - 11:00 PM
            </Text>
          </View>
          <View style={tw`flex-row justify-around mt-4`}>
            <FontAwesome
              name="facebook-square"
              size={30}
              color="#3b5998"
              onPress={() =>
                Linking.openURL("https://www.facebook.com/yourrestaurant")
              }
            />
            <FontAwesome
              name="twitter-square"
              size={30}
              color="#00acee"
              onPress={() =>
                Linking.openURL("https://www.twitter.com/yourrestaurant")
              }
            />
            <FontAwesome
              name="instagram"
              size={30}
              color="#C13584"
              onPress={() =>
                Linking.openURL("https://www.instagram.com/yourrestaurant")
              }
            />
            <FontAwesome
              name="tripadvisor"
              size={30}
              color="#34e0a1"
              onPress={() =>
                Linking.openURL("https://www.tripadvisor.com/yourrestaurant")
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
