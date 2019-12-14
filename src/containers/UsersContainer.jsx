import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';
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

const mapStateToProps = (store) => ({ usersStore: store });
const mapDispatchToProps = (dispatch) => ({
  getUsers: bindActionCreators(getUsers, dispatch),
});

UsersContainer.propTypes = {
  getUsers: propTypes.func.isRequired,
  usersStore: propTypes.objectOf({
    users: propTypes.array.isRequired,
    loading: propTypes.bool.isRequired,
    error: propTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
