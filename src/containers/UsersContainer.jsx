import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getUsers from '../redux/actions/user';
import { Users } from '../components/index';

class UsersContainer extends Component {
  componentDidMount() {
    const { getUsers: getAllUsers } = this.props;
    getAllUsers();
  }

  render() {
    const { usersStore } = this.props;
    return (
      <div>
        <Users usersStore={usersStore} />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({ usersStore: store.users });
const mapDispatchToProps = (dispatch) => ({
  getUsers: bindActionCreators(getUsers, dispatch),
});

export const userStorePropTypes = propTypes.shape({
  users: propTypes.array.isRequired,
  loading: propTypes.bool.isRequired,
  error: propTypes.oneOfType([propTypes.bool, propTypes.object]).isRequired,
});

UsersContainer.propTypes = {
  getUsers: propTypes.func.isRequired,
  usersStore: userStorePropTypes.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
