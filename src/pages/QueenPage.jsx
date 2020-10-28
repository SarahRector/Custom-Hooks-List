import React from 'react';
import { useState } from 'react';
import QueenList from '../components/all-queens/QueenList';

const QueenPage = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <button
        onClick={() => setPage(page => page - 1)}
        disabled={page <= 1}
      >&lt;</button>

      <button
        onClick={() => setPage(page => page + 1)}
        disabled={page >= 25}
      >&gt;</button>
      <QueenList page={page} />
    </>
  );
};

export default QueenPage;
