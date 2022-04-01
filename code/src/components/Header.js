import React, {useState, useEffect} from "react";

import styled from "styled-components";


const Heading = styled.header `
  background: #000;
  display: flex;
  justify-content: flex-end;
  align-item: center;
  padding: 10px;

`

const SortMenu = styled.select`
  width: 150px;
  height: 50px;
  background: #000;
  color: #fff;
  border: transparent;
  outline: none;
  font-size: 18px;
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
const Header = ( { movieList, setMovieList, favourite } ) => {

    //This state to filter  movies - TESTING
    const [sorted, setSorted] = useState('');
     
     
    // Use Effect for sort dropdow menus
    useEffect(() => {
      
      if (sorted === 'latest') {
       
        const sortedReleaseDate = [...movieList];
        setMovieList(sortedReleaseDate.sort((a,b) => a.release_date < b.release_date ? 1 : -1))

        console.log(favourite)
        
       } 
       else if (sorted === 'popular') {
        
        const sortedPopularity = [...movieList]
        setMovieList(sortedPopularity.sort((a,b) => a.popularity < b.popularity ? 1 : -1))

       }  
       else if (sorted === 'favourite') {
         //const sortFavourite = movieList.filter(item => item.id === favourite[0]);
         setMovieList(favourite);
      
       }
   
       
    },[sorted])

    return <Heading>
                <SortMenu value={sorted} onChange={(e) => setSorted(e.target.value)}>
                    <option value='' disabled>Sort by</option>
                    <option value='latest'>Latest</option>
                    <option value='popular'>Most Popular</option>
                    <option value='favourite'>Favourite</option>

                </SortMenu>



    </Heading>
} 

export default Header;

