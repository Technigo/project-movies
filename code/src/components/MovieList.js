import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosStarOutline } from "react-icons/io"
import { AiFillStar } from "react-icons/ai"
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
    const [color, setColor] = useState('white');
    const [star, setStar] = useState(false);
    


    const saveMovie = (e) => {
      setLike(true)
      setName(e.target.value) ;
      localStorage.setItem('save', JSON.stringify(name));
      e.preventDefault();
  
    }


  

    const toggleLike = (e, id) => {
      
      e.preventDefault();
      console.log(e)

      document.getElementById(`${id}`).classList.toggle('red');

      //setStar(true) 

     // star ? setStar(false) : setStar(true);
      
      console.log('Toggled star is' + star);
      //setColor(star ? 'yellow' : 'white')

    }

    const toggleColor = () => {
  
      
    }


   /* const updateLikes = thoughts.map((item) => {
      if(item._id === data._id) {
      item.hearts += 1
      return item }
      
      else { return item }
  })

  setThoughts(updateLikes)*/





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
                            <Button onClick={() => saveMovie(movie.title)} onDoubleClick={() => setLike(false)} color = { like ? 'white' : 'yellow'} fontsize='3rem'  top='5%' left='75%' ><span><IoIosStarOutline /></span></Button>
                            <Button id={movie.id} onClick={(e) => {  toggleLike(e,movie.id) }} color={color} fontsize='3rem'  top='5%' left='75%' ><span>{!star ? <IoIosStarOutline /> : <AiFillStar />}</span></Button>
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