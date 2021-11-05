import React from 'react'
import styled from 'styled-components'

const NavStyled = styled.nav `
    position: absolute;
    right: 60px; 
    top: 20px;
    border: white 1px solid;
    padding 8px 10px;
    border-radius: 12px;
    z-index: 4;
    &:hover {
        background-color: red;
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
        <NavStyled>
            <SelectStyled value={select} onChange={onSelectChange}>
                <option value="popular">Popular</option>
                <option value="top_rated">Top rated</option>
                <option value="now_playing">Now playing</option>
                <option value="upcoming">Upcoming</option>
            </SelectStyled>
        </NavStyled>
    )
}
export default Select 
