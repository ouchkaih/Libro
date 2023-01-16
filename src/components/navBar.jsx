import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import {FaRegHeart} from "react-icons/fa";
import { MdOutlineTranslate } from "react-icons/md";

function NavBar() {
  const userData = useSelector(state => state.user)

  const navBarTop = userData.isConnected ? (
    <div></div>
  ) : (
    <div className="m-0 row bg-light p-2 w-100">
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
        <div class="dropdown ms-4 secondary-color">
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
      <div className="col">
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
    <div>

    </div>
      <div className="col">
        <a className="btn btn-dark w-100" href="signUp">
          Sign Up
        </a>
      </div>
      <div className="col">
        <a className=" btn btn-light w-100" href="signIn">
          Sing IN
        </a>
      </div>
    </>
  );
  return (
    <div className="">
      <div className=".container w-100">
        {AiOutlineUser}
        {navBarTop}
        <nav className="row w-100 pt-4 pb-4 ps-3">
          <div className="col-9">
            <ul className="nav d-flex align-items-center row">
              <li className="nav-item col-2">
                <Link to="/" className=" " width="250px "  height={"90px"}>
                  <img src="images/logo/logo_orange.svg" alt="" width="100"height={"40px"} className='m-0 p-0'/>
                </Link>
              </li> 
              <li className="nav-item col m-0 d-flex justify-content-center">
                  <div class="group w-75">
                      <img src="icons/search.svg" alt="" className='search_icon opacity-50 width-100'  />
                      <input placeholder="Search" type="search" class="input"/>
                    </div>
              </li>
               {/*<li className="nav-item">
                <Link to="products" className="nav-link text-dark">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link text-dark">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="managment" className="nav-link text-dark">
                  Products Managment
                </Link>
              </li> */}
            </ul>
          </div>
          {/* <div class="form-check form-switch col-2">
            <input type="checkbox" class="form-check-input" id="darkSwitch" />
            <label class="custom-control-label" for="darkSwitch">
              Dark Mode
            </label>
          </div> */}
          <div className="col-3 row">{navBar}</div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar