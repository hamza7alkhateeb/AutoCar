import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link ,NavLink } from "react-router-dom";
import { authLogout } from "../rtk/actions/authAction";
import Alert from "./Alert";

function Navbar() {
    const dispatch = useDispatch()

    const {isAuthenticated, loading} = useSelector(state => state.auth)

    const authLinks = (
        <Link
          className="navbar__top__auth__link"
            onClick={ () => dispatch(authLogout()) }
            to={'/'}
        >
          Logout
        </Link>
    );
    const guestLinks = (
      <Fragment>
        <Link className="navbar__top__auth__link" to="/login">
          Login
        </Link>
        <Link className="navbar__top__auth__link" to="/signup">
          Sign Up
        </Link>
      </Fragment>
    );

    return (
      <Fragment>
        <nav className="navbar">
          <div className="navbar__top">
            <div className="navbar__top__logo">
              <Link className="navbar__top__logo__link" to="/">
                Auto Car
              </Link>
            </div>
            <div className="navbar__top__auth">
              {!loading && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
              )}
            </div>
          </div>
          <div className="navbar__bottom">
            <li className="navbar__bottom__item">
              <NavLink className="navbar__bottom__item__link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="navbar__bottom__item">
              <NavLink
                className="navbar__bottom__item__link"
                exact
                to="/listings"
              >
                Listings
              </NavLink>
            </li>
            <li className="navbar__bottom__item">
              <NavLink className="navbar__bottom__item__link" exact to="/about">
                About
              </NavLink>
            </li>
            <li className="navbar__bottom__item">
              <NavLink
                className="navbar__bottom__item__link"
                exact
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </div>
            </nav>
            <Alert />
           
      </Fragment>
    );
}
export default Navbar;
