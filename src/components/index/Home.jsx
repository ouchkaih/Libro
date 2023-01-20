import React, {useEffect, useState} from 'react'
function Home() { 

  

  return (
    <div>
      <div>
        <div className="p-5 bg_orange row w-100 m-0">
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
                  {" "}
                  New Book
                </span>{" "}
                <br />
                <div
                  className="p-1 d-inline-block bg-light"
                  style={{ width: "100px" }}
                ></div>
                <span className=""> Collection</span>
              </b>
            </h1>
          </div>
        </div>
        <div className="row bg_gray me-1 pt-4">
          <h5 className="bg_white p-4 secondary-color">
            <b className="p-1">Popular Now</b>
          </h5>
          <div className="mt-4 ">
            <div className="book_cart">
              <div className="bock_cover bg_white">dfd</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home