import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Trailer = ({ trailer, ref, isOpen, setIsOpen }) => {

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="popup" ref={ref} onClick={toggleModal}>
        <div className="popup-inner">
          <button id="x"><FontAwesomeIcon icon="times" /></button>
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </>
  )
}