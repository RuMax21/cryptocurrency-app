import { useState } from 'react';
import { MAX_HISTORY } from '../constants';

export const useSearchHistory = () => {
  const [history, setHistory] = useState<string[]>([]);

  const addToHistory = (id: string) => {
    setHistory(prev => {
      const filtered = prev.filter(item => item !== id);
      return [id, ...filtered].slice(0, MAX_HISTORY);
    });
  };

  const removeFromHistory = (id: string) => {
    setHistory(prev => prev.filter(item => item !== id));
  };

  return { history, addToHistory, removeFromHistory };
};
