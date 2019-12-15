import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddUser from '../components/index';

export class AddUserContainer extends Component {
  componentDidMount() {
    console.log('mounted');
  }

  render() {
    return <AddUser />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserContainer);
