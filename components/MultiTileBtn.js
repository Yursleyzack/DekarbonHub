import { Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { styles } from "../Styles/styles";
import { ImageBackground } from "react-native";
import useMultiStore from "../Stores/MultiUserStore";

const MultiTileBtn = ({ image, alt, mod, tileName, add }) => {
  const {
    players,
    currentPlayerIndex,
    incrementStat,
    decrementStat,
    setTilesEffects,
  } = useMultiStore();
  const playerTiles = players[currentPlayerIndex].stats[tileName];
  // Updates tile effects everytime a tile is bought
  useEffect(() => {
    setTilesEffects(currentPlayerIndex);
  }, [playerTiles]);

  return (
    <TouchableOpacity
      onPress={() =>
        add
          ? incrementStat(currentPlayerIndex, tileName, 1)
          : playerTiles > 0
          ? decrementStat(currentPlayerIndex, tileName, 1)
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
        <Text style={styles.tileText}>{playerTiles}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MultiTileBtn;
