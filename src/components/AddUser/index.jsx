import React from 'react';
import propTypes from 'prop-types';
import AddUserForm from './Form';
import { userUrl } from '../../config';

const AddUser = ({ meowFactsState, changedIsAdded }) => {
  const formSubmit = async (logData) => {
    const createdAt = Date.now();
    let { cardNumber } = logData;
    if (!logData.cardNumber) {
      cardNumber = '';
    } else {
      cardNumber = cardNumber.split(' ').join('');
    }
    const userData = { ...logData, createdAt, cardNumber };
    const res = await fetch(userUrl, {
      method: 'post',
      headers: {
        'Content-type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(userData),
    });
    if (res.ok) {
      changedIsAdded();
    }
  };
  const { facts } = meowFactsState;
  return (
    <div>
      <h1>Add new user</h1>
      <AddUserForm onSubmit={formSubmit} />
      {!!facts && <p>{facts}</p>}
    </div>
  );
};

const factsStatePropTypes = propTypes.shape({
  loading: propTypes.bool.isRequired,
  facts: propTypes.string.isRequired,
  error: propTypes.string.isRequired,
});

AddUser.propTypes = {
  changedIsAdded: propTypes.func.isRequired,
  meowFactsState: factsStatePropTypes.isRequired,
};

export default AddUser;
