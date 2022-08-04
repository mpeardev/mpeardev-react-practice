import React from 'react';
import { Controlled } from '../FormTypes/components/Controlled';
import { NotControlled } from '../FormTypes/components/NotControlled';
import { Controlled } from '../FormTypes/components/Controlled';
import { WithReactHookForm } from '../FormTypes/components/WithReactHookForm/WithReactHookForm';

export const FormTypes = () => {
  return (
    <>
      <h1>Form Types</h1>
      <hr />

      <div className="alert alert-secondary">
        <NotControlled />
        <Controlled />
      </div>

      <div className="alert alert-primary">
        <WithReactHookForm />
      </div>
    </>
  );
};
