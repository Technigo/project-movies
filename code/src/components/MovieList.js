import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosStarOutline } from "react-icons/io"
import Button from "styles/Button";

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
  object-fit: contain;
  border: 0px;

  
`
const MovieCard = styled.div`
  width: 25vw;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;

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
  max-width: 80%;
  text-wrap: wrap;
  line-height: 1.4;



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
  opacity: 0;
  transition-duration: 0.2s;
  padding: 20px;


  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.700);
  }

  @media (max-width: 600px) {
    opacity: 1;
    background-image: linear-gradient(180deg, transparent, transparent, rgba(0, 0, 0, 0.800));

  }
  
`


const MovieList = ( {movieList, setMovieList} ) => {
    
    
    const [like, setLike] = useState(false);

    const saveMovie = (title) => {
      setLike(true)
      localStorage.setItem('save', JSON.stringify(title));
  
    }



    //This state to filter  movies - TESTING
    const [sorted, setSorted] = useState('');
    const [searchInput, setSearchInput] = useState('');
  
    const options = {
      method: 'POST',
      headers: {
          'Content-Type':'application/json',
      },
      body: JSON.stringify({ message: searchInput}),
  }

  
    
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

      console.log(movieList)

      if (movieList) {

      return <main>

       

              <SortMenu value={sorted} onChange={(e) => setSorted(e.target.value)}>
                <option value='' disabled>Sort by</option>
                <option value='latest'>Latest</option>
                <option value='popular'>Most Popular</option>
            </SortMenu>

              <MovieWrapper>
                
                {movieList.map((movie) => {
                return  <Link key={movie.id} to={`details/${movie.id}`}>
                    
                       <MovieCard key={movie.id}>
                          <CoverArt src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}/>
                            <Hover>
                            <Title>{movie.title}</Title>
                            <Button onClick={() => setLike(true)} onDoubleClick={() => setLike(false)} color = { like ? 'white' : 'yellow'} fontsize='3rem'  top='5%' left='75%' ><span><IoIosStarOutline /></span></Button>

                            <Release>{movie.release_date}</Release>
                            </Hover>
                              
                      </MovieCard>
                      </Link>
                })}
              </MovieWrapper> 
              </main>

 
                  
                          
            }
            
         return null;

}

export default MovieList