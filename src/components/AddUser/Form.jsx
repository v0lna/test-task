import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import propTypes from 'prop-types';
import { validate, normalizeField, normalizeFieldCreditCard } from '../../utils/addUserHelpers';
import { InputText, InputRadio } from './Inputs';
import '../../App.css';
import style from './style.module.css';

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
      <form onSubmit={handleSubmit} className={style.formContainer}>
        <div className={style.labelAndFieldContainer}>
          <label className={style.fieldLabel} htmlFor="nameInput" style={{ paddingLeft: '23px' }}>
            Name:
          </label>
          <div>
            <Field
              component={InputText}
              normalize={normalizeField}
              name="name"
              type="text"
              placeholder="Your name"
              id="nameInput"
              myStyle="errorName"
            />
          </div>
        </div>
        <div className={style.labelAndFieldContainer}>
          <label className={style.fieldLabel} htmlFor="surnameInput">
            Surname:
          </label>
          <div>
            <Field
              component={InputText}
              normalize={normalizeField}
              name="surname"
              type="text"
              placeholder="Your surname"
              id="surnameInput"
            />
          </div>
        </div>
        <div className={style.labelAndFieldContainer} style={{ paddingTop: '15px' }}>
          <span className={style.fieldLabel} style={{ paddingLeft: '40px' }}>
            Sex:
          </span>
          <div>
            <label htmlFor="gender-male">
              <Field name="sex" component="input" type="radio" value="male" id="gender-male" />
              Male
            </label>
            <label htmlFor="gender-female">
              <Field name="sex" component="input" type="radio" value="female" id="gender-female" />
              Female
            </label>
            <Field
              name="sex"
              component={InputRadio}
              type="radio"
              value="other"
              placeholder="Other"
            />
          </div>
        </div>
        <div className={style.labelAndFieldContainer}>
          <span className={style.fieldLabel} style={{ paddingLeft: '40px' }}>
            Loyalty propgram:
          </span>
          <div>
            <Field name="loyaltyPropgram" component="select" onChange={this.changeSelect}>
              <option value="unavailable">Unavailable</option>
              <option value="plasticCard">Plastic card</option>
              <option value="mobileApp"> Mobile app</option>
            </Field>
          </div>
        </div>
        {selected !== 'plasticCard' ? null : (
          <div className={style.labelAndFieldContainer}>
            <label
              htmlFor="cardNumber"
              className={style.fieldLabel}
              // style={{ paddingLeft: '40px' }}
            >
              Card number:
            </label>
            <Field
              component={InputText}
              name="cardNumber"
              type="text"
              placeholder="Enter card number"
              normalize={normalizeFieldCreditCard}
              id="cardNumber"
              myStyle="errorCardNumber"
            />
          </div>
        )}
        <div className={style.labelAndFieldContainer}>
          <button type="submit" disabled={invalid} className="myButton">
            Submit
          </button>
        </div>
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
