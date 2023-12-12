import React from 'react';
import './Typography.css'; 


const Typography = (props) => {
  const {align='center', children}=props
  return <div className={`typography ${align}`}>{children}
  </div>;
};



export default Typography;