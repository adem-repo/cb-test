import React, { useState, useEffect } from 'react';
import cs from 'classnames';

import './Input.scss';

export default function Input(props) {
  
  const [text, setText] = useState(props.value);
  const [showTooltip, setShowTooltip] = useState(false);
  
  const inputHandler = ({target: {value}}) => {
    setText(value);
    props.onChange(value);
  };
  
  const clearHandler = () => {
    setText('');
    props.onChange('');
  };
  
  const styleClasses = cs({
    'form-element': true,
    'error': !props.valid,
    'has-value': !!text,
    'show-tooltip': showTooltip
  });
  
  useEffect(() => {
    setShowTooltip(!props.valid);
  }, [props.valid]);
  
  let type;
  if (props.type === 'email') {
    type = props.type
  } else {
    type = 'text'
  }
  
  return (
    <div className={styleClasses}>
      <input
        type={type}
        className='inputText'
        value={text}
        onChange={inputHandler}
        onFocus={() => {setShowTooltip(false)}}
      />
      <span className="floating-label">{props.label}</span>
      <span className='close' onClick={clearHandler}></span>
      <div className="tooltip"><span>{props.errorMessage}</span></div>
    </div>
  )
}
