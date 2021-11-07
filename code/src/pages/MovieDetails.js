import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { API_MOVIE } from 'utils/urls'
import LoadingComponent from '../components/LoadingComponent'

const DetailContainerStyled = styled.section`
  display: flex;
  justify-content: left;
  align-items: flex-end;
  min-height: 100vh;
  position: relative;
  padding: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }
`
const ArrowStyled = styled.span`
  font-size: 30px;
  margin-right: 5px;
`
// when hover over the DetailLink we want to change the styling for ArrowStyled
const DetailLinkStyled = styled(Link)`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2px 8px 6px 8px;
  border-radius: 10px;
  position: fixed;
  left: 40px;
  top: 40px;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: white;

  &:hover ${ArrowStyled} {
    color: rgb(255, 246, 0);
    margin-right: 10px;
  }
`
const BackgroundStyled = styled.img`
  object-fit: cover;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`
const PosterStyled = styled.img`
  width: 350px;
  border: 5px solid white;

  @media (max-width: 768px) {
    width: 150px;
    margin-left: 20px;
    margin-bottom: 10px;
    margin: 10px auto;
  }
`
const DetailDescriptionStyled = styled.div`
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  max-width: 500px;
  margin-left: 20px;
  padding: 10px;
  border-radius: 10px;
`
const TitleStyled = styled.h1`
  font-size: 24px;
`
const DetailRatingStyled = styled.span`
  color: #ff005c;
  font-size: 16px;
  font-weight: 700;
`
const OverviewStyled = styled.p`
  font-size: 16px;
`

const MovieDetails = () => {
  const [details, setDetails] = useState({})
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const { movieId } = useParams()
  const { countryCode } = useParams()
  const history = useHistory()

  useEffect(() => {
    fetch(API_MOVIE(movieId))
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          setDetails(data)
          setLoading(false)
        } else {
          setHasError(true)
        }
      })
      .catch(() => setHasError(true))
  }, [movieId])

  useEffect(() => {
    if (hasError) {
      history.push('/404')
    }
  }, [hasError, history])

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <DetailContainerStyled>
          <>
            <DetailLinkStyled to={`/list/${countryCode}`}>
              <ArrowStyled>&#10688;</ArrowStyled>
              Movies
            </DetailLinkStyled>
            {details.backdrop_path === null ? (
              <BackgroundStyled
                src='/assets/notitleposter.png'
                alt='not available/'
              />
            ) : (
              <BackgroundStyled
                src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`}
                alt={details.title}
              />
            )}
            {details.poster_path === null ? (
              <PosterStyled
                src='/assets/notitleposter.png'
                alt='not available/'
              />
            ) : (
              <PosterStyled
                src={`https://image.tmdb.org/t/p/w780${details.poster_path}`}
                alt={details.title}
              />
            )}
            <DetailDescriptionStyled>
              <TitleStyled>
                {details.title}&nbsp;&nbsp;
                <DetailRatingStyled>
                  {details.vote_average}/10
                </DetailRatingStyled>
              </TitleStyled>
              <OverviewStyled>{details.overview}</OverviewStyled>
            </DetailDescriptionStyled>
          </>
        </DetailContainerStyled>
      )}
    </>
  )
}

export default MovieDetails
