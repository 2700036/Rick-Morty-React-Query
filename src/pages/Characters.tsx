import React, { useState } from 'react';
import CharacterCard from '../components/CharacterCard';
import { Character } from '../components/types';
import CardsList from '../components/CardsList';
import useRickMortyItems from '../hooks/useRickMortyItems';
import { Route } from 'react-router-dom';
import Popup from '../components/Popup';
import CharacterDetails from '../components/CharacterDetails';

const Characters = () => {
  const [page, setPage] = useState<number>(1);
  const { isLoading, error, data } = useRickMortyItems<Character>('character', page);

  return (
    <>
      <CardsList<Character> isLoading={isLoading} error={error} data={data} page={page} setPage={setPage}>
        {data &&
          data.results.map((it: Character, i) => {
            return <CharacterCard key={i} {...it} />;
          })}
      </CardsList>
      <Route
        path='/characters/:id'
        render={(props) => (
          <Popup>
            <CharacterDetails {...props} />
          </Popup>
        )}
      />
    </>
  );
};

export default Characters;
