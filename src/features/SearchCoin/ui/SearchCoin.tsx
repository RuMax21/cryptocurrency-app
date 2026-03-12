import { useState } from "react";
import type { SearchCoinProps } from "../model"
import { useSearchCoin } from "../api/useSearchCoin";
import { SearchInput } from "@/shared/ui";
import { Button } from "@/shared/ui";

interface SearchCoinProps {
  onAdd: (id: string) => void;
}

export const SearchCoin = ({onAdd}: SearchCoinProps) => {
  const [query, setQuery] = useState('');
  const { mutate, isPending, isError, error } = useSearchCoin({ onSuccess: onAdd });

  const handleSearch = () => {
    if (!query.trim()) return;
    mutate(query);
  }

  return (
    <div>
      <SearchInput
        value={query}
        onSearch={setQuery}
      />
      <Button onClick={handleSearch} disabled={isPending}>
        {isPending ? 'Searching...' : 'Search'}
      </Button>
      {isError && <p>{error.message}</p>}
    </div>
  );
}