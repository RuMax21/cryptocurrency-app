import { flexRender } from '@tanstack/react-table';
import type { CryptoTableProps } from '../../model';
import styles from './CryptoTable.module.scss';

export const CryptoTable = ({ table }: CryptoTableProps) => (
  <table className={styles.table}>
    <thead className={styles.thead}>
      {table.getHeaderGroups().map(headerGroup => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map(header => (
            <th key={header.id} className={styles.th}>
              {flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody>
      {table.getRowModel().rows.map(row => (
        <tr key={row.id} className={styles.tr}>
          {row.getVisibleCells().map(cell => (
            <td key={cell.id} className={styles.td}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
