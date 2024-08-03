import * as React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import OrderScreen from "./screens/OrderScreen";
import ReservationsScreen from "./screens/ReservationsScreen";
import RewardsScreen from "./screens/RewardsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { FontAwesome } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#FFEBE0" />
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "Order") {
                iconName = "shopping-basket";
              } else if (route.name === "Reservations") {
                iconName = "calendar";
              } else if (route.name === "Rewards") {
                iconName = "gift";
              } else if (route.name === "Profile") {
                iconName = "user";
              }

              return <FontAwesome name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#FF6347", // Active tab color
            tabBarInactiveTintColor: "gray", // Inactive tab color
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Order" component={OrderScreen} />
          <Tab.Screen name="Reservations" component={ReservationsScreen} />
          <Tab.Screen name="Rewards" component={RewardsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
