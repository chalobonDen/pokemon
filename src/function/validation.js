export default function validation(values) {
  let errors = {};

  if (values.firstname.length === 0) {
    errors.firstname = 'Please fill out this field';
  }

  if (values.lastname.length === 0) {
    errors.lastname = 'Please fill out this field';
  }

  if (!values.email) {
    errors.email = 'Please fill out this field';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.password) {
    errors.password = 'Please fill out this field';
  } else if (values.password.length < 8) {
    errors.password = 'Password need 8 characters or more';
  }

  if (!values.passwordValidate) {
    errors.passwordValidate = 'Please fill out this field';
  } else if (values.passwordValidate !== values.password) {
    errors.passwordValidate = `Passwords don't match`;
  }

  if (values.gender.length === 0) {
    errors.gender = 'Please fill out this field';
  }
  return errors;
}
