import React from 'react'
import styled from 'styled-components'

const  NavWrapWrap = styled.div `
   position: fixed;
   display: flex;
   width: 100vw; 
   z-index: 3;
`

const NavWrapStyled = styled.div`
    width: 100vw; 
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 140px;
    max-width: 1200px;
    margin: 0 auto;

    @media (min-width: 768px) {
        height: 80px;
        max-width: 1200px;
        display: flex;
        margin: 0 auto;
        justify-content: flex-end;
        align-items: center;
    }
    
`

const NavStyled = styled.nav `
    border: white 1px solid;
    padding 8px 10px;
    border-radius: 12px;
    height: 25px;
    margin-bottom: 20px;
    z-index: 4;

    &:hover {
        background-color: red;
    }

    @media (min-width: 768px) {
        justify-content: flex-start;
        margin-right: 20px;
        margin-bottom: 0px;
    }    

    @media (min-width: 1220px) {
        margin-right: 0;
    }
`

const SelectStyled = styled.select`
    color: white;
    background-color: transparent;
    font-size: 18px;
    border: none;
`


const Select = ({ select, setSelect }) => {

    const onSelectChange = (event) => {
        setSelect(event.target.value)
    } 

    return ( 
        <NavWrapWrap>
        <NavWrapStyled>
            <NavStyled>
                <SelectStyled value={select} onChange={onSelectChange}>
                    <option value="popular">Popular</option>
                    <option value="top_rated">Top rated</option>
                    <option value="now_playing">Now playing</option>
                    <option value="upcoming">Upcoming</option>
                </SelectStyled>
            </NavStyled>
        </NavWrapStyled>
        </ NavWrapWrap>
    )
}
export default Select 
