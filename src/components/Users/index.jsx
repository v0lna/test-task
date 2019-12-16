import React from 'react';
import { Link } from 'react-router-dom';
import getDate from '../../utils/dateConverter';
import { userStorePropTypes } from '../../containers/UsersContainer';
import style from './style.module.css';

const Users = ({ usersStore: { users, loading, error } }) => {
  if (error) {
    const errorMessage = error.status
      ? `Something went wrong ... Error code: ${error.status}`
      : `Something went wrong ...`;
    return <p>{errorMessage}</p>;
  }
  return (
    <div className={style.usersWrapper}>
      <h1>Users page</h1>

      <Link to="/add">
        <button type="button" className={style.myButton}>
          Add new user
        </button>
      </Link>
      {loading && <p> Loading ...</p>}
      {!!users.length && (
        <div className={style.usersContainer}>
          {users.map((user) => (
            <div key={user.id} className={style.userCard}>
              <span>{`${user.name} ${user.surname}`}</span>
              <span className={style.timeStyle}>{getDate(user.createdAt)}</span>
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
