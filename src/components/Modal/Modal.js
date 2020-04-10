import React, { useEffect } from 'react';
import cs from 'classnames';

import './Modal.scss';

export default function Modal(props) {
  
  const styleClasses = cs({
    'modal-container': true,
    'open': props.open,
  });
  
  const closeHandler = () => {
    props.onClose(false)
  };
  
  // useEffect(() => {
  //   if (props.open) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'visible';
  //   }
  // }, [props.open]);
  
  return (
    <div className={styleClasses} onClick={closeHandler}>
      <div className='modal'>
        <div className="header">
          <div className="title">External link</div>
          <div className="close" onClick={closeHandler}></div>
        </div>
        <div className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo </div>
        <div className="controls">
          <div className="button accept-button">Cancel</div>
          <div className="button primary">Accept</div>
        </div>
      </div>
    </div>
    
  );
}
