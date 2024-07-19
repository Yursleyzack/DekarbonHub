import { Text, View } from "react-native";
import React from "react";
import { colours, styles } from "../Styles/styles";

const TileEffectDisplay = ({ text, co, ec, otherStyle }) => {
  return (
    <View style={[styles.display, otherStyle]}>
      <Text style={styles.displayText}>{text}</Text>
      <View style={styles.TileEffectsView}>
        <TileEffects colour={colours.accent1} text={"CO"} num={co} />
        <TileEffects colour={colours.accent2} text={"EC"} num={ec} />
      </View>
    </View>
  );
};

export default TileEffectDisplay;

function TileEffects({ text, num, colour }) {
  return (
    <View>
      <Text style={[styles.displayText, { color: colour }]}>
        {num > 0 ? "+" : null}

        {num}
      </Text>
      <Text style={styles.displayText}>{text}</Text>
    </View>
  );
}
