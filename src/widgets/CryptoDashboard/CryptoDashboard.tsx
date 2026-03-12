import { useMemo } from 'react';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useCrypto } from '@/entities/Coin';
import { getColumns, type CoinRow } from './model';
import { CryptoTable, CryptoToolbar } from './ui';
import type { PricesResponse } from '../../entities/Coin';

export const CryptoDashboard = () => {
  const {
    data,
    prevData,
    isLoading,
    isError,
    addCoin,
    deleteCoin,
    updateAll,
    updateOne,
  } = useCrypto();

  const rows: CoinRow[] = useMemo(() => {
    if (!data) return [];
    return Object.entries(data as PricesResponse).map(([id, value]) => ({
      id,
      price: value.USD,
      prevPrice: prevData?.[id]?.USD ?? null,
    }));
  }, [data, prevData]);

  const columns = useMemo(
    () => getColumns(deleteCoin, updateOne),
    [deleteCoin, updateOne],
  );

  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <p>Loading..</p>;
  if (isError) return <p>Error fetching prices</p>;

  return (
    <section>
      <CryptoToolbar onAdd={addCoin} onUpdateAll={updateAll} />
      <CryptoTable table={table} />
    </section>
  );
};
