import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colours, styles } from "../../Styles/styles";
import Display from "../../components/display";
import Btn from "../../components/btn";
import TileEffectDisplay from "../../components/TileEffectDisplay";
import useMultiStore from "../../Stores/MultiUserStore";

const Dashboard = ({ navigation }) => {
  const {
    players,
    currentPlayerIndex,
    setCurrentPlayer,
    newTurnCO,
    newTurnEC,
  } = useMultiStore();
  const displays = [
    {
      id: 1,
      text: "CARBON OUTPUT",
      num: players[currentPlayerIndex].stats["carbon"],
      color: "red",
    },
    {
      id: 2,
      text: "ECONOMIC RESOURCES",
      num: players[currentPlayerIndex].stats["resources"],
      color: colours.accent2,
    },
  ];
  return (
    <LinearGradient
      colors={[colours.primary1, colours.primary2]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.mainContainer}
      locations={[0, 0.8]}
    >
      <View style={styles.displayView}>
        {displays.map((displayData) => (
          <Display
            key={displayData.id}
            text={displayData.text}
            num={displayData.num}
            disColor={displayData.color}
          />
        ))}
      </View>
      <Btn
        text={"NEXT TURN"}
        fn={() =>
          handleNewTurn(
            newTurnCO,
            newTurnEC,
            currentPlayerIndex,
            setCurrentPlayer
          )
        }
      />
      <TileEffectDisplay
        text={"TOTAL TILE EFFECTS"}
        otherStyle={styles.tileEffectsDisplay}
        co={players[currentPlayerIndex].tileEffects["CO"]}
        ec={players[currentPlayerIndex].tileEffects["EC"]}
      />
      <View style={styles.OneUserBtns}>
        <Btn
          text={"MODIFY POINTS"}
          mod={styles.modifyBtn}
          fn={() => navigation.navigate("MultiModifyPoints")}
        />
        <Btn
          text={"BUY"}
          mod={styles.tilesBtn}
          fn={() => navigation.navigate("MultiBuy")}
        />
      </View>
    </LinearGradient>
  );
};

function handleNewTurn(
  newTurnCO,
  newTurnEC,
  currentPlayerIndex,
  setCurrentPlayer
) {
  newTurnCO(currentPlayerIndex);
  newTurnEC(currentPlayerIndex);
  setCurrentPlayer();
}

export default Dashboard;
