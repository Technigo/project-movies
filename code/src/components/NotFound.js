import React from 'react';
import { Link } from 'react-router-dom'
import BackButton from './BackButton'

const NotFound = () => {
//   const navigate = useNavigate();
//   const onBackToHomeButtonClick = () => {
//     navigate(-1);
//   }
  return (
    <div className="not-found-page">
      <h1>404 - Looks like you are lost.</h1>
      <BackButton />
      <Link to="/">Go Home</Link>
    </div>
  )
}

export default NotFound;