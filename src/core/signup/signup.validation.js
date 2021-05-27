export function SignupFormValidation(values) {
  let errors = {};
  !values.login ? (errors.login = 'Required') : (errors.login = '');
  !values.password ? (errors.password = 'Required') : (errors.password = '');

  if (values.login && values.password) errors = {};

  return errors;
}
