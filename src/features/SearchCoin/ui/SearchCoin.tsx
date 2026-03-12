import { useState } from 'react';
import styles from './SearchCoin.module.scss';
import type { SearchCoinProps } from '../model';
import { useSearchCoin } from '../api/useSearchCoin';
import { SearchInput } from '@/shared/ui';
import { Button } from '@/shared/ui';
import { useSearchSuggestions } from '../api/useSearchSuggestions';

interface SearchCoinProps {
  onAdd: (id: string) => void;
}

export const SearchCoin = ({ onAdd }: SearchCoinProps) => {
  const [query, setQuery] = useState('');
  const { mutate, isPending, isError, error } = useSearchCoin({
    onSuccess: onAdd,
  });
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const { data: suggestions } = useSearchSuggestions(query);

  const handleSelect = (symbol: string) => {
    setQuery(symbol);
    setShowSuggestions(false);
    mutate(symbol);
  };

  return (
    <div className={styles.wrapper}>
      <SearchInput
        value={query}
        onSearch={(value: string) => {
          setQuery(value);
          setShowSuggestions(true);
        }}
      />
      <Button onClick={() => mutate(query)} disabled={isPending}>
        {isPending ? 'Searching...' : 'Search'}
      </Button>

      {showSuggestions && suggestions && suggestions.length > 0 && (
        <ul className={styles.suggestions}>
          {suggestions.map(coin => (
            <li
              key={coin.Symbol}
              className={styles.suggestion}
              onClick={() => handleSelect(coin.Symbol)}
            >
              {coin.Symbol} - {coin.FullName}
            </li>
          ))}
        </ul>
      )}

      {isError && <p>{error.message}</p>}
    </div>
  );
};
