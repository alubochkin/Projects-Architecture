import React from 'react';
import { SIGNUP_FORM_FIELD_NAME } from './signup.type';
import { SIGNUP_FORM_FIELD_KEY } from './frame/signup-form';
import { SignupFormContainer } from './frame/signup-form';
import { SignupFormValidation } from './signup.validation';
import { useDispatch } from 'react-redux';
import { signupFormUploadData } from './singup.action';

export function SignupContainer() {
  const dispatch = useDispatch();

  const signupFormSendData = (values) => {
    dispatch(signupFormUploadData(values));
  };

  const signupFormGetInitialValues = () => {
    return {
      [SIGNUP_FORM_FIELD_NAME[SIGNUP_FORM_FIELD_KEY.LOGIN]]: '',
      [SIGNUP_FORM_FIELD_NAME[SIGNUP_FORM_FIELD_KEY.PASSWORD]]: '',
    };
  };

  return (
    <SignupFormContainer
      initialValue={signupFormGetInitialValues()}
      onSubmitForm={signupFormSendData}
      validation={SignupFormValidation}
      fieldName={SIGNUP_FORM_FIELD_NAME}
    />
  );
}
