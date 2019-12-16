import React from 'react';
import propTypes from 'prop-types';
import style from './style.module.css';

const InputText = ({
  input,
  meta: { touched, error },
  placeholder,
  id,
  myStyle,
  type = 'text',
}) => {
  let errorText = ' ';
  let borderColor = 'focus-border';
  if (touched) {
    errorText = error || ' ';
    borderColor = error ? 'focus-border-error' : 'focus-border';
  } else {
    errorText = ' ';
  }
  return (
    <>
      <div className={style.inputWidth}>
        <input {...input} type={type} placeholder={placeholder} className="effect1" id={id} />
        <span className={borderColor} />
      </div>
      <span className={`${style.error} ${style[myStyle]}`}>{errorText}</span>
    </>
  );
};

const InputRadio = ({ input, meta: { touched, error }, placeholder }) => {
  let errorText = ' ';
  if (touched) {
    errorText = error || ' ';
  } else {
    errorText = ' ';
  }
  return (
    <>
      <label htmlFor="gender-other">
        <input {...input} type="radio" id="gender-other" />
        {placeholder}
      </label>
      {touched && error && <span className={style.error}>{errorText}</span>}
    </>
  );
};

InputText.propTypes = {
  input: propTypes.object.isRequired,
  meta: propTypes.object.isRequired,
  placeholder: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  myStyle: propTypes.string,
  type: propTypes.string,
};
InputRadio.propTypes = {
  input: propTypes.object.isRequired,
  meta: propTypes.object.isRequired,
  placeholder: propTypes.string.isRequired,
};

export { InputText, InputRadio };
