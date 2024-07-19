import { create } from "zustand";

const useMultiStore = create((set, get) => ({
  numPlayers: 1,
  players: [
    {
      id: 0,
      name: "Player 1",
      stats: {
        resources: 0,
        carbon: 0,
        residentialTiles: 0,
        commercialTiles: 0,
        industrialTiles: 0,
        greenTiles: 0,
        goldTiles: 0,
      },
      tileEffect: {
        residentialEC: 2,
        commercialEC: 4,
        industrialEC: 5,
        greenEC: 0,
        residentialCO: 1,
        commercialCO: 1,
        industrialCO: 3,
        greenCO: -2,
      },
      tileCost: {
        residential: 5,
        commercial: 10,
        industrial: 10,
        green: 5,
        gold: 50,
      },
      tileEffects: {
        CO: 0,
        EC: 0,
      },
    },
    {
      id: 1,
      name: "Player 2",
      stats: {
        resources: 0,
        carbon: 0,
        residentialTiles: 0,
        commercialTiles: 0,
        industrialTiles: 0,
        greenTiles: 0,
        goldTiles: 0,
      },
      tileEffect: {
        residentialEC: 2,
        commercialEC: 4,
        industrialEC: 5,
        greenEC: 0,
        residentialCO: 1,
        commercialCO: 1,
        industrialCO: 3,
        greenCO: -2,
      },
      tileCost: {
        residential: 5,
        commercial: 10,
        industrial: 10,
        green: 5,
        gold: 50,
      },
      tileEffects: {
        CO: 0,
        EC: 0,
      },
    },
    {
      id: 2,
      name: "Player 3",
      stats: {
        resources: 0,
        carbon: 0,
        residentialTiles: 0,
        commercialTiles: 0,
        industrialTiles: 0,
        greenTiles: 0,
        goldTiles: 0,
      },
      tileEffect: {
        residentialEC: 2,
        commercialEC: 4,
        industrialEC: 5,
        greenEC: 0,
        residentialCO: 1,
        commercialCO: 1,
        industrialCO: 3,
        greenCO: -2,
      },
      tileCost: {
        residential: 5,
        commercial: 10,
        industrial: 10,
        green: 5,
        gold: 50,
      },
      tileEffects: {
        CO: 0,
        EC: 0,
      },
    },
    {
      id: 3,
      name: "Player 4",
      stats: {
        resources: 0,
        carbon: 0,
        residentialTiles: 0,
        commercialTiles: 0,
        industrialTiles: 0,
        greenTiles: 0,
        goldTiles: 0,
      },
      tileEffect: {
        residentialEC: 2,
        commercialEC: 4,
        industrialEC: 5,
        greenEC: 0,
        residentialCO: 1,
        commercialCO: 1,
        industrialCO: 3,
        greenCO: -2,
      },
      tileCost: {
        residential: 5,
        commercial: 10,
        industrial: 10,
        green: 5,
        gold: 50,
      },
      tileEffects: {
        CO: 0,
        EC: 0,
      },
    },
  ],
  currentPlayerIndex: 0,

  incrementStat: (playerId, statName, amount) =>
    set((state) => {
      const playerIndex = state.players.findIndex((p) => p.id === playerId);
      const player = state.players[playerIndex];
      let newResources = player.stats.resources;

      switch (statName) {
        case "resources":
          newResources += amount;
          break;
        case "residentialTiles":
          newResources -= player.tileCost.residential * amount;
          break;
        case "commercialTiles":
          newResources -= player.tileCost.commercial * amount;
          break;
        case "industrialTiles":
          newResources -= player.tileCost.industrial * amount;
          break;
        case "greenTiles":
          newResources -= player.tileCost.green * amount;
          break;
        case "goldTiles":
          newResources -= player.tileCost.gold * amount;
          break;
      }

      return {
        players: [
          ...state.players.slice(0, playerIndex),
          {
            ...player,
            stats: {
              ...player.stats,
              [statName]: player.stats[statName] + amount,
              resources: newResources,
            },
          },
          ...state.players.slice(playerIndex + 1),
        ],
      };
    }),

  decrementStat: (playerId, statName, amount) =>
    set((state) => {
      const playerIndex = state.players.findIndex((p) => p.id === playerId);
      const player = state.players[playerIndex];
      let newResources = player.stats.resources;

      switch (statName) {
        case "resources":
          newResources -= amount;
          break;
      }

      return {
        players: [
          ...state.players.slice(0, playerIndex),
          {
            ...player,
            stats: {
              ...player.stats,
              [statName]: player.stats[statName] - amount,
              resources: newResources,
            },
          },
          ...state.players.slice(playerIndex + 1),
        ],
      };
    }),

  setStat: (playerId, statName, newStatValue) =>
    set((state) => {
      const playerIndex = state.players.findIndex((p) => p.id === playerId);
      const player = state.players[playerIndex];
      return {
        players: [
          ...state.players.slice(0, playerIndex),
          {
            ...player,
            stats: {
              ...player.stats,
              [statName]: player.stats[statName] + newStatValue,
            },
          },
          ...state.players.slice(playerIndex + 1),
        ],
      };
    }),

  newTurnCO: (playerId) =>
    set((state) => {
      const playerIndex = state.players.findIndex((p) => p.id === playerId);
      const player = state.players[playerIndex];
      const newCarbon =
        player.stats.carbon +
        player.stats.residentialTiles * player.tileEffect.residentialCO +
        player.stats.commercialTiles * player.tileEffect.commercialCO +
        player.stats.industrialTiles * player.tileEffect.industrialCO +
        player.stats.greenTiles * player.tileEffect.greenCO;

      return {
        players: [
          ...state.players.slice(0, playerIndex),
          {
            ...player,
            stats: {
              ...player.stats,
              carbon: newCarbon < 0 ? 0 : newCarbon,
            },
          },
          ...state.players.slice(playerIndex + 1),
        ],
      };
    }),

  newTurnEC: (playerId) =>
    set((state) => {
      const playerIndex = state.players.findIndex((p) => p.id === playerId);
      const player = state.players[playerIndex];
      return {
        players: [
          ...state.players.slice(0, playerIndex),
          {
            ...player,
            stats: {
              ...player.stats,
              resources:
                player.stats.resources +
                player.stats.residentialTiles *
                  player.tileEffect.residentialEC +
                player.stats.commercialTiles * player.tileEffect.commercialEC +
                player.stats.industrialTiles * player.tileEffect.industrialEC +
                player.stats.greenTiles * player.tileEffect.greenEC,
            },
          },
          ...state.players.slice(playerIndex + 1),
        ],
      };
    }),

  setTilesEffects: (playerId) =>
    set((state) => {
      const playerIndex = state.players.findIndex((p) => p.id === playerId);
      const player = state.players[playerIndex];
      const residentialTiles = player.stats.residentialTiles || 0;
      const commercialTiles = player.stats.commercialTiles || 0;
      const industrialTiles = player.stats.industrialTiles || 0;
      const greenTiles = player.stats.greenTiles || 0;

      return {
        players: [
          ...state.players.slice(0, playerIndex),
          {
            ...player,
            tileEffects: {
              CO:
                residentialTiles * player.tileEffect.residentialCO +
                commercialTiles * player.tileEffect.commercialCO +
                industrialTiles * player.tileEffect.industrialCO +
                greenTiles * player.tileEffect.greenCO,
              EC:
                residentialTiles * player.tileEffect.residentialEC +
                commercialTiles * player.tileEffect.commercialEC +
                industrialTiles * player.tileEffect.industrialEC +
                greenTiles * player.tileEffect.greenEC,
            },
          },
          ...state.players.slice(playerIndex + 1),
        ],
      };
    }),

  setNumPlayers: (num) =>
    set((state) => ({
      numPlayers: num,
    })),

  setCurrentPlayer: () =>
    set((state) => {
      const numPlayers = state.numPlayers;
      const nextPlayerIndex = (state.currentPlayerIndex + 1) % numPlayers;
      return {
        currentPlayerIndex: nextPlayerIndex,
      };
    }),
}));

export default useMultiStore;
