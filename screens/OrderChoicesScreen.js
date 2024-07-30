import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

export default function OrderChoicesScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Permission to access location was denied"
        );
      }
    })();
  }, []);

  const navigateToReservations = () => {
    navigation.navigate("Main", { screen: "Reservations" });
  };

  const navigateToTakeaway = () => {
    navigation.navigate("Main", { screen: "Menu" });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Image
        source={require("../assets/images/indian-initial-bg.jpg")}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Please select a dining option:</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToReservations}
        >
          <Text style={styles.buttonText}>Make a Reservation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToTakeaway}>
          <Text style={styles.buttonText}>Order for Takeaway</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  title: {
    fontSize: 44,
    fontFamily: "dancing-script", // Ensure this font is correctly loaded
    color: "#fff",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 22,
    fontFamily: "dancing-script", // Ensure this font is correctly loaded
    color: "#fff",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: "60%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#000", // Adjust text color as needed
  },
});
