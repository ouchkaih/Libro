import React from 'react'

function PopularNow() {
  const url_image =
    "https://th.bing.com/th/id/R.738922b81be3dd06a937ea20ccc855ce?rik=HTRBKi6CYNx30A&pid=ImgRaw&r=0";

  return (
    <div>
      <div className="popularBook">
        <h5 className="bg_white title secondary-color">
          <b className="">Popular Now</b>
        </h5>
        <div className="">
          <div className="book bg_white">
            <a href="">
              <div
                className="book_cover"
                style={{ backgroundImage: `url(${url_image})` }}
              ></div>
              <div className="">
                <p className="book_title ">book title </p>
                <p className="book_author">
                  <b>the author</b>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularNow