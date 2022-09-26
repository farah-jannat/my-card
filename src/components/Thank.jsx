import React from 'react'

function Thank(props) {
    const deleteform = props.deleteform
  return (
    <div className={deleteform?"thank":'delete'}>
        <div className="thank-circle">:)</div>
        <h1>THANK YOU!</h1>
        <p>We've added your card details</p>
        <button>Continue</button>
    </div>
  )
}

export default Thank