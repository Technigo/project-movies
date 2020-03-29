import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Loading = ({ loading }) => {
  return (
    <>
      {loading && <><section className="loading"><h1>Counting to infinity</h1><em>(just kidding, but please wait)</em><h1><FontAwesomeIcon icon="spinner" className="fa-spin" /></h1></section></>}
    </>
  )
}





