import React from 'react';
import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../../../lib/theme';
import { RU } from '../../../../../lang/ru';
import {
  ContainerLayout,
  ContentLayout,
  FieldLayout,
} from '../../../../lib/elements/layout';
import { FieldInput } from '../../../../lib/elements/field';
import { ButtonSubmit } from '../../../../lib/elements/button';
import { Title } from '../../../../lib/elements/title/title';

export function SignupFormComponent(props) {
  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    handleBlur,
    isSubmitting,
    touched,
    fieldLogin,
    fieldPassword,
  } = props;

  const isErrorField = (name) => {
    return (
      errors[name] && touched[name] && <ErrorField>{errors[name]}</ErrorField>
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title size="22">{RU.translation.SIGNUP.SIGNUP_FORM.TITLE_FORM}</Title>
      <FieldLayout>
        <Label htmlFor={fieldLogin}>
          {RU.translation.SIGNUP.SIGNUP_FORM.FIELD.LOGIN.TITLE}
        </Label>
        <FieldInput
          placeholder={
            RU.translation.SIGNUP.SIGNUP_FORM.FIELD.LOGIN.PLACEHOLDER
          }
          id={fieldLogin}
          name={fieldLogin}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.login}
        />
        {isErrorField(fieldLogin)}
      </FieldLayout>

      <FieldLayout>
        <Label htmlFor={fieldPassword}>
          {RU.translation.SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.TITLE}
        </Label>
        <FieldInput
          placeholder={
            RU.translation.SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.PLACEHOLDER
          }
          type={fieldPassword}
          name={fieldPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {isErrorField(fieldPassword)}
      </FieldLayout>

      <ButtonSubmit type="submit" disabled={isSubmitting}>
        Submit
      </ButtonSubmit>
      <BlockBottomAction>
        <a href="">{RU.translation.SIGNUP.SIGNUP_FORM.TOGGLE_FORM.SIGN_IN}</a>
        <a href="">
          {RU.translation.SIGNUP.SIGNUP_FORM.TOGGLE_FORM.FORGET_PASSWORD}
        </a>
      </BlockBottomAction>
    </Form>
  );
}

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;

const BlockBottomAction = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
`;

const Label = styled.label`
  font-size: 14px;
`;

const ErrorField = styled.span`
  font-size: 10px;
  color: ${THEME_COLOR.ERROR};
`;
