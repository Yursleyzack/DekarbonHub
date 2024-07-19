import Display from "../../components/display";
import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colours, styles } from "../../Styles/styles";
import MultiTileBtn from "../../components/MultiTileBtn";
import { TilesArr } from "../../constant";
import Btn from "../../components/btn";

import MultiUsers from "./MultiUsers";
import useMultiStore from "../../Stores/MultiUserStore";

const MultiBuyTiles = ({ navigation }) => {
  // const { stats } = useStatsStore();
  const { players, currentPlayerIndex } = useMultiStore();
  return (
    <LinearGradient
      colors={[colours.primary1, colours.primary2]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.mainContainer}
      locations={[0, 0.8]}
    >
      <Display
        otherStyle={[
          styles.resourcesDisplay,
          { height: "5%", flexDirection: "row" },
        ]}
        text={"Eco-Credits:"}
        disColor={colours.accent2}
        num={players[currentPlayerIndex].stats["resources"]}
      />
      <Text>CLICK TO BUY TILES!</Text>

      <View style={styles.tilesView}>
        {TilesArr.map((TileData) => (
          <MultiTileBtn
            key={TileData.id}
            image={TileData.url}
            alt={TileData.alt}
            tileName={TileData.tileName}
            add={true}
          />
        ))}
      </View>
      <MultiTileBtn
        mod={styles.goldTile}
        image={require("../../components/resources/images/Tiles/gold.jpg")}
        alt={"Gold Tile"}
        tileName={"goldTiles"}
        add={true}
      />
      <View style={styles.buyRemoveTilesBtns}>
        <Btn
          text={"REMOVE TILES"}
          mod={[styles.removeTilesBtn]}
          fn={() => navigation.navigate("MultiRemoveTiles")}
        />
      </View>
    </LinearGradient>
  );
};

export default MultiBuyTiles;
