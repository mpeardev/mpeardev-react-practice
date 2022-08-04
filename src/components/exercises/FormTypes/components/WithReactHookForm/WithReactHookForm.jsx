import React from 'react';
import { WithoutValidators } from '../../../FormTypes/components/WithReactHookForm/components/WithoutValidators';
import { WithValidators } from '../../../FormTypes/components/WithReactHookForm/components/WithValidators';

export const WithReactHookForm = () => {
  return (
    <div className="container p-5">
      <div className="row">
        <h4>With React Hook Form</h4>
        <WithoutValidators />
        <WithValidators />
      </div>
    </div>
  );
};
