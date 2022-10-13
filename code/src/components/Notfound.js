import React from 'react';
import { useNavigate } from 'react-router';

export const Notfound = () => {
  const navigate = useNavigate();
  const returnToDefaultPage = () => {
    navigate('/');
  }
  return (
    <div>
      This route doesnt exist SORRY!
      <button type="button" onClick={returnToDefaultPage}>Go to default page</button>
    </div>
  );
}
export default Notfound;
