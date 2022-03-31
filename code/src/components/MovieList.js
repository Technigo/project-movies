import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosStarOutline } from "react-icons/io"
import { AiTwotoneStar } from "react-icons/ai"
import Button from "styles/Button";
import Header from "./Header";




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
    width: 33.33vw;
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
    const [name, setName] = useState(JSON.parse(localStorage.getItem('save')));
    const [color, setColor] = useState('red');
    const [star, setStar] = useState(true);
    


    const saveMovie = (e) => {
      setLike(true)
      setName(e.target.value) ;
      localStorage.setItem('save', JSON.stringify(name));
      e.preventDefault();
  
    }

   console.log(movieList)
  

    const toggleLike = (e, id) => {
      
      e.preventDefault();

      const matchStarId = movieList.find(item => item.id === id );

      // To toggle between like and dislike
      setStar(true) 
      
      
      // To find the correct target button and change color

      //I DONT KNOW WHY, BUT I CAN'T USE REACT ICON INSDE INNER HTML. SO I HAVE TO USE EXTERNAL ICONS 😔
      if (matchStarId) {
       star ? setStar(false) : setStar(true);
       const startBtn = document.getElementById(id);
       star ? startBtn.style.color = 'yellow' : startBtn.style.color = ''  ;
       star ? startBtn.innerHTML = '<ion-icon name="star"></ion-icon>' : startBtn.innerHTML = '<ion-icon name="star-outline"></ion-icon>';
      }
     
      
    }
    console.log(star)

  


      console.log(movieList)

      if (movieList) {

      return <main>

       

              <Header movieList={movieList} setMovieList = {setMovieList} />

              <MovieWrapper>
                
                {movieList.map((movie) => {
                return  <Link key={movie.id} to={`details/${movie.id}`}>
                    
                       <MovieCard key={movie.id}>
                          <CoverArt src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}/>
                            <Hover>
                            <Title>{movie.title}</Title>
                            
                            <Button id={movie.id} onClick={(e) => { toggleLike(e,movie.id) }} fontsize='3rem' color="white"  top='5%' left='75%' ><ion-icon name="star-outline"></ion-icon></Button>

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