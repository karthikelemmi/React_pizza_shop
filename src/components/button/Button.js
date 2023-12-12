import React from 'react'
import './Button.css';

function Button(props) {
    let {variant='primary', children, ...rest}=props;
    //here we destructutre the props into few variables such as variant,children and rest, so these should be passed as props from its parent component.

  return (
    <div>
<button className={`button ${variant}`} {...rest}> {children}</button>
    </div>
  )
}

export default Button;