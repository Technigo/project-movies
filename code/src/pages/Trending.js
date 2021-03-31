import React from 'react';

import { URL_TRENDING } from 'utils/apiConfig';
import { useFetch } from 'utils/hooks';

import List from 'components/Styled/List';
import RoutePosterLink from 'components/Styled/RoutePosterLink';
import Poster from 'components/Poster';
import LoaderSpinner from 'components/LoaderSpinner'

const Trending = () => {
  const { data, loading } = useFetch(
    `${URL_TRENDING}?api_key=ad4add0250df7c550404efa399902a8a`
  );
  return (
    <>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <List>
          {data.results.map((movie) => (
            <RoutePosterLink key={movie.id} to={`/movies/${movie.id}`}>
              <Poster {...movie} />
            </RoutePosterLink>
          ))}
        </List>
      )}
    </>
  );
};

export default Trending;
