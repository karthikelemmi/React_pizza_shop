import React from 'react'
import './Image.css';

function Image(props) {
    let {variant='logo',children, ...rest}=props;

  return (
<span className={`image ${variant}`} {...rest}>{children}</span>
  )
}

export default Image;