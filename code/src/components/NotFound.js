import React/* , { useEffect, useState } */ from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const returnToDefaultPage = () => {
    navigate('/')
  }
  return (
    <><p>This site is not found.</p>
      <button type="button" onClick={returnToDefaultPage}>Go to default page</button>
    </>
  )
}

export default NotFound