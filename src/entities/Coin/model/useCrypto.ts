import { useState, useEffect } from 'react';
import { DEFAULT_CRYPTO, REFETCH_INTERVAL } from './constants';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getPrices } from '../api';
import type { PricesResponse } from './types';

export const useCrypto = () => {
  const [coinIds, setCoinIds] = useState<string[]>([DEFAULT_CRYPTO]);
  const queryClient = useQueryClient();
  const [prevData, setPrevData] = useState<PricesResponse | null>(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['prices', coinIds],
    queryFn: async () => {
      const newData = await getPrices(coinIds);
      setPrevData(prev => ({ ...prev, ...data }));
      return newData;
    },
    refetchInterval: REFETCH_INTERVAL,
  });

  const addCoin = (id: string) => {
    const normalized = id.toUpperCase();
    if (!coinIds.includes(normalized)) {
      setCoinIds(prev => [...prev, normalized]);
    }
  };

  const deleteCoin = (id: string) => {
    setCoinIds(prev => prev.filter(item => item !== id));
  };

  const updateAll = () => {
    queryClient.invalidateQueries({ queryKey: ['prices'] });
  };

  const updateOne = () => {
    queryClient.invalidateQueries({ queryKey: ['prices', coinIds] });
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
