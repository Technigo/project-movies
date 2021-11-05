import React from "react"
import styled from "styled-components"

const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  }
`

const Loader = () => {
  return (
    <div className="loader-image">
      <LoaderStyled>
        <img src="/popcorn.gif" alt="popcorn loader" />
      </LoaderStyled>
    </div>
  )
}

export default Loader
