import React from "react";
import "../App.css";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="home">
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="home page for my github" />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="home-cont home-cont-div">
        <div className="home-image-div">
          <img
            src="https://avatars.githubusercontent.com/u/41548124?s=400&u=752d08c496b90fc95d477844642e7657507cd34b&v=4"
            alt=""
            className="home-image"
          />
        </div>
      </div>
    </div>
  );
}
