import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="d-flex justify-content-center mt-4">
            <Link to="/login">
              <button type="button" className="btn btn-primary me-3">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button type="button" className="btn btn-primary">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
