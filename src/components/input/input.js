import React from 'react'
import './Input.css';

function Input(props) {
    let {size='medium', ...rest}=props;

  return (
    <div>
<input className={`input ${size}`} {...rest}></input>
    </div>
  )
}

export default Input;