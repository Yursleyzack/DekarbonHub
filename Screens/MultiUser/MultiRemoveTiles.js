import { Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colours, styles } from "../../Styles/styles";
import MultiTileBtn from "../../components/MultiTileBtn";
import { TilesArr } from "../../constant";

const MultiRemoveTiles = () => {
  return (
    <LinearGradient
      colors={[colours.primary1, colours.primary2]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.mainContainer}
      locations={[0, 0.8]}
    >
      <Text>CLICK TO REMOVE TILES!</Text>

      <View style={styles.tilesView}>
        {TilesArr.map((TileData) => (
          <MultiTileBtn
            key={TileData.id}
            image={TileData.url}
            alt={TileData.alt}
            tileName={TileData.tileName}
            add={false}
          />
        ))}
      </View>
      <MultiTileBtn
        mod={styles.goldTile}
        image={require("../../components/resources/images/Tiles/gold.jpg")}
        alt={"Gold Tile"}
        tileName={"goldTiles"}
        add={false}
      />
    </LinearGradient>
  );
};

export default MultiRemoveTiles;
