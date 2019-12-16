import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import propTypes from 'prop-types';
import { validate, normalizeField, normalizeFieldCreditCard } from '../../utils/addUserHelpers';
import { InputText, InputRadio } from './Inputs';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'unavailable',
    };
    this.changeSelect = this.changeSelect.bind(this);
  }

  changeSelect(event) {
    const selectStatus = event.target.value;
    this.setState({ selected: selectStatus });
  }

  render() {
    const { selected } = this.state;

    const { handleSubmit, invalid } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            component={InputText}
            normalize={normalizeField}
            name="name"
            type="text"
            placeholder="Your name"
          />
        </div>
        <div>
          <Field
            component={InputText}
            normalize={normalizeField}
            name="surname"
            type="text"
            placeholder="Your surname"
          />
        </div>
        <div>
          <span>Sex</span>
          <div>
            <span>
              <Field name="sex" component="input" type="radio" value="male" />
              Male
            </span>
            <span>
              <Field name="sex" component="input" type="radio" value="female" />
              Female
            </span>

            <Field
              name="sex"
              component={InputRadio}
              type="radio"
              value="other"
              placeholder="Other"
            />
          </div>
        </div>
        <div>
          <span>Loyalty propgram</span>
          <div>
            <Field name="loyaltyPropgram" component="select" onChange={this.changeSelect}>
              <option value="unavailable">Unavailable</option>
              <option value="plasticCard">Plastic card</option>
              <option value="mobileApp"> Mobile app</option>
            </Field>
            {selected !== 'plasticCard' ? null : (
              <Field
                component={InputText}
                name="cardNumber"
                type="text"
                placeholder="Enter your card number"
                normalize={normalizeFieldCreditCard}
              />
            )}
          </div>
        </div>
        <button type="submit" disabled={invalid}>
          Submit
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  invalid: propTypes.bool.isRequired,
};
const AddUserForm = reduxForm({
  form: 'addUser',
  initialValues: { loyaltyPropgram: 'unavailable' },
  validate,
})(Form);
export default AddUserForm;
