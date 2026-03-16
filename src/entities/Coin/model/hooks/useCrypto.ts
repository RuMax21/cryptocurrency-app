import { useState } from 'react';
import { DEFAULT_CRYPTO, REFETCH_INTERVAL } from '../constants';
import { useQueries, useQueryClient } from '@tanstack/react-query';
import { getPrices } from '../../api';
import type { PricesResponse } from '../types';

export const useCrypto = () => {
  const [coinIds, setCoinIds] = useState<string[]>([DEFAULT_CRYPTO]);
  const queryClient = useQueryClient();
  const [prevData, setPrevData] = useState<PricesResponse | null>(null);

  const results = useQueries({
    queries: coinIds.map(id => ({
      queryKey: ['price', id],
      queryFn: async () => {
        const newData = await getPrices([id]);
        setPrevData(prev => ({ ...prev, [id]: data?.[id] ?? prev?.[id] }));
        return newData;
      },
      refetchInterval: REFETCH_INTERVAL,
      placeholderData: (previousData: PricesResponse) => previousData,
    })),
  });

  const data: PricesResponse = results.reduce((accumulate, result) => {
    if (result.data) return { ...accumulate, ...result.data };
    return accumulate;
  }, {});

  const isLoading = results.length > 0 && results.every(r => r.isLoading);
  const isError = results.some(r => r.isError);

  const addCoin = (id: string) => {
    const normalized = id.toUpperCase();
    if (!coinIds.includes(normalized)) {
      setCoinIds(prev => [...prev, normalized]);
    }
  };

  const deleteCoin = (id: string) => {
    setCoinIds(prev => prev.filter(item => item !== id));
    queryClient.removeQueries({ queryKey: ['price', id] });
  };

  const updateAll = () => {
    queryClient.invalidateQueries({ queryKey: ['price'] });
  };

  const updateOne = async (id: string) => {
    queryClient.invalidateQueries({ queryKey: ['price', id] });
  };

  return {
    data,
    prevData,
    isLoading,
    isError,
    addCoin,
    deleteCoin,
    updateAll,
    updateOne,
  };
};
