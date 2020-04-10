import React, { useState } from 'react';

import Input from "./Input/Input.js";
import Select from "./Select/Select.js";
import Checkbox from "./Checkbox/Checkbox";

import './Form.scss';

export default function Form() {
  
  const requestFormConfig = {
    email: {
      elementType: 'email',
      elementConfig: {
        type: 'text',
        label: 'Enter your E-Mail',
      },
      value: '',
      valid: true,
      validation: {
        required: true,
        pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      },
      errorMessage: 'Enter correct E-Mail'
    },
    name: {
      elementType: 'text',
      elementConfig: {
        type: 'text',
        label: 'Enter your name',
      },
      value: '',
      valid: true,
      validation: {
        required: true,
        pattern: /^[A-Za-zА-Яа-я\- ]+$/
      },
      errorMessage: 'Enter correct name'
    },
    country: {
      elementType: 'select',
      elementConfig: {
        options: [
          { value: 'usa', displayValue: 'USA' },
          { value: 'uk', displayValue: 'United Kingdom' },
          { value: 'jp', displayValue: 'Japan' }
        ],
        placeholder: 'Select your country'
      },
      value: null,
      valid: true,
      validation: {
        required: true
      },
      errorMessage: 'Select your country'
    },
    agreement: {
      elementType: 'checkbox',
      elementConfig: {
        label: 'I agree with Terns & Conditions'
      },
      value: false,
      valid: true,
      validation: {
        required: true
      },
      errorMessage: 'Check this checkbox'
    }
  };
  
  const [formState, setFormState] = useState(requestFormConfig);
  const [dataSent, setDataSent] = useState(false);
  
  const inputChangedHandler = (value, id) => {
    setFormState(formState => {
      formState[id].value = value;
      return {...formState}
    })
  };
  
  const submitHandler = (event) => {
    
    event.preventDefault();
    let formIsValid = true;
    let requestData = {};
    const updatedFormState = {...formState};
    for (let formElement in updatedFormState) {
      const isValid = checkValidity(
        updatedFormState[formElement].value,
        updatedFormState[formElement].validation
      );
      updatedFormState[formElement].valid = isValid;
      formIsValid = isValid && formIsValid;
      requestData[formElement] = updatedFormState[formElement].value
    }
    setFormState(updatedFormState);
  
    if (formIsValid) {
      setDataSent(true);
    }
  };
  
  const checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
      return true;
    }
  
    if (rules.required) {
      if (!value) {
        isValid = false
      } else if (typeof value === 'string') {
        isValid = value.trim() !== '' && isValid;
      }
    }
    
    if (rules.pattern) {
      isValid = rules.pattern.test(value) && isValid
    }
  
    return isValid;
  };
  
  let formElementsArray = [];
  for (let key in formState) {
    const formElement = formState[key];
    const { elementType } = formElement;
    const attrs = {
      ...formElement.elementConfig,
      type: key,
      key,
      valid: formElement.valid,
      value: formElement.value,
      errorMessage: formElement.errorMessage,
      onChange: (value) => inputChangedHandler(value, key)
    };
    switch (elementType) {
      case 'email':
      case 'text':
        formElementsArray.push(<Input {...attrs}/>);
        break;
      case 'select':
        formElementsArray.push(<Select {...attrs}/>);
        break;
      case 'checkbox':
        formElementsArray.push(<Checkbox {...attrs}/>);
        break;
      default:
    }
  }
  
  const formElement = (
    <form onSubmit={submitHandler}>
      {formElementsArray}
      <div className="form-element inline">
        <button className='button primary'>Submit</button>
      </div>
      <div className="link inline"><a href="http://google.com">Hyperlink</a></div>
    </form>
  );
  
  const dataSentElement = (
    <div className='success'><span>Success!</span></div>
  );
  
  return (
    <div className="form">
      <div className="title">Request form</div>
      { !dataSent ? formElement : dataSentElement}
    </div>
  )
}
