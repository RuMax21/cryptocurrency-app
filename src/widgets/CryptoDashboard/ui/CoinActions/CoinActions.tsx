import { RefreshCw, Trash2 } from 'lucide-react';
import { Button } from '@/shared/ui';
import type { CoinActionsProps } from '../../model';
import styles from './CoinActions.module.scss';

export const CoinActions = ({ onUpdate, onDelete }: CoinActionsProps) => (
  <div className={styles.actions}>
    <Button onClick={onUpdate}>
      <RefreshCw size={16} />
    </Button>
    <Button className={styles.delete} onClick={onDelete}>
      <Trash2 size={16} />
    </Button>
  </div>
);
