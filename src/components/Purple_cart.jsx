import React from 'react';
import FrontCard from '../images/bg-card-front.png';

function Purple_cart(props) {
  // const {onChange,values} = props
  // const onchange = {onChange,personName}   
  // console.log(values)
 
  return (

    <div className='purple_cart'>
      <img src={FrontCard} alt="" />
      <div className="container">
        <div className="all-circle">
            <div className="first-circle"></div>
            <div className="second-circle"></div>

        </div>
        <h1>{props.number}</h1>
        <div className="intro-part">
            <p>{props.personName}</p>
            
            
            <span>{props.date}</span>
        </div>
</div>
    </div>
  )
}

export default Purple_cart