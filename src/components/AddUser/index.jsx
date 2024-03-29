import React from 'react';
import propTypes from 'prop-types';
import AddUserForm from './Form';
import style from './style.module.css';

const AddUser = ({ meowFactsState, formSubmit }) => {
  const { facts } = meowFactsState;
  return (
    <>
      <div className={style.formWrapper}>
        <h1>Add new user</h1>
        <AddUserForm onSubmit={formSubmit} />
      </div>
      <div className={style.wrapMeowFact}>{!!facts && <p>{facts}</p>}</div>
    </>
  );
};

const factsStatePropTypes = propTypes.shape({
  loading: propTypes.bool.isRequired,
  facts: propTypes.string.isRequired,
  error: propTypes.oneOfType([propTypes.string.isRequired, propTypes.bool.isRequired]),
});

AddUser.propTypes = {
  meowFactsState: factsStatePropTypes.isRequired,
  formSubmit: propTypes.func.isRequired,
};

export default AddUser;
