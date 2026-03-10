import type { BASE_CURRENCY } from "./constants";

export type CoinSymbol = string;
export type PricesResponse = Record<CoinSymbol, { [BASE_CURRENCY]: number }>;
