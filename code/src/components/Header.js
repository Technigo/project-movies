import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "styles/Button";
import { useNavigate } from "react-router-dom";




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
  cursor: pointer;


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
// const TitleText = styled.h1`

// text-align: left;
// width: 100%;
// font-size: 1.5rem;
// `

const Logo = styled.button`
border: none;
background: none;
color: white;
font-size: 2rem;
font-weight: 500;
left: 1rem;
width: 100%;
text-align: left;
cursor: pointer;
`

const Favoritebutton = styled.button`
width: 150px;
height: 50px;
background: transparent;
color: white;
border: transparent;
outline: none;
font-size: 18px;
font-weight: bold;
appearance: none;
padding: 10px;
text-align: center;
cursor: pointer;



&:focus {
  border: solid 2px red;
}
`


const Header = ( { movieList, setMovieList, favourite, setLikes } ) => {

    //This state to filter  movies - TESTING
    const [sorted, setSorted] = useState('');
    const navigate = useNavigate()
     
    // Use Effect for sort dropdow menus
    useEffect(() => {

      setLikes(false)

      if (sorted === 'latest') {
       
        const sortedReleaseDate = [...movieList];
        setMovieList(sortedReleaseDate.sort((a,b) => a.release_date < b.release_date ? 1 : -1))

        
       } 
       else if (sorted === 'popular') {
        
        const sortedPopularity = [...movieList]
        setMovieList(sortedPopularity.sort((a,b) => a.popularity < b.popularity ? 1 : -1))

       }  
   
       
    },[sorted])

   
    const onBackBtnClick = () => {
      navigate("/");
      setLikes(false)

  }

    return <Heading>

                <Logo onClick={onBackBtnClick} >                
                Thea &amp; Suki's Cinema
                </Logo>
                <Favoritebutton onClick={() => setLikes(true)} >
                Favorites
                </Favoritebutton>
                <SortMenu value={sorted} onChange={(e) => setSorted(e.target.value)}>
                    <option value='' disabled>Sort by</option>
                    <option value='latest'>Latest</option>
                    <option value='popular'>Most Popular</option>

                </SortMenu>
                



    </Heading>
} 

export default Header;

