import React from 'react'

function Landing_page() {
  return (
    <div>
      <div className="p-5 bg_orange row w-100 m-0 home_background">
        <div className="col-4 pt-5 pb-5 p-3">
          <h1 className="p-3 pt-5 pb-5 mb-5">
            <b>
              <span> Get Your</span>
              <div
                className="p-1 d-inline-block bg-light"
                style={{ width: "140px" }}
              ></div>
              <br />
              <span className="" style={{ fontSize: "64px" }}>
                New Book
              </span>
              <br />
              <div
                className="p-1 d-inline-block bg-light"
                style={{ width: "100px" }}
              ></div>
              <span className=""> Collection</span>
            </b>
          </h1>
        </div>
        <div className="col ms-5 pt-5 ps-4 text-end">
          <img src="images/logo/test.png" alt="" width="400px" />
        </div>
      </div>
    </div>
  );
}

export default Landing_page