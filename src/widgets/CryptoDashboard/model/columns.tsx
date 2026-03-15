import { createColumnHelper } from '@tanstack/react-table';
import type { CoinRow } from './types';
import { CoinActions } from '../ui/CoinActions/CoinActions';
import { TrendCell } from '../ui/TrendCell/TrendCell';

const columnHelper = createColumnHelper<CoinRow>();

export const getColumns = (
  onDelete: (id: string) => void,
  onUpdate: (id: string) => void,
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
    cell: ({ row }) => <TrendCell {...row.original} />,
  }),
  columnHelper.display({
    id: 'action',
    header: 'Actions',
    cell: ({ row }) => (
      <CoinActions
        onUpdate={() => onUpdate(row.original.id)}
        onDelete={() => onDelete(row.original.id)}
      />
    ),
  }),
];
