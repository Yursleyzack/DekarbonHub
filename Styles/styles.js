import { StyleSheet } from "react-native";

export const colours = {
  primary1: "#99ff9d",
  primary2: "#222222",
  // primary2: "#5c995e",
  secondary: "#110b0b",
  accent1: "#ff0000",
  accent2: "#70FF00",
};

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

    backgroundColor: colours.primary1,
    alignItems: "center",
    justifyContent: "center",
  },
  //  -------------------------------DISPLAYS ----------------------------------------------------
  display: {
    backgroundColor: "black",
    width: "47%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 20,
    elevationColor: "#171717",
    shadowColor: "#171717",
    shadowOffset: { width: 8, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  displayText: {
    fontSize: 20,
    color: "white",
    margin: 6,
    fontWeight: "bold",
  },
  displayView: {
    flexDirection: "row",
    height: "15%",
    width: "85%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tileEffectsDisplay: {
    height: "25%",
    width: "85%",
  },
  TileEffectsView: {
    marginVertical: 20,
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly",
  },

  resourcesDisplay: { height: "15%", width: "80%" },
  //  -------------------------------BUTTONS ----------------------------------------------------
  btn: {
    margin: 20,
    backgroundColor: colours.accent2,
    height: "10%",
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    elevation: 20,
    elevationColor: "#171717",
    shadowColor: "#171717",
    shadowOffset: { width: 8, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },

  btnText: {
    fontSize: 20,
    color: "white",
    margin: 6,
    fontWeight: "bold",
  },
  OneUserBtns: {
    margin: 20,
    width: "85%",
    height: "15%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modifyBtn: {
    margin: 0,
    height: "100%",
    width: "50%",
  },
  tilesBtn: {
    backgroundColor: colours.secondary,
    margin: 0,
    height: "100%",
    width: "40%",
  },

  BuyBtn: {
    height: "20%",
  },

  //  -------------------------------FORMS ----------------------------------------------------
  formView: {
    overflow: "hidden",
    margin: 10,
    backgroundColor: colours.secondary,
    width: "85%",
    height: "15%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "white",
    elevation: 20,
    elevationColor: "#171717",
    shadowColor: "#171717",
    shadowOffset: { width: 8, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  formViewOpen: {
    height: "50%",
  },

  formDoneBtn: {
    margin: 0,

    width: "90%",
    height: "12%",
  },

  formCancelBtn: {
    backgroundColor: colours.accent1,
    height: "8%",
    margin: 5,
  },

  formText: {
    textAlign: "center",
    fontSize: 35,
    color: "white",
    margin: 0,
    fontWeight: "bold",
  },

  formNum: {
    margin: 0,
    color: "white",
    fontSize: 70,

    fontWeight: "bold",
  },

  changeBtns: {
    margin: 10,
    height: "16%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  changeBtn: { margin: 0, height: "100%", width: "45%" },
  //  ------------------------------- TILES ----------------------------------------------------
  tile: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  tileBackground: {
    borderRadius: 30,
    overflow: "hidden",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  tileText: {
    position: "absolute",
    bottom: 10,
    color: "white",
    fontSize: 90,
    fontWeight: "bold",
  },
  tilesView: {
    flexWrap: "wrap",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  goldTile: {
    width: 260,
  },
  buyRemoveTilesBtns: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  removeTilesBtn: {
    margin: 10,
    width: 260,
    height: 120,
    backgroundColor: colours.accent1,
  },
});
