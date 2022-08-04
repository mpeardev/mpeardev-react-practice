import React, { useState } from 'react';

export const Controlled = () => {
  const [CFormData, setCFormData] = useState();
  const [sendData, setSendData] = useState();

  return (
    <div className="container p-5">
      <div className="row">
        <h4  className="mb-4 display-6">Controlled</h4>
        <div className="card bg-light p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSendData(CFormData);
            }}
          >
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={CFormData?.name}
                onChange={({ target }) =>
                  setCFormData({
                    ...CFormData,
                    name: target.value,
                  })
                }
                required={true}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                value={CFormData?.email}
                onChange={({ target }) =>
                  setCFormData({
                    ...CFormData,
                    email: target.value,
                  })
                }
                required={true}
              />
            </div>

            <div className="mb-3">
              <button className="btn btn-dark" type="submit">
                Send Data
              </button>
            </div>
          </form>

          <div className="alert alert-success mt-3">
            <h6>
              Name: <small className="text-success">{CFormData?.name}</small>
            </h6>
            <hr />
            <h6>
              Email: <small className="text-success">{CFormData?.email}</small>
            </h6>
          </div>
          <div className="alert alert-warning">
            <code>
              Data sent: <br />
              {JSON.stringify(sendData)}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};
