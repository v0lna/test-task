import React from 'react';
import { Link } from 'react-router-dom';
import getDate from '../../utils/dateConverter';
import { userStorePropTypes } from '../../containers/UsersContainer';

const Users = ({ usersStore: { users, loading, error } }) => {
  if (error) {
    const errorMessage = error.status
      ? `Something went wrong ... Error code: ${error.status}`
      : `Something went wrong ...`;
    return <p>{errorMessage}</p>;
  }
  return (
    <div>
      <h1>Users page</h1>

      <Link to="/add">
        <button type="button">Add new user </button>
      </Link>
      {loading && <p> Loading ...</p>}
      {!!users.length && (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <span>{`${user.name} ${user.secondName}`}</span>
              <span>{getDate(user.createdAt)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
Users.propTypes = {
  usersStore: userStorePropTypes.isRequired,
};
export default Users;
