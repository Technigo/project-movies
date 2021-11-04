import React from 'react'
import { Link } from 'react-router-dom'

const countries = {
  sweden: 'SE',
  japan: 'JP',
  india: 'IN',
  iran: 'IR',
  thailand: 'TH',
  china: 'CN',
  morocco: 'MA',
  mexico: 'MX',
  egypt: 'EG',
  brazil: 'BR',
  turkey: 'TR',
  croatia: 'HR',
}

const FirstPage = () => {
  return (
    // <form onSubmit={onHandleSubmit}>
    //   <label htmlFor='country'>
    //     Choose country here
    //     <select onChange={onCountryChange} required id='country'>
    //       <option value=''>Choose country here</option>
    //       <option value='SE'>Sweden</option>
    //       <option value='JP'>Japan</option>
    //     </select>
    //   </label>
    //   {console.log('inside FirstPage cl', country)}
    //   <button type='submit'>Submit</button>
    // </form>

    <>
      {/* <div>
        <button type='button' onClick={onCountryChange} value='SE'>
          Sweden
        </button>
        <button type='button' onClick={onCountryChange} value='JP'>
          Japan
        </button>
      </div> */}

      <Link to={`/list/${countries.sweden}`}>Sweden</Link>
      <Link to={`/list/${countries.japan}`}>Japan</Link>
      <Link to={`/list/${countries.india}`}>India</Link>
      <Link to={`/list/${countries.iran}`}>Iran</Link>
      <Link to={`/list/${countries.thailand}`}>Thailand</Link>
      <Link to={`/list/${countries.china}`}>China</Link>
      <Link to={`/list/${countries.morocco}`}>Morocco</Link>
      <Link to={`/list/${countries.mexico}`}>Mexico</Link>
      <Link to={`/list/${countries.egypt}`}>Egypt</Link>
      <Link to={`/list/${countries.brazil}`}>Brazil</Link>
      <Link to={`/list/${countries.turkey}`}>Turkey</Link>
      <Link to={`/list/${countries.croatia}`}>Croatia</Link>
    </>
  )
}

export default FirstPage
