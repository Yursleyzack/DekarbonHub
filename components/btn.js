import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "../Styles/styles";

const Btn = ({ text, mod, fn }) => {
  return (
    <TouchableOpacity onPress={fn} style={[styles.btn, mod]}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Btn;
