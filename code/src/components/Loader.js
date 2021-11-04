import React from "react"
import styled from "styled-components"

const LoaderStyled = styled.div``

const Loader = () => {
  return (
    <LoaderStyled>
      <div>
        <img src="/popcorn.gif" className="loader-image" alt="popcorn loader" />
      </div>
    </LoaderStyled>
  )
}

export default Loader
