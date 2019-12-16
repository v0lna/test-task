import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AddUser } from '../components/index';
import getFacts from '../redux/actions/meowFacts';
import { userUrl } from '../config/index';

export class AddUserContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdded: false,
    };
    this.formSubmit = this.formSubmit.bind(this);
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

  async formSubmit(logData) {
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
      this.changedIsAdded();
    }
  }

  render() {
    const { meowFactsState } = this.props;
    const { isAdded } = this.state;

    if (isAdded) return <Redirect to="/" />;
    return <AddUser formSubmit={this.formSubmit} meowFactsState={meowFactsState} />;
  }
}
const factsStatePropTypes = PropTypes.shape({
  loading: PropTypes.bool.isRequired,
  facts: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.bool.isRequired]),
});

AddUserContainer.propTypes = {
  getMeowFacts: PropTypes.func.isRequired,
  meowFactsState: factsStatePropTypes.isRequired,
};

const mapStateToProps = (state) => ({ meowFactsState: state.meowFactsState });

const mapDispatchToProps = (dispatch) => ({ getMeowFacts: bindActionCreators(getFacts, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(AddUserContainer);
