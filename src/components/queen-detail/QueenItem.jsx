import React from 'react';
import { useParams } from 'react-router-dom';
import { useQueenById } from '../../hooks/queens';

const QueenItem = () => {
  const { id } = useParams();
  const { loading, queen } = useQueenById(id);
  if(loading) return <h1>Loading...</h1>;
  console.log(queen);

  return (
    <>
      <h1>{queen.name}</h1>
      <img src={queen.image_url} alt={queen.name} />
      <p>{queen.quote}</p>
    </>
  );
};

export default QueenItem;
