import React from 'react';
import "./Link.css";


function Link(props) {
    let {variant='primary', children, ...rest}=props;
    //here we destructutre the props into few variables such as variant,children and rest, so these should be passed as props from its parent component.

  return (
    <div>
<button className={`link ${variant}`} {...rest}> {children}</button>
    </div>
  )
}

export default Link;