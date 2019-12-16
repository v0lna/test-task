import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AddUser } from '../components/index';
import getFacts from '../redux/actions/meowFacts';

export class AddUserContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdded: false,
    };
    this.changedIsAdded = this.changedIsAdded.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getMeowFacts();
  }

  changedIsAdded() {
    this.setState((state) => ({
      isAdded: !state.isAdded,
    }));
  }

  render() {
    const { meowFactsState } = this.props;
    const { isAdded } = this.state;

    if (isAdded) return <Redirect to="/" />;
    return <AddUser changedIsAdded={this.changedIsAdded} meowFactsState={meowFactsState} />;
  }
}
const factsStatePropTypes = PropTypes.shape({
  loading: PropTypes.bool.isRequired,
  facts: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
});

AddUserContainer.propTypes = {
  getMeowFacts: PropTypes.func.isRequired,
  meowFactsState: factsStatePropTypes.isRequired,
};

const mapStateToProps = (state) => ({ meowFactsState: state.meowFactsState });

const mapDispatchToProps = (dispatch) => ({ getMeowFacts: bindActionCreators(getFacts, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(AddUserContainer);
