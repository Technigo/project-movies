import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div className="loader-container" style={{ display: 'flex', padding: 20, flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', padding: 20 }}>
        <Spinner animation="border" variant="dark" /> <br />
      </div>
      <p style={{ fontSize: 20 }}>Loading...</p>
    </div>
  )
}

export default Loader;