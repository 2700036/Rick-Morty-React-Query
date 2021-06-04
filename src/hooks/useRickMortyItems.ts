import { useQuery } from 'react-query';
import { Data, ItemType } from './types';

const useRickMortyItems = <T>(item: ItemType, page: number) => {
  return useQuery<Data<T>, Error>(`${item}s-${page}`, () =>
    fetch(`https://rickandmortyapi.com/api/${item}/?page=${page}`)
      .then((res) => res.json())
      .catch((err) => {
        throw new Error(err);
      })
  );
};

export default useRickMortyItems;
