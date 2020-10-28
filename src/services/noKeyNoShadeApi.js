/* eslint-disable max-len */
export const getQueens = async(page = 1) => {
  const res = await fetch(`http://www.nokeynoshade.party/api/queens?limit=10&${page === 1 ? '' : `offset=${(page - 1) * 10}`}`);
  const json = await res.json();

  if(!res.ok) throw 'Unable to fetch';

  return json.map(queen => ({
    id: queen.id,
    name: queen.name,
    image_url: queen.image_url
  }));
};

export const getQueensById = async(id) => {
  const res = await fetch(`http://www.nokeynoshade.party/api/queens/${id}`);
  const json = await res.json();

  if(!res.ok) throw 'Unable to fetch';

  return {
    id: json.id,
    name: json.name,
    image_url: json.image_url,
    quote: json.quote
  };
};
