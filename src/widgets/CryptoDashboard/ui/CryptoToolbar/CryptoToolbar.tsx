import { SearchCoin } from '@/features/SearchCoin/ui/SearchCoin';
import type { CryptoToolbarProps } from '../model';
import { Button } from '@/shared/ui';
import styles from './CryptoToolbar.module.scss';
import { Chip } from '@/shared/ui';

export const CryptoToolbar = ({
  onAdd,
  onUpdateAll,
  history,
  onSelect,
  onRemoveFromHistory,
}: CryptoToolbarProps) => (
  <div className={styles.toolbar}>
    <div className={styles.search}>
      <SearchCoin onAdd={onAdd} />
      <Button onClick={onUpdateAll}>Update All</Button>
    </div>
    {history.length > 0 && (
      <div className={styles.chips}>
        {history.map(id => (
          <Chip
            key={id}
            label={id}
            onClick={() => onSelect(id)}
            onRemove={() => onRemoveFromHistory(id)}
          />
        ))}
      </div>
    )}
  </div>
);
