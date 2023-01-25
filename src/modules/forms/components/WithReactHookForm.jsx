import React from 'react';
import { WithoutValidators, WithValidators } from '.';

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
