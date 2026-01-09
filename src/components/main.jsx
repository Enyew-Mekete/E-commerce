import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-1">
          <img
            className="card-img img-fluid "
            src="./assets/main.png"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-bold " style={{ color: "#fdfdfd", marginTop: '-260px' }}>E-commerce Platform</h5>
              <p className="card-text fs-5 d-none d-sm-block" style={{ color: "#fdfdfd" }}>
                A smart e-commerce platform built<br /> for speed, security, and <br />
                 a smooth shopping experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
