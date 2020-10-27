/* eslint-disable max-len */
export const getQueens = async(page = 1) => {
  const res = await fetch(`http://www.nokeynoshade.party/api/queens/all?page=${page}`);
  const json = await res.json();

  if(!res.ok) throw 'Unable to fetch';

  return json.results.map(queen => ({
    id: queen.id,
    name: queen.name,
    image_url: queen.image
  }));
};

export const getQueensById = async(id) => {
  const res = await fetch(`http://www.nokeynoshade.party/api/queens/${id}`);
  const json = await res.json();

  if(!res.ok) throw 'Unable to fetch';

  return {
    id: json.id,
    name: json.name,
    image_url: json.image,
    quote: json.quote
  };
};
