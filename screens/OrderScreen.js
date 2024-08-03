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
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  increaseItemQuantityByOne,
  decreaseItemQuantityByOne,
  clearCart,
} from "../redux/cart";

// Utility function to convert price strings to numbers
const parsePrice = (priceString) => {
  // Ensure priceString is defined and convert it to a number
  if (typeof priceString === "string") {
    // Remove non-numeric characters (like £ or $) and parse the result as a float
    return parseFloat(priceString.replace(/[^0-9.-]+/g, "")) || 0; // Default to 0 if conversion fails
  }
  return 0; // Default to 0 if priceString is not a string
};

const OrderScreen = () => {
  const cart = useSelector((state) => state.cart.items); // Access items directly
  const dispatch = useDispatch();

  const [isClicked, setIsClicked] = useState("Delivery");
  const [menu, setMenu] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8000/view-full-menu")
      .then((response) => response.json())
      .then((data) => {
        // Convert price strings to numbers
        const updatedData = data.map((category) => ({
          ...category,
          items: category.items.map((item) => ({
            ...item,
            price: parsePrice(item.price), // Convert price to number
          })),
        }));
        setMenu(updatedData);
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

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + (item.price || 0) * (item.quantity || 0),
    0
  );

  return (
    <SafeAreaView style={tw`flex-1 bg-[#ffead8]`}>
      {isLoading ? (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size="large" style={styles.activityIndicator} />
        </View>
      ) : (
        <ScrollView>
          <View style={tw`flex-1 pt-3 justify-center items-center`}>
            {/* Order type and cart section */}
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

            {/* Cart summary section */}
            <View style={tw`bg-white w-full py-4 px-6 mb-4 rounded-lg`}>
              {cart.length === 0 ? (
                <Text style={tw`text-center text-lg`}>
                  Your cart is currently empty...{"\n"}Add an item to start your
                  order.
                </Text>
              ) : (
                <View>
                  {/* Items in Cart */}
                  <Text style={tw`text-lg font-bold mb-2`}>Items in Cart:</Text>
                  {cart.map((item) => (
                    <View
                      key={item.id}
                      style={tw`flex-row justify-between items-center py-2 border-b border-gray-200`}
                    >
                      <Text style={tw`text-lg`}>{item.name}</Text>

                      <View style={tw`flex-row items-center`}>
                        <TouchableOpacity
                          onPress={() =>
                            dispatch(decreaseItemQuantityByOne(item.id))
                          }
                          style={tw`px-2`}
                        >
                          <Text style={tw`text-3xl text-red-500`}>-</Text>
                        </TouchableOpacity>

                        <Text style={tw`mx-2`}>
                          {item.quantity} x £{item.price.toFixed(2)}
                        </Text>

                        <TouchableOpacity
                          onPress={() =>
                            dispatch(increaseItemQuantityByOne(item.id))
                          }
                          style={tw`px-2`}
                        >
                          <Text style={tw`text-3xl text-green-500`}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}

                  {/* Total and Clear Cart Button */}
                  <View
                    style={tw`flex-row justify-between items-center py-4 border-t border-gray-200`}
                  >
                    <Text style={tw`text-xl font-bold`}>
                      TOTAL: £{totalPrice.toFixed(2)}
                    </Text>

                    <TouchableOpacity
                      style={tw`bg-blue-500 py-1 px-4 rounded-lg`}
                      onPress={() => dispatch(clearCart())}
                    >
                      <Text style={tw`text-white text-center text-lg`}>
                        Clear Cart
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {/* Checkout Button */}
                  <View style={tw`mt-4`}>
                    <TouchableOpacity
                      style={tw`bg-green-500 py-2 px-4 w-3/4 mx-auto rounded-lg`}
                    >
                      <Text style={tw`text-white text-center text-lg`}>
                        CHECKOUT
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>

            {/* Item select section */}
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
                      <Text style={tw`pt-2`}>{item.description}</Text>
                      <Text style={tw`pt-2 text-sm text-gray-600`}>
                        £{item.price.toFixed(2)}
                      </Text>
                      <TouchableOpacity
                        style={tw`bg-blue-500 py-1 px-2 rounded-lg mt-2`}
                        onPress={() =>
                          dispatch(
                            addItemToCart({
                              id: item._id,
                              name: item.name,
                              price: item.price,
                              quantity: 1,
                            })
                          )
                        }
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
