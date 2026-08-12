import { dog } from "./dog";
import { cat } from "./cat";

export const petCatalog = [
  dog,
  cat,
  { id: "snail", name: "달팽이", emoji: "🐌", available: false },
  { id: "beetle", name: "장수풍뎅이", emoji: "🪲", available: false },
  { id: "chameleon", name: "카멜레온", emoji: "🦎", available: false },
];

export const petConfigs = {
  dog,
  cat,
};
