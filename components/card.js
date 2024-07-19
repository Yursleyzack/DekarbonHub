import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";

function Card({ text, imageSrc, navigation, page }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(page)}
      style={[styles.cardContainer]}
    >
      <ImageBackground
        style={styles.image}
        source={imageSrc}
        resizeMode="cover"
      >
        <Text style={styles.cardText}>{text}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    height: "17%",
    width: "85%",
    borderRadius: 30,
    margin: "5%",
    alignItems: "center",
    justifyContent: "center",
    elevation: 20,
    elevationColor: "#171717",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  cardText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    width: "100%",
    flex: 1,
    borderRadius: 30,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});
