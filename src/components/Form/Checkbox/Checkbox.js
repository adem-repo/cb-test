import React, { useState } from 'react';
import cs from 'classnames';

import './Checkbox.scss';

export default function Checkbox(props) {
  
  const CHECKED = 'checked';
  const [checked, setChecked] = useState(props.value ? CHECKED : '');
  
  const clickHandler = () => {
    setChecked(prev => {
      if (prev === CHECKED) {
        return '';
      }
      return CHECKED
    });
    props.onChange(!!checked);
  };
  
  const styleClasses = cs({
    'form-element': true,
    'error': !props.valid
  });
  
  return (
    <div className={styleClasses}>
      <label className="container" onClick={clickHandler}>
        <span>{props.label}</span>
        <input type="checkbox" checked={checked} onChange={clickHandler}/>
        <span className="checkmark"></span>
      </label>
    </div>
  )
}
