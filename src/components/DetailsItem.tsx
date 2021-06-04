import useRickMortyItemsById from '../hooks/useRickMortyItemById';
import { Link } from 'react-router-dom';
import { getPartsFromUrl } from '../utils/utils';


export default function DetailsItem <T extends {name: string}>(props: { itemUrl: string,  }) {
  const { id, item } = getPartsFromUrl(props.itemUrl);
  const { isLoading, error, data } = useRickMortyItemsById<T>(item, id);
  return (
    <>
      {isLoading && <span>...</span>}
      <Link to={`/${item}s/${id}`}>{data && data.name}</Link>
      {error && <span>Oops...</span>}
    </>
  );
}
