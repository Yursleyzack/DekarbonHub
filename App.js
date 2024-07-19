import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* IMPORTING SCREENS */

import HomeScreen from "./Screens/HomeScreen";

import MultiUsers from "./Screens/MultiUser/MultiUsers";
import Dashboard from "./Screens/MultiUser/Dashboard";
import MultiBuy from "./Screens/MultiUser/MultiBuy";
import MultiBuyTiles from "./Screens/MultiUser/MultiBuyTiles";
import MultiRemoveTiles from "./Screens/MultiUser/MultiRemoveTiles";
import MultiModifyPoints from "./Screens/MultiUser/MultiModifyPoints";

import useMultiStore from "./Stores/MultiUserStore";

const stack = createNativeStackNavigator();

export default function App() {
  const { players, currentPlayerIndex } = useMultiStore();
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShadowVisible: false,
          headerTransparent: true,
          title: "Carbon Zero",

          headerTintColor: "#111111",
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: "bold",
          },
        }}
      >
        <stack.Screen name="Home" component={HomeScreen} />

        <stack.Screen
          name="MultiUsers"
          component={MultiUsers}
          options={{ title: "Number of Users" }}
        />
        <stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: players[currentPlayerIndex].name }}
        />

        <stack.Screen
          name="MultiBuy"
          component={MultiBuy}
          options={{ title: "Buy?" }}
        />
        <stack.Screen
          name="MultiBuyTiles"
          component={MultiBuyTiles}
          options={{ title: "Buy Tiles" }}
        />
        <stack.Screen
          name="MultiRemoveTiles"
          component={MultiRemoveTiles}
          options={{ title: "Remove Tiles" }}
        />
        <stack.Screen
          name="MultiModifyPoints"
          component={MultiModifyPoints}
          options={{ title: "Modify Points" }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
