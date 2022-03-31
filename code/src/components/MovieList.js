import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { API_URL } from "ultils/API_URLS";


const SortMenu = styled.select`
width: 150px;
height: 40px;
background: #000;
color: #fff;
border: transparent;
outline: none;
font-size: 14px;
font-weight: bold;
appearance: none;
padding: 10px;
text-align: center;

&:focus {
  border: solid 2px red;
}

option {
  color: black;
  background: white;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;

}
`

const MovieWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  
`
const CoverArt = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
`
const MovieCard = styled.div`
  width: 25vw;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 50vw;
  }

  @media (min-width: 601px) and (max-width: 1100px) {
    width: 33.333333vw;
  }
`
const Title = styled.p`
  bottom: 4rem;
  position: absolute;
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  z-index: 100;
  width: 100%;
  text-wrap: wrap;


  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
  @media (min-width: 601px) and (max-width: 1100px) {
    font-size: 2rem;
  }
`
const Release = styled.p`
bottom: 2rem;
  position: absolute;
  color: white;
  font-size: 18px;
  font-weight: 400;
  z-index: 100;
  width: 100%
`
const Hover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 1rem;
  opacity: 0;
  transition-duration: 0.2s;


  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.700);
  }

  @media (max-width: 600px) {
    opacity: 1;
    background-image: linear-gradient(180deg, transparent, transparent, rgba(0, 0, 0, 0.800));

  }
  
`
const LoadingDiv = styled.div`

  background-color: black;
  width: 100vw;
  height: 100vh;
`

const LoadingText = styled.p`
  font-size: 3rem;
  color: white;
  text-align: center;
  padding-top: 10rem;
`


const MovieList = ( {movieList, setMovieList} ) => {
    


    //This state to filter  movies - TESTING
    const [sorted, setSorted] = useState('');

    const [loading, isLoading] = useState()
  // const [filter, setFilter] = useState();
 
  
    
    // Use Effect for sort dropdow menus
    useEffect(() => {
      
      if (sorted === 'latest') {
        const sortedReleaseDate = [...movieList];
        setMovieList(sortedReleaseDate.sort((a,b) => a.release_date < b.release_date ? 1 : -1))
        
       } else if (sorted === 'popular') {
         const sortedPopularity = [...movieList]
        setMovieList(sortedPopularity.sort((a,b) => a.popularity < b.popularity ? 1 : -1))
       } 
   
       
    },[sorted])

   

    

  
      if (movieList) {

      return <>
      

          
          { !loading ?
            <main>
              // dropdown copied from Suki
              <SortMenu value={sorted} onChange={(e) => setSorted(e.target.value)}>
                <option value='' disabled>Sort by</option>
                <option value='latest'>Latest</option>
                <option value='popular'>Most Popular</option>
            </SortMenu>

              <MovieWrapper>
                
                {movieList.map((movie) => {
                return <Link key={movie.id} to={`${movie.id}`}>
                  <MovieCard key={movie.id}>
                          
                          <CoverArt src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                            <Hover>
                            <Title>{movie.title}</Title>
                            <Release>{movie.release_date}</Release>
                            </Hover>
                              
                      </MovieCard>
                      </Link>
                })}
              </MovieWrapper> 
              </main>

      // This renders when loading:
          : <LoadingDiv>
            <LoadingText>Loading...</LoadingText>
            </LoadingDiv> }
            </>
                  
                        
          
            }
            


}

export default MovieList