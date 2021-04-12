import loader from "src/assets/icons/loader.svg";
import React, { Fragment } from "react";

import "./styles.scss";

const LoaderPage = ({ showLoaderPage }) => {
  return (
    <Fragment>
      {showLoaderPage && (
        <div className="a-loader-page">
          <img src={loader} alt="Loader" aria-hidden />
        </div>
      )}
    </Fragment>
  );
};

export default LoaderPage;
