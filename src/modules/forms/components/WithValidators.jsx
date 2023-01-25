import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const WithValidators = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [sendData, setSendData] = useState();

  const regexNum = /^[0-9]+/;
  const regexText = /^[a-zA-Z0-9 ]+$/;
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const onSubmit = (data) => setSendData(data);

  return (
    <div className="card bg-light p-4 mb-4">
      <h5 className="text-center">With Validators</h5>
      <hr />

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* NAME */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            {...register('name', {
              required: {
                value: true,
                message: 'Required field',
              },
              minLength: { value: 3, message: 'Very short name' },
              maxLength: { value: 20, message: 'Very long name' },
              pattern: {
                value: regexText,
                message: 'Incorrect Format',
              },
            })}
          />
          {errors.name && (
            <small className="text-danger">{errors.name.message}</small>
          )}
        </div>

        {/* AGE */}
        <div className="mb-3">
          <label className="form-label">Edad</label>
          <input
            type="number"
            className="form-control"
            {...register('age', {
              required: {
                value: true,
                message: 'Required field',
              },
              min: { value: 18, message: 'Be over 18 years old' },
              max: { value: 150, message: 'You must be an a human' },
              pattern: {
                value: regexNum,
                message: 'Incorrect Format',
              },
            })}
          />
          {errors.age && (
            <small className="text-danger">{errors.age.message}</small>
          )}
        </div>

        {/* EMAIL */}
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            {...register('email', {
              required: {
                value: true,
                message: 'Required field',
              },
              pattern: {
                value: regexEmail,
                message: 'Incorrect Format',
              },
            })}
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>

        <div className="mb-3">
          <button className="btn btn-dark" type="submit">
            Send Data
          </button>
        </div>
      </form>

      <div className="alert alert-warning">
        <code>
          Data sent: <br />
          {JSON.stringify(sendData)}
        </code>
      </div>
    </div>
  );
};
