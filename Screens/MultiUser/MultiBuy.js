import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colours, styles } from "../../Styles/styles";
import Btn from "../../components/btn";
import Display from "../../components/display";

import useMultiStore from "../../Stores/MultiUserStore";

const MultiBuy = ({ navigation }) => {
  // const { stats, decrementStat } = useStatsStore();
  //decrementStat: (playerId, statName, amount)
  const { players, currentPlayerIndex, decrementStat } = useMultiStore();
  return (
    <LinearGradient
      colors={[colours.primary1, colours.primary2]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.mainContainer}
      locations={[0, 0.8]}
    >
      {/* <Display
        otherStyle={[styles.resourcesDisplay, { marginBottom: 90 }]}
        text={"Eco-Credits"}
        disColor={colours.accent2}
        num={stats.resources}
      /> */}
      <Display
        otherStyle={[
          styles.resourcesDisplay,
          { height: "5%", flexDirection: "row", marginBottom: 50 },
        ]}
        text={"Eco-Credits:"}
        disColor={colours.accent2}
        num={players[currentPlayerIndex].stats["resources"]}
      />
      <Btn
        mod={styles.BuyBtn}
        text={"Any Card (-20EC)"}
        fn={() => decrementStat(currentPlayerIndex, "resources", 20)}
      />

      <Btn
        mod={styles.BuyBtn}
        text={"Tiles"}
        fn={() => navigation.navigate("MultiBuyTiles")}
      />
    </LinearGradient>
  );
};

export default MultiBuy;
