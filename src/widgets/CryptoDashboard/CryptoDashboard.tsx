import { useMemo } from 'react';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useCrypto } from '@/entities/Coin';
import { getColumns, type CoinRow } from './model';
import { CryptoTable, CryptoToolbar } from './ui';
import type { PricesResponse } from '@/entities/Coin';
import styles from './CryptoDashboard.module.scss';
import { useSearchHistory } from '../../shared/hooks';

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

  const { history, addToHistory, removeFromHistory } = useSearchHistory();

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

  const handleAdd = (id: string) => {
    addCoin(id);
    addToHistory(id);
  };

  if (isLoading) return <p>Loading..</p>;
  if (isError) return <p>Error fetching prices</p>;

  return (
    <section className={styles.dashboard}>
      <CryptoToolbar
        onAdd={handleAdd}
        onUpdateAll={updateAll}
        history={history}
        onSelect={handleAdd}
        onRemoveFromHistory={removeFromHistory}
      />
      <div className={styles.tableWrapper}>
        {rows.length === 0 ? (
          <p className={styles.empty}>List is empty</p>
        ) : (
          <CryptoTable table={table} />
        )}
      </div>
    </section>
  );
};
