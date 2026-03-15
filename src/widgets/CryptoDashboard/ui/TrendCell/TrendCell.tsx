import { Minus, TrendingDown, TrendingUp } from 'lucide-react';
import type { TrendCellProps } from '../../model';
import styles from './TrendCell.module.scss';

export const TrendCell = ({ price, prevPrice }: TrendCellProps) => {
  if (!prevPrice) return <Minus />;
  if (price > prevPrice)
    return (
      <span className={`${styles.wrapper} ${styles.up}`}>
        ${prevPrice}
        <TrendingUp />
      </span>
    );
  if (price < prevPrice)
    return (
      <span className={`${styles.wrapper} ${styles.down}`}>
        ${prevPrice}
        <TrendingDown className={styles.down} />
      </span>
    );
  return <Minus size={16} />;
};
