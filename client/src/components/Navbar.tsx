import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

interface NavbarProps {
  profileImg: string;
  loggedIn: boolean;
}

function Navbar( { profileImg, loggedIn } : NavbarProps ) {
  const [navToggle, setNavToggle] = useState<boolean>(false);

  useEffect(() => {
    if (navToggle === true) {
      document.body.classList.add("nav-expanded");
    } else document.body.classList.remove("nav-expanded");
  }, [navToggle]);

  return (
    <>
      <nav className="sidenav">
        <ul className="list-unstyled main-menu">
          <li className="text-right">
            <a href="#" id="nav-close">
              <i
                className="flaticon-error"
                onClick={() => setNavToggle(!navToggle)}
              ></i>
            </a>
          </li>
          <li>
            <Link to="#">About us</Link>
          </li>
          <li>
            <Link to="#">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div className="header" data-spy="affix" data-offset-top="190">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-left">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/awards">Awards</Link>
                </li>
                <li>
                  <Link to="/nominees">Nominees</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="search-menu hidden-sm">
                  <form className="search-form">
                    <div className="form-group has-feedback">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="search"
                        id="search"
                        placeholder="search"
                      />

                      <span className="flaticon-magnifying-glass form-control-feedback"></span>
                    </div>
                  </form>
                </li>
                <li
                  id="nav-expander"
                  className="openmenu hidden-sm"
                  onClick={() => setNavToggle(!navToggle)}
                >
                  <a href="#">
                    <i className="flaticon-bars"></i>
                  </a>
                </li>
                <li
                  className="profile hidden-sm"
                  style={{ display: "flex", margin: "0 .5rem" }}
                >
                  {loggedIn ? (
                    <Link to="dashboard">
                      <button style={{ height: "80px", width: "5rem", border: 0, background: "transparent" }}>
                        <img
                          src={profileImg}
                          alt=""
                          className="img-responsive img-circle"
                        />
                      </button>
                    </Link>
                  ) : (
                    <ul className="nav navbar-nav navbar-left">
                      <li>
                        <Link to="/">Login</Link>
                        <Link to="/">Sign Up</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="submit">
                  <a href="submit.html">SUBMIT A NOMINEE REQUEST</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
