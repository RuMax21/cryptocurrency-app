import { useQuery } from '@tanstack/react-query';
import { searchCoins } from '../../../entities/Coin/api';

export const useSearchSuggestions = (query: string) => {
  return useQuery({
    queryKey: ['suggestions', query],
    queryFn: () => searchCoins(query),
    enabled: query.length > 2,
    staleTime: Infinity,
  });
};
