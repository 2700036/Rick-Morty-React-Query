import { useQuery } from 'react-query';
import { ItemType } from './types';

const useRickMortyItemsById = <T>(item: ItemType, id: string) => {
  return useQuery<T, Error>(
    [item, id],
    () =>
      fetch(`https://rickandmortyapi.com/api/${item}/${id}`)
        .then((res) => res.json())
        .catch((err) => {
          throw new Error(err);
        }),
    {
      enabled: !!id,
    }
  );
};

export default useRickMortyItemsById;
