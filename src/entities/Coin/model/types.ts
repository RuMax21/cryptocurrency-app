import { BASE_CURRENCY } from "./constants";

export type CoinSymbol = string;
export type PricesResponse = Record<CoinSymbol, { [BASE_CURRENCY]: number }>;

export interface CoinCardProps {
  id: CoinSymbol;
  data: PricesResponse;
  onDelete: (id: CoinSymbol) => void;
  onUpdate: (id: CoinSymbol) => void;
}
