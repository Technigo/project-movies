import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import LoadingComponent from '../components/LoadingComponent'

const DetailContainerStyled = styled.section`
  display: flex;
  justify-content: left;
  align-items: flex-end;
  height: 100vh;
  position: relative;
  padding: 40px;
`

const ArrowStyled = styled.span`
  font-size: 30px;
  margin-right: 5px;
`
// when hover over the DetailLink we want to change styling for ArrowStyled
// la till en background color så att man ser länken när det är ljusare bakgrundsbild
const DetailLinkStyled = styled(Link)`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2px 8px 6px 8px;
  border-radius: 10px;
  position: absolute;
  left: 40px;
  top: 40px;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: white;

  &:hover ${ArrowStyled} {
    color: red;
    margin-right: 10px;
  }
`
// changed from background image to an img tag,
// otherwise we don't know what ${details} is and
// we can't place this styled component inside the MovieDetails function
const BackgroundStyled = styled.img`
  object-fit: cover;
  position: absolute;
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
  color: red;
  font-size: 16px;
  font-weight: 700;
`

const OverviewStyled = styled.p`
  font-size: 16px;
`

const MovieDetails = () => {
  const [details, setDetails] = useState({})
  const [loading, setLoading] = useState(true)
  const { movieId } = useParams()
  const { countryCode } = useParams()
  // const history = useHistory()

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=1cd9c12b0f59437cb1f892337285c32e&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .finally(() => setLoading(false))
  }, [movieId])

  // const onBackLinkClick = () => {
  //   history.goBack()
  //   console.log(history)
  // }

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <DetailContainerStyled>
          <>
            {console.log('insdie return on Moviedetalils')}
            <DetailLinkStyled to={`/list/${countryCode}`}>
              {/* <button
              type='button'
              onClick={onBackLinkClick}
              className='detail-link'
            ></button> */}
              <ArrowStyled>&#10688;</ArrowStyled>
              Movies
            </DetailLinkStyled>
            {/* 404 ERROR!!! När vi inte har en backgrundsbild och/eller posterbild!!! */}
            <BackgroundStyled
              src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`}
              alt={details.title}
            />
            <PosterStyled
              src={`https://image.tmdb.org/t/p/w780${details.poster_path}`}
              alt={details.title}
            />
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
