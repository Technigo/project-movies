import React from 'react';
import Header from './Header';

const NotFound = () => {
  return (
    <div className="error-page">
      <Header />
      <h1>/404 Error</h1>
      <h2> Sorry nothing to se here... <span className="scull">☠︎</span> </h2>
    </div>)
}
export default NotFound;