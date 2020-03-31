import React from 'react'

export const InputRadio = ({ label, id, object, state, setState }) => {

  return (
    <>
      <p>{label}</p>

      {/* Render radio buttons from object (props) */}

      {Object.keys(object).map(function (item) {
        return (

          <div key={item} className="radio-btn">
            <input
              type="radio"
              id={item}
              value={item}
              onChange={event => setState(event.target.value)}
              checked={state === item}
              required
              name="radioBtn"
            />
            <label htmlFor={item} className="radio-label">{object[item]}</label>
          </div>

        )
      })}


    </>
  )
}