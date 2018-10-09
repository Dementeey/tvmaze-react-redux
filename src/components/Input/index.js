import React from 'react';
import './index.scss'

export default ({ type, name, placeholder, value, required, checked, refcb , pattern, ...rest}) => {
  return (
    <input
      className='login-regist__input'
      type={ type }
      name={ name }
      placeholder={ placeholder }
      required={required}
      value={value}
      checked={checked}
      ref={refcb}
      pattern={pattern}
      { ...rest }
    />
  );
};
