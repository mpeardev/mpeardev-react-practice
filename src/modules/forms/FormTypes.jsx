import React from 'react';
import {
  Controlled,
  NotControlled,
  Controlled,
  WithReactHookForm,
} from './components';

export const FormTypes = () => {
  return (
    <>
      <h1 className="text-center">Form Types</h1>
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
