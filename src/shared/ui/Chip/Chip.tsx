import { X } from 'lucide-react';
import type { ChipProps } from './types';
import styles from './Chip.module.scss';

export const Chip = ({ label, onClick, onRemove }: ChipProps) => (
  <span className={styles.chip}>
    <button onClick={onClick} className={styles.label}>
      {label}
    </button>
    <button onClick={onRemove} className={styles.remove}>
      <X size={18} />
    </button>
  </span>
);
