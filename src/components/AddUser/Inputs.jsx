import React from 'react';
import propTypes from 'prop-types';

const InputText = ({ input, meta: { touched, error }, placeholder }) => {
  return (
    <div className="input-row">
      <input {...input} type="text" placeholder={placeholder} />
      {touched && error && <span className="error">{error}</span>}
    </div>
  );
};

const InputRadio = ({ input, meta: { touched, error }, placeholder }) => {
  return (
    <>
      <input {...input} type="radio" />
      <span>{placeholder}</span>
      {touched && error && <span className="error">{error}</span>}
    </>
  );
};

export const inputsPropTypes = {
  input: propTypes.object.isRequired,
  meta: propTypes.object.isRequired,
  placeholder: propTypes.string.isRequired,
};

InputText.propTypes = inputsPropTypes;
InputRadio.propTypes = inputsPropTypes;

export { InputText, InputRadio };
