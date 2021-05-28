import React from 'react';
import { ContentLayout, PageLayout } from '../../lib/elements/layout';
import { SignupComponent } from './signup.component';
import { SignupContainer } from './signup.container';

export function SignupPage() {
  return (
    <PageLayout>
      <ContentLayout>
        <SignupComponent />
      </ContentLayout>
    </PageLayout>
  );
}
