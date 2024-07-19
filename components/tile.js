import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { styles } from "../Styles/styles";
import useStatsStore from "../OneUserStore";

const Tile = ({ image, alt, mod, tileName }) => {
  const { stats } = useStatsStore();
  return (
    <View style={[styles.tile, mod]}>
      <ImageBackground
        source={image}
        alt={alt}
        resizeMode="cover"
        style={styles.tileBackground}
      >
        <Text style={styles.tileText}>{stats[tileName]}</Text>
      </ImageBackground>
    </View>
  );
};

export default Tile;
