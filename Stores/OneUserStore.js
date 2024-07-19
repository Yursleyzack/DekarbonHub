import { create } from "zustand";

const useStatsStore = create((set) => ({
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

  incrementStat: (statName, amount) => {
    set((state) => {
      let newResources = state.stats.resources;
      switch (statName) {
        case "resources":
          newResources += amount;
          break;
        case "residentialTiles":
          newResources -= state.tileCost.residential * amount;
          break;
        case "commercialTiles":
          newResources -= state.tileCost.commercial * amount;
          break;
        case "industrialTiles":
          newResources -= state.tileCost.industrial * amount;
          break;
        case "greenTiles":
          newResources -= state.tileCost.green * amount;
          break;
        case "goldTiles":
          newResources -= state.tileCost.gold * amount;
          break;
        // Add cases for other tile types as needed
      }
      return {
        stats: {
          ...state.stats,
          [statName]: state.stats[statName] + amount,
          resources: newResources,
        },
      };
    });
  },
  decrementStat: (statName, amount) =>
    set((state) => ({
      stats: { ...state.stats, [statName]: state.stats[statName] - amount },
    })),

  setStat: (statName, newStatValue) =>
    set((state) => ({
      stats: {
        ...state.stats,
        [statName]: state.stats[statName] + newStatValue,
      },
    })),

  newTurnCO: () =>
    set((state) => {
      const newCO =
        state.stats.carbon +
        state.stats.residentialTiles * state.tileEffect.residentialCO +
        state.stats.commercialTiles * state.tileEffect.commercialCO +
        state.stats.industrialTiles * state.tileEffect.industrialCO +
        state.stats.greenTiles * state.tileEffect.greenCO;
      return {
        stats: {
          ...state.stats,
          carbon: newCO < 0 ? 0 : newCO,
        },
      };
    }),
  newTurnEC: () =>
    set((state) => ({
      stats: {
        ...state.stats,
        resources:
          state.stats.resources +
          state.stats.residentialTiles * state.tileEffect.residentialEC +
          state.stats.commercialTiles * state.tileEffect.commercialEC +
          state.stats.industrialTiles * state.tileEffect.industrialEC +
          state.stats.greenTiles * state.tileEffect.greenEC,
      },
    })),

  tileEffects: {
    CO: 0,
    EC: 0,
  },

  setTilesEffects: () =>
    set((state) => ({
      tileEffects: {
        CO:
          state.stats.residentialTiles * state.tileEffect.residentialCO +
          state.stats.commercialTiles * state.tileEffect.commercialCO +
          state.stats.industrialTiles * state.tileEffect.industrialCO +
          state.stats.greenTiles * state.tileEffect.greenCO,
        EC:
          state.stats.residentialTiles * state.tileEffect.residentialEC +
          state.stats.commercialTiles * state.tileEffect.commercialEC +
          state.stats.industrialTiles * state.tileEffect.industrialEC +
          state.stats.greenTiles * state.tileEffect.greenEC,
      },
    })),
}));

export default useStatsStore;
