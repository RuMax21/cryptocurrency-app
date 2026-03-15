import { useMutation } from '@tanstack/react-query';
import { getCoin } from '@/entities/Coin/api';

interface UseSearchCoinProps {
  onSuccess: (id: string) => void;
}

export const useSearchCoin = ({ onSuccess }: UseSearchCoinProps) =>
  useMutation({
    mutationFn: (query: string) => getCoin(query),
    onSuccess,
  });
