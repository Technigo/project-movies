/* eslint-disable linebreak-style */
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Githubicon from '../images/github.svg'
import Logoimage from '../images/moviesheader.PNG'

const Aboutus = () => {
  return (
    <section>
      <div className="aboutus"> <h2>About us!</h2>
        <button className="githubbutton" type="button" onClick={() => { window.location.href = 'https://github.com/Alexander-Gabor' }}>
          <img src={Githubicon} alt="github icon" /><p> Go to Alexander&apos;s GitHub!</p>
        </button>
        <button className="githubbutton" type="button" onClick={() => { window.location.href = 'https://github.com/MalinSkill' }}>
          <img src={Githubicon} alt="github icon" /><p>Go to Malin&apos;s GitHub!</p>
        </button>
        <img className="logo-image-aboutus" src={Logoimage} alt="site logo" />
      </div>
    </section>
  )
}

export default Aboutus;