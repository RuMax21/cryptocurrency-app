import { cryptoApi } from '@/shared/api';
import type { CoinSymbol, PricesResponse } from '../model';
import { BASE_CURRENCY } from '../model';

export const getPrices = async (ids: CoinSymbol[]): Promise<PricesResponse> => {
  const { data } = await cryptoApi.get('/data/pricemulti', {
    params: {
      fsyms: ids.join(','),
      tsyms: BASE_CURRENCY,
    },
  });
  return data;
};

export const getCoin = async (query: string): Promise<CoinSymbol> => {
  const { data } = await cryptoApi.get('/data/pricemulti', {
    params: {
      fsyms: query.toUpperCase(),
      tsyms: BASE_CURRENCY,
    },
  });

  if (data.Response === 'Error') {
    throw new Error('Coin not found');
  }

  return query.toUpperCase();
};

export const searchCoins = async (query: string) => {
  const { data } = await cryptoApi.get('/data/all/coinlist', {
    params: {
      summary: true,
    },
  });

  const coins = Object.values(data.Data) as {
    Symbol: string;
    FullName: string;
  }[];

  return coins
    .filter(
      coin =>
        coin.Symbol.toLowerCase().includes(query.toLowerCase()) ||
        coin.FullName.toLowerCase().includes(query.toLowerCase()),
    )
    .slice(0, 10);
};
