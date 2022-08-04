import React, { useState } from 'react';

export const NotControlled = () => {
  const [NCFormData, setNCFormData] = useState();

  return (
    <div className="container p-5">
      <div className="row">
        <h4 className="mb-4 display-6">Not Controlled</h4>
        <div className="card bg-light p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setNCFormData({
                name: e.target.name.value,
                email: e.target.email.value,
              });
            }}
          >
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" required={true} />
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" name="email" required={true} />
            </div>

            <div className="mb-3">
              <button className="btn btn-dark" type="submit">
                Send Data
              </button>
            </div>
          </form>

          <div className="alert alert-success mt-3 mb-3">
            <h6>
              Name: <small className="text-success">{NCFormData?.name}</small>
            </h6>
            <hr />
            <h6>
              Email: <small className="text-success">{NCFormData?.email}</small>
            </h6>
          </div>
          <div className="alert alert-warning">
            <code>
              Data sent: <br />
              {JSON.stringify(NCFormData)}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};
