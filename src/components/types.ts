import { RouteComponentProps } from 'react-router';

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: Omit<Location, 'id' | 'type' | 'dimension' | 'residents' | 'created'>;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

interface MatchParams {
  id: string;
}

export interface DetailsProps extends RouteComponentProps<MatchParams> {}
