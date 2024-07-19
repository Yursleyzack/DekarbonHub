import React from "react";
import Card from "../components/card";
import { colours, styles } from "../Styles/styles";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = ({ navigation }) => {
  /* ARRAYS */

  const NavBtns = [
    
    {
      id: 2,
      text: "Play",
      imageSrc: require("../components/resources/images/HomePage/Multiple_Players5.jpeg"),
      navigation: "MultiUsers",
    },
    {
      id: 3,
      text: "USER GUIDE",
      imageSrc: require("../components/resources/images/HomePage/HowtoPlay.jpeg"),
      navigation: "Home",
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
      {/* <Text>Home</Text>
      <Button
        title="Go to About Us"
        onPress={() => navigation.navigate("AboutUs")}
      /> */}

      {NavBtns.map((btnData) => (
        <Card
          key={btnData.id}
          text={btnData.text}
          imageSrc={btnData.imageSrc}
          navigation={navigation}
          page={btnData.navigation}
        />
      ))}
    </LinearGradient>
  );
};

export default HomeScreen;
