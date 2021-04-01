import React from 'react';
import { useParams } from 'react-router-dom';

import { URL_COLLECTION } from 'utils/apiConfig';
import { useFetch } from 'utils/hooks';
import { getYear } from 'utils/helpers';

import ReturnButton from 'components/ReturnButton';
import LoaderSpinner from 'components/LoaderSpinner';
import SectionDetails from 'components/SectionDetails';
import MainWrap from 'components/Styled/MainWrap';
import List from 'components/Styled/List';
import RoutePosterLink from 'components/Styled/RoutePosterLink';
import Poster from 'components/Poster';

const Collection = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(
    `${URL_COLLECTION(id)}?api_key=ad4add0250df7c550404efa399902a8a`
  );

  return (
    <MainWrap>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <>
          {console.log(data)}
          <ReturnButton />
          <SectionDetails {...data} />
          {/* list of movies in collection */}
          <List pageSection>
            {data.parts.map((movie) => (
              <RoutePosterLink key={movie.id} to={`/movies/${movie.id}`}>
                <p>{movie.release_date ? getYear(movie.release_date) : 'TBA'}</p>
                <Poster {...movie} />
              </RoutePosterLink>
            ))}
          </List>
        </>
      )}
    </MainWrap>
  );
};

export default Collection;
