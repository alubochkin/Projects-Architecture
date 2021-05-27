import React from 'react';
import { AuthContainerLayout, PageLayout } from '../../lib/elements/layout';
import { SignupContainer } from './signup.container';

export function SignupPage() {
  return (
    <PageLayout>
      <SignupContainer />
    </PageLayout>
  );
}
