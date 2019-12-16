const validate = ({ name, surname, sex, cardNumber }) => {
  const errors = {};
  if (!name) {
    errors.name = 'Name field required';
  } else if (name.length < 3) {
    errors.name = 'The name must be at least 3 characters long';
  } else if (name.indexOf(' ') > 0) {
    errors.name = 'Name should not contain spaces';
  }

  if (!surname) {
    errors.surname = 'Surname field required';
  } else if (surname.length < 2) {
    errors.surname = 'The Surname must be at least 2 characters long';
  } else if (surname.indexOf(' ') > 0) {
    errors.surname = 'Surname should not contain spaces';
  }

  if (!sex) {
    errors.sex = 'Gender field required';
  }
  if (!cardNumber) {
    errors.cardNumber = 'Card number required';
  } else if (cardNumber.length !== 19) {
    errors.cardNumber = 'Enter full number of card';
  }
  return errors;
};

const normalizeField = (value) => {
  if (!value || /^\s/.test(value)) {
    return '';
  }
  const normalizedValue = value.replace(/\s\s+/g, ' ');
  return normalizedValue;
};

const normalizeFieldCreditCard = (value) => {
  const cardCode = value.replace(/[^\d]/g, '').substring(0, 16);
  const normalizedValue = cardCode !== '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
  return normalizedValue;
};

export { normalizeField, validate, normalizeFieldCreditCard };
