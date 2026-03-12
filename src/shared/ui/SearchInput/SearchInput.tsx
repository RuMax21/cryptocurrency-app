import type { SearchInputProps } from './types';
import styles from './SearchInput.module.scss';

export const SearchInput = ({
  className,
  value,
  placeholder = 'Search..',
  onSearch,
}: SearchInputProps) => (
  <input
    className={`${styles.input} ${className}`}
    value={value}
    placeholder={placeholder}
    onChange={e => onSearch(e.target.value)}
  />
);
