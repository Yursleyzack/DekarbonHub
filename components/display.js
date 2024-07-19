import { Text, View } from "react-native";
import React from "react";
import { styles } from "../Styles/styles";

const Display = ({ text, num, disColor, otherStyle }) => {
  return (
    <View style={[styles.display, otherStyle]}>
      <Text style={[styles.displayText, { color: disColor }]}>{text}</Text>
      <Text style={styles.displayText}>{num}</Text>
    </View>
  );
};

export default Display;
