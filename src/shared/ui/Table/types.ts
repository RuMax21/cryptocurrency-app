import type { ColumnDef } from '@tanstack/react-table';

export interface TableProps<T extends object> {
  rows: T[];
  columns: ColumnDef<T>[];
}
