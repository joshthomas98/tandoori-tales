import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";

const OrderScreen = () => {
  const [isClicked, setIsClicked] = useState("Delivery");
  const [menu, setMenu] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [basket, setBasket] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8000/view-full-menu")
      .then((response) => response.json())
      .then((data) => {
        setMenu(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching menu:", error);
        setIsLoading(false);
      });
  }, []);

  const toggleCategory = (category) => {
    setExpandedCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const addToBasket = (item) => {
    setBasket((prevState) => [...prevState, item]);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-[#ffead8]`}>
      {isLoading ? (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size="large" style={styles.activityIndicator} />
        </View>
      ) : (
        <ScrollView>
          <View style={tw`flex-1 pt-3 justify-center items-center`}>
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
            {menu.map((category) => (
              <View key={category._id} style={tw`w-full px-4`}>
                <TouchableOpacity
                  style={tw`bg-gray-300 py-2 px-4 mb-2 rounded-lg flex-row justify-between items-center`}
                  onPress={() => toggleCategory(category.category)}
                >
                  <Text style={tw`text-xl font-bold`}>{category.category}</Text>
                  {expandedCategories[category.category] ? (
                    <Entypo name="chevron-up" size={24} color="black" />
                  ) : (
                    <Entypo name="chevron-down" size={24} color="black" />
                  )}
                </TouchableOpacity>
                {expandedCategories[category.category] &&
                  category.items.map((item) => (
                    <View
                      key={item._id}
                      style={tw`bg-white py-2 px-4 mb-2 rounded-lg`}
                    >
                      <Text style={tw`text-lg font-bold`}>{item.name}</Text>
                      <Text>{item.description}</Text>
                      <Text style={tw`text-sm text-gray-600`}>
                        ${item.price}
                      </Text>
                      <TouchableOpacity
                        style={tw`bg-blue-500 py-1 px-2 rounded-lg mt-2`}
                        onPress={() => addToBasket(item)}
                      >
                        <Text style={tw`text-white text-center`}>
                          Add to Basket
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ))}
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activityIndicator: {
    transform: [{ scale: 3 }], // Adjust the scale factor as needed
  },
});
