import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { URL_MOVIE } from 'utils/apiConfig';
import { useFetch } from 'utils/hooks';

import ReturnButton from 'components/ReturnButton';
import LoaderSpinner from 'components/LoaderSpinner';
import SectionDetails from 'components/SectionDetails';
import SectionCollection from 'components/SectionCollection';
import MainWrap from 'components/Styled/MainWrap';

const Movie = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data, loading } = useFetch(
    `${URL_MOVIE(id)}?api_key=ad4add0250df7c550404efa399902a8a`
  );

  useEffect(() => {
    if (data.success === false) history.push('/');
  });

  return (
    <MainWrap>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <>
          <ReturnButton path="/" />
          <SectionDetails {...data} />
          {data.belongs_to_collection !== null && (
            <SectionCollection {...data.belongs_to_collection} />
          )}
        </>
      )}
    </MainWrap>
  );
};

export default Movie;
