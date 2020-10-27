import { useEffect, useState } from 'react';
import { getQueensById, getQueens } from '../services/noKeyNoShadeApi';

export const useQueens = page => {
  const [loading, setLoading] = useState(true);
  const [queens, setQueens] = useState([]);

  useEffect(() => {
    getQueens(page)
      .then(fetchedQueens => setQueens(fetchedQueens))
      .finally(() => setLoading(false));
  }, [page]);

  return {
    loading,
    queens
  };
};

export const useQueenById = id => {
  const [loading, setLoading] = useState(true);
  const [queen, setQueen] = useState(null);

  useEffect(() => {
    getQueensById(id)
      .then(fetchedQueen => setQueen(fetchedQueen))
      .finally(() => setLoading(false));
  }, [id]);

  return {
    loading,
    queen
  };
};
