import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div className="loader-container" style={{ display: 'flex', padding: 20, marginTop: 100, flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', padding: 20 }}>
        <Spinner animation="border" variant="light" /> <br />
      </div>
      <p style={{ fontSize: 20, color: 'white' }}>Loading...</p>
    </div>
  )
}

export default Loader;