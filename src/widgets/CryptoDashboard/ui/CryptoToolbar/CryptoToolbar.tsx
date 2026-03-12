import { SearchCoin } from '@/features/SearchCoin/ui/SearchCoin';
import type { CryptoToolbarProps } from '../model';
import { Button } from '@/shared/ui';
import styles from './CryptoToolbar.module.scss';

export const CryptoToolbar = ({ onAdd, onUpdateAll }: CryptoToolbarProps) => (
  <div className={styles.toolbar}>
    <SearchCoin onAdd={onAdd} />
    <Button onClick={onUpdateAll}>Update All</Button>
  </div>
);
