import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-8 mt-4 border border-primary rounded">
            <h1 className="text-center">Log in</h1>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="passwordInput"
                aria-labelledby="passwordHelpBlock"
              />
            </div>
            <div className="footer mb-3 d-flex justify-content-end">
              <button type="button" className="btn btn-success me-3">
                Log in
              </button>
              <Link to="/">
                <button type="button" className="btn btn-danger">
                  Go back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
