import React, { useState, useRef, useEffect } from 'react';
import cs from 'classnames';

import './Select.scss';

export default function Select(props) {
  
  const [opened, setOpened] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const node = useRef(null);
  const controlNode = useRef(null);
  
  useEffect(() => {
    setShowTooltip(!props.valid);
  }, [props.valid]);
  
  const selectHandler = (value) => {
    setSelectedValue(value);
    setOpened(false);
    props.onChange(value);
  };
  
  const options = props.options.map(option =>
    <div
      className="option"
      key={option.value}
      onClick={() => selectHandler(option)}
    >
      <span>{option.displayValue}</span>
    </div>
  );
  
  const styleClasses = cs({
    'select': true,
    'form-element': true,
    'opened': opened,
    'selected': !!selectedValue,
    'show-tooltip': showTooltip,
    'error': !props.valid
  });
  
  const clickHandler = (event) => {
    if (event.target.closest('.control')) {
      setOpened(prev => !prev)
      setShowTooltip(false);
  
    } else if (event.target.closest('.options')) {
    
    } else {
      setOpened(false)
    }
  };
  
  useEffect(() => {
    document.addEventListener('click', clickHandler);
    return () => {
      document.removeEventListener('click', clickHandler);
    }
  }, []);
  
  return (
    <div className={styleClasses} ref={node}>
      <div className="control" ref={controlNode}>
        <span>{selectedValue ? selectedValue.displayValue : ''}</span>
        <span className="floating-label">{props.placeholder}</span>
        <span className="arrow"></span>
        <div className="tooltip"><span>{props.errorMessage}</span></div>
      </div>
      <div className="options">
        {options}
      </div>
    </div>
  )
}
