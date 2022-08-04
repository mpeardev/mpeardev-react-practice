import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const WithoutValidators = () => {
  const { register, handleSubmit } = useForm();
  const [sendData, setSendData] = useState();

  const onSubmit = (data) => setSendData(data);

  return (
    <div className="card bg-light p-4 mb-4">
      <h5 className="text-center">Without Validators</h5>
      <hr />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" {...register('name')} />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" {...register('email')} />
        </div>

        <div className="mb-3">
          <button className="btn btn-dark" type="submit">
            Send Data
          </button>
        </div>
      </form>

      {/* <div className="alert alert-success mt-3">
        <h6>
          Name: <small className="text-success">{sendData?.name}</small>
        </h6>
        <hr />
        <h6>
          Email: <small className="text-success">{sendData?.email}</small>
        </h6>
      </div> */}

      <div className="alert alert-warning">
        <code>
          Data sent: <br />
          {JSON.stringify(sendData)}
        </code>
      </div>
    </div>
  );
};
