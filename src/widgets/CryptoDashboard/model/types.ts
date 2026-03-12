import type { Table } from '@tanstack/react-table';
import type { CoinSymbol } from '@/entities/Coin';

export interface CoinRow {
  id: CoinSymbol;
  price: number;
  prevPrice: number | null;
}

export interface CryptoTableProps {
  table: Table<CoinRow>;
}

export interface CryptoToolbarProps {
  onAdd: (id: string) => void;
  onUpdateAll: () => void;
}

export interface CoinActionsProps {
  onUpdate: () => void;
  onDelete: () => void;
}
