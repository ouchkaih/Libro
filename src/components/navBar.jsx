import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function NavBar() {
  const userData = useSelector(state => state.user)
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
    <div>
      <div className="p-3 bg-light">
        <nav className="row">
          <div className="col-9">
            <ul className="nav">
              <li className="nav-item">
                <Link to="" className="nav-link text-dark">
                  <img src="icons/logo.png" alt="" width="30px" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link text-dark">
                  Home
                </Link>
              </li>
              <li className="nav-item">
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
              </li>
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