import React, { useState } from 'react';
import CardsList from '../components/CardsList';
import useRickMortyItems from '../hooks/useRickMortyItems';
import LocationCard from '../components/LocationCard';
import { Location } from '../components/types';
import { Route } from 'react-router-dom';
import LocationDetails from '../components/LocationDetails';
import Popup from '../components/Popup';

const Locations = () => {
  const [page, setPage] = useState<number>(1);
  const { isLoading, error, data } = useRickMortyItems<Location>('location', page);

  return (
    <>
      <CardsList<Location> isLoading={isLoading} error={error} data={data} page={page} setPage={setPage}>
        {data &&
          data.results.map((it: Location, i) => {
            return <LocationCard key={i} {...it} />;
          })}
      </CardsList>
      <Route
        path='/locations/:id'
        render={(props) => (
          <Popup>
            <LocationDetails {...props} />
          </Popup>
        )}
      />
    </>
  );
};

export default Locations;
