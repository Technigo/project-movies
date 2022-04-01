import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Header from "./Header";
import DisplayMovieList from "./DisplayMovieList";




const MovieWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

`




const MovieList = ( {movieList, setMovieList} ) => {
    
    
    const [star, setStar] = useState(true);
    const [likes, setLikes] = useState(false);
    const [favourite, setFavourite] = useState([]);

    
    useEffect(() => {
      if (star) {
        setStar(false)
      }
      return setStar(true);
    },[favourite])
    
    const onLikeBtnClick = (e, id, movie) => {
      
      
      e.preventDefault();
      
      
      const matchStarId = movieList.find(item => item.id === id );
      
      // To toggle between like and dislike
      
      setStar(true) 
      
      // To find the correct target button and change color
      
      if (matchStarId) {
        const startBtn = document.getElementById(id);
        star ? startBtn.style.color = 'yellow' : startBtn.style.color = ''  ;
        star ? startBtn.innerHTML = '<ion-icon name="star"></ion-icon>' : startBtn.innerHTML = '<ion-icon name="star-outline"></ion-icon>';
      }
      
      
      
      setFavourite((prev) => [movie, ...prev]);
    }
    

      if (movieList) {

      return <main>


              <Header movieList={movieList} setMovieList = {setMovieList} favourite={favourite} setLikes={setLikes}/>
          
              <MovieWrapper>
                
                 {(likes ? favourite : movieList).map(movie => <DisplayMovieList movie = { movie } onLikeBtnClick = {onLikeBtnClick} />)}
              
                 
              </MovieWrapper>
              </main>

 
                  
                          
            }
            
         return null;

}

export default MovieList