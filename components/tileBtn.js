import { Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { styles } from "../Styles/styles";
import { ImageBackground } from "react-native";
import useStatsStore from "../Stores/OneUserStore";

const TileBtn = ({ image, alt, mod, tileName, add }) => {
  const { stats, incrementStat, decrementStat, setTilesEffects } =
    useStatsStore();
  // Updates tile effects everytime a tile is bought
  useEffect(() => {
    setTilesEffects();
  }, [stats[tileName]]);

  return (
    <TouchableOpacity
      onPress={() =>
        add
          ? incrementStat(tileName, 1)
          : stats[tileName] > 0
          ? decrementStat(tileName, 1)
          : null
      }
      style={[styles.tile, mod]}
    >
      <ImageBackground
        source={image}
        alt={alt}
        resizeMode="cover"
        style={styles.tileBackground}
      >
        <Text style={styles.tileText}>{stats[tileName]}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default TileBtn;
