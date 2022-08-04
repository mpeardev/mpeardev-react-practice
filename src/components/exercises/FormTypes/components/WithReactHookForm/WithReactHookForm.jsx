import React from 'react';
import { WithoutValidators } from '../../../FormTypes/components/WithReactHookForm/components/WithoutValidators';
import { WithValidators } from '../../../FormTypes/components/WithReactHookForm/components/WithValidators';

export const WithReactHookForm = () => {
  return (
    <div className="container p-2 mt-5">
      <div className="row">
        <h4 className="mb-4 display-6">With React Hook Form</h4>
        <WithoutValidators />
        <WithValidators />
      </div>
    </div>
  );
};
