import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import {FaRegHeart} from "react-icons/fa";
import { MdOutlineTranslate } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

function NavBar() {
  const userData = useSelector(state => state.user)

  const navBarTop = userData.isConnected ? (
    <div></div>
  ) : (
    <div className="m-0 row bg_gray p-2 w-100">
      <div className="col d-flex">
        <div class="dropdown secondary-color">
          <Link
            type="button"
            class="dropdown-toggle nav-link"
            data-bs-toggle="dropdown"
          >
            Sell in <b>LIBRO</b>
          </Link>
          <ul class="dropdown-menu">
            <li className="">
              <Link class="dropdown-item" to="">
                <AiOutlineUser size="20px" />
                <span className=" ms-2">Seller Login</span>
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" href="#">
                <AiOutlineUserAdd size="20px" />
                <span className="ms-2">Create Seller Account</span>
              </Link>
            </li>
          </ul>
        </div>
        <div class="dropdown ms-4 col secondary-color">
          <Link
            type="button"
            class="dropdown-toggle nav-link"
            data-bs-toggle="dropdown"
          >
            Help
          </Link>
          <ul class="dropdown-menu">
            <li className="">
              <Link class="dropdown-item" to="">
                <span className=" ">Customer Services</span>
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" href="#">
                <span className="">Disputes & Reports</span>
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" href="#">
                <span className="">Report IPR infringement </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col text-end secondary-color d-flex justify-content-end">
        <Link className="nav-link ">
          <FaRegHeart size="20px" />
          <span className="ms-1">Wish list</span>
        </Link>
        <Link className="nav-link ms-4">
          <MdOutlineTranslate size="20px" />
          <span className="ms-2">Eng</span>
        </Link>
      </div>
    </div>
  );
  const navBar = userData.isConnected ? (
    <>
      <div className="col w-100">
        <span className="nav-link text-muted">Welcom {userData.userName}</span>
      </div>
      <div className="col">
        <Link to="/logout" className="nav-link">
          LogOut
        </Link>
      </div>
    </>
  ) : (
    <>
      <div className="row d-flex align-items-center">
        <div class="dropdown col-9 text-end ">
          <Link
            type="button"
            class="dropdown-toggle nav-link secondary-color"
            data-bs-toggle="dropdown"
          >
            <b>Account</b>
          </Link>
          <ul class="dropdown-menu">
            <li className="">
              <Link class="dropdown-item" to="">
                <AiOutlineUser size="20px" />
                <span className=" ms-2">Join In</span>
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" href="#">
                <AiOutlineUserAdd size="20px" />
                <span className="ms-2">Create Account</span>
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" href="#">
                <AiOutlineShoppingCart size="20px" />
                <span className="ms-2">Sell in LIBRO</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col text-end">
          {<AiOutlineShoppingCart size={"28px"} className="primary_color " />}
        </div>
      </div>
    </>
  );
  return (
    <div className="">
      <div className=".container w-100">
        <nav className="row w-100 m-0  ">
          {navBarTop}
          <div className="row p-0 m-0" >
            <ul className="nav d-flex align-items-center row p-3 pe-0">
              <li className="nav-item col-3">
                <Link to="/" className=" " width="250px " height={"90px"}>
                  <img
                    src="images/logo/logo_orange.svg"
                    alt=""
                    width="100"
                    height={"40px"}
                    className="m-0 p-0"
                  />
                </Link>
              </li>
              <li className="nav-item col-6 m-0 d-flex justify-content-center ">
                <div class="group w-75">
                  <img
                    src="icons/search.svg"
                    alt=""
                    className="search_icon opacity-50 width-100"
                  />
                  <input placeholder="Search" type="search" class="input" />
                  <button type="button" className="btn bg_orange ms-2 ps-4 pe-4">
                  Search
                </button>
                </div>                
              </li>
              <li className="nav-item col-3 m-0">
                <div className="p-0">{navBar}</div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar