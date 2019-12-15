import React from 'react';
import { Field, reduxForm } from 'redux-form';
import propTypes from 'prop-types';

const Form = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field component="input" name="name" type="text" placeholder="Your name" />
      </div>
      <div>
        <Field component="input" name="secondName" type="password" placeholder="Your second name" />
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
          <span>
            <Field name="sex" component="input" type="radio" value="other" />
            Other
          </span>
        </div>
      </div>
      <div>
        <span>Loyalty propgram</span>
        <div>
          <Field name="loyaltyProgram" component="select" defaultValue="mobileApp">
            <option value="unavailable">Unavailable</option>
            <option value="plasticCard">Plastic card</option>
            <option value="mobileApp"> Mobile app</option>
          </Field>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
Form.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};
const AddUserForm = reduxForm({ form: 'addUser' })(Form);
export default AddUserForm;
