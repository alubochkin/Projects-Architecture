import React from 'react';
import { Formik } from 'formik';
import { SignupFormComponent } from './signup-form.component';
import { SIGNUP_FORM_FIELD_KEY } from './signup-form.type';
import {
  AuthContainerLayout,
  ContentLayout,
} from '../../../../lib/elements/layout';

export function SignupFormContainer(props) {
  const LOGIN_NAME = props.fieldName[SIGNUP_FORM_FIELD_KEY.LOGIN];
  const PASSWORD_NAME = props.fieldName[SIGNUP_FORM_FIELD_KEY.PASSWORD];

  return (
    <ContentLayout>
      <AuthContainerLayout>
        <Formik
          onSubmit={props.onSubmitForm}
          initialValues={props.initialValue}
          validate={props.validation}
        >
          {(props) => (
            <SignupFormComponent
              fieldLogin={LOGIN_NAME}
              fieldPassword={PASSWORD_NAME}
              {...props}
            />
          )}
        </Formik>
      </AuthContainerLayout>
    </ContentLayout>
  );
}
