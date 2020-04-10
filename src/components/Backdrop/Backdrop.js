import React, { useEffect } from 'react';
import cs from 'classnames';

import './Backdrop.scss';

export default function Backdrop(props) {
  
  const styleClasses = cs({
    'backdrop': true,
    'open': props.open
  });
  
  const closeHandler = () => {
    props.onClose(false);
  };
  
  useEffect(() => {
    if (props.open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [props.open]);
  
  return (
    <div className={styleClasses} onClick={closeHandler}></div>
  )
}
