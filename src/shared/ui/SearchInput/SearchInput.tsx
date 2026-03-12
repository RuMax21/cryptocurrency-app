import type { SearchInputProps } from './types';

export const SearchInput = ({
  className,
  value,
  placeholder = 'Search..',
  onSearch,
}: SearchInputProps) => (
  <input
    className={className}
    value={value}
    placeholder={placeholder}
    onChange={e => onSearch(e.target.value)}
  />
);
