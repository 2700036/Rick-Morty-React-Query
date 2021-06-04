import React, { useState } from 'react';
import { Episode } from '../components/types';
import CardsList from '../components/CardsList';
import EpisodeCard from '../components/EpisodeCard';
import useRickMortyItems from '../hooks/useRickMortyItems';
import { Route } from 'react-router-dom';
import EpisodeDetails from '../components/EpisodeDetails';
import Popup from '../components/Popup';

const Episodes = () => {
  const [page, setPage] = useState<number>(1);
  const { isLoading, error, data } = useRickMortyItems<Episode>('episode', page);

  return (
    <>
      <CardsList<Episode> isLoading={isLoading} error={error} data={data} page={page} setPage={setPage}>
        {data &&
          data.results.map((it: Episode, i) => {
            return <EpisodeCard key={i} {...it} />;
          })}
      </CardsList>
      <Route
        path='/episodes/:id'
        render={(props) => (
          <Popup>
            <EpisodeDetails {...props} />
          </Popup>
        )}
      />
    </>
  );
};

export default Episodes;
