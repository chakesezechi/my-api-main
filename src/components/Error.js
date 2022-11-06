import React from "react";
import ErrorImg from "../images/oops-404-error.webp";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="wrapper ">
      <Helmet>
        <title>Error Page</title>
        <meta
          name="description"
          content="This is the error page for handling any possible errors during an api call"
        />
        <link rel="canonical" href="/error" />
      </Helmet>

      <h2>Page Not Found!</h2>

      <div className="error">
        <img src={ErrorImg} alt="" width={500} />

        <div className="error-btn">
          <Link to="/" className="btn">
            Back To Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
