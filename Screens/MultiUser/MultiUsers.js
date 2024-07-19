import { Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colours, styles } from "../../Styles/styles";
import useMultiStore from "../../Stores/MultiUserStore";
import Btn from "../../components/btn";

const MultiUsers = ({ navigation }) => {
  const { setNumPlayers } = useMultiStore();
  const playerNumber = [
    {
      id: 1,
      text: "1 User",
      fn: () => handleNumPlayers(1, setNumPlayers, navigation),
    },
    {
      id: 2,
      text: "2 Users",
      fn: () => handleNumPlayers(2, setNumPlayers, navigation),
    },
    {
      id: 3,
      text: "3 Users",
      fn: () => handleNumPlayers(3, setNumPlayers, navigation),
    },
    {
      id: 4,
      text: "4 Users",
      fn: () => handleNumPlayers(4, setNumPlayers, navigation),
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
      {playerNumber.map((data) => (
        <Btn key={data.id} text={data.text} fn={data.fn} />
      ))}
    </LinearGradient>
  );
};

function handleNumPlayers(num, setNumPlayers, navigation) {
  setNumPlayers(num);
  navigation.navigate("Dashboard");
}

export default MultiUsers;
