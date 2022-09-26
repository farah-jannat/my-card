import React, { useState } from 'react'
// inport {useState} from "react"

function FormInput(props) {
  const deleteform = props.deleteform
  const [focused,setFocused] = useState(false);
    const{label,errorMassage,onChange,id,...inputProps} = props;
    const handleFocus =(e) =>{
      setFocused(true)
    };
  return (
    <div className ={deleteform?'delete':'formInput'}>
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused = {focused.toString()}/>
        <span className='error'>{errorMassage}</span>
        

    </div>
  )
}

export default FormInput