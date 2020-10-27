import React from 'react';
import PropTypes from 'prop-types';
import { useQueens } from '../../hooks/queens';
import QueenItem from './QueenItem';
import { Link } from 'react-router-dom';

const QueenList = ({ page }) => {
  const { loading, queens } = useQueens(page);
  if(loading) return <h1>Loading...</h1>;

  const queenElements = queens.map(queen => (
    <li key={queen.id}>
      <Link to={`/queens/${queen.id}`}>
        <QueenItem {...queen} />
      </Link>
    </li>
  ));

  return (
    <ul data-testid="queens">
      {queenElements}
    </ul>
  );
};

QueenList.propTypes = {
  page: PropTypes.number
};

export default QueenList;
