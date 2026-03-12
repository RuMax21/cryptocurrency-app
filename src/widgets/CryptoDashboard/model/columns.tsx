import { createColumnHelper } from '@tanstack/react-table';
import type { CoinRow } from './types';
import {
  Minus,
  RefreshCw,
  Trash2,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/shared/ui';
import { CoinActions } from '../ui/CoinActions/CoinActions';

const columnHelper = createColumnHelper<CoinRow>();

export const getColumns = (
  onDelete: (id: string) => void,
  onUpdate: () => void,
) => [
  columnHelper.accessor('id', {
    header: 'Coin',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('price', {
    header: 'Price (USD)',
    cell: info => `$${info.getValue()}`,
  }),
  columnHelper.accessor('prevPrice', {
    header: 'Trend',
    cell: ({ row }) => {
      const { price, prevPrice } = row.original;
      if (!prevPrice) return <Minus />;
      if (price > prevPrice) return <TrendingUp color="green" />;
      if (price < prevPrice) return <TrendingDown color="red" />;
      return <Minus />;
    },
  }),
  columnHelper.display({
    id: 'action',
    header: 'Actions',
    cell: ({ row }) => (
      <CoinActions
        onUpdate={onUpdate}
        onDelete={() => onDelete(row.original.id)}
      />
    ),
  }),
];
