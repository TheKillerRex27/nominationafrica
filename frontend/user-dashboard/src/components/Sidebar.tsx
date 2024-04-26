import "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logos/dark-logo.svg";

function Sidebar() {
  const location = useLocation();

  // Define styles for the active link
  const activeLinkStyle = {
    backgroundColor: "#5d87ff",
    color: "#fff",
    borderRadius: "7px",
  };

  return (
    <aside className="left-sidebar">
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <Link to="/" className="text-nowrap logo-img">
            <img src={logo} width="180" alt="" />
          </Link>
          <div
            className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
            id="sidebarCollapse"
          >
            <i className="ti ti-x fs-8"></i>
          </div>
        </div>

        <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav">
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">Home</span>
            </li>
            <li className="sidebar-item">
              <Link
                to="/dashboard"
                className="sidebar-link"
                style={
                  location.pathname === "/dashboard" ? activeLinkStyle : {}
                }
              >
                <span>
                  <i className="ti ti-layout-dashboard"></i>
                </span>
                <span className="hide-menu">Dashboard</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link
                to="/manage-admin"
                className="sidebar-link"
                style={
                  location.pathname === "/manage-admin" ? activeLinkStyle : {}
                }
              >
                <span>
                  <i className="ti ti-article"></i>
                </span>
                <span className="hide-menu">Admin Management</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link
                to="/manage-user"
                className="sidebar-link"
                style={
                  location.pathname === "/manage-user" ? activeLinkStyle : {}
                }
              >
                <span>
                  <i className="ti ti-user"></i>
                </span>
                <span className="hide-menu">User Management</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link
                to="/manage-nominee"
                className="sidebar-link"
                style={
                  location.pathname === "/manage-nominee" ? activeLinkStyle : {}
                }
              >
                <span>
                  <i className="ti ti-id-badge"></i>
                </span>
                <span className="hide-menu">Nominee Management</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link
                to="/manage-awards"
                className="sidebar-link"
                style={
                  location.pathname === "/manage-awards" ? activeLinkStyle : {}
                }
              >
                <span>
                  <i className="ti ti-cup"></i>
                </span>
                <span className="hide-menu">Awards Management</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link
                to="/reports"
                className="sidebar-link"
                style={location.pathname === "/reports" ? activeLinkStyle : {}}
              >
                <span>
                  <i className="ti ti-alert-circle"></i>
                </span>
                <span className="hide-menu">Reports</span>
              </Link>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">Settings</span>
            </li>
            <li className="sidebar-item">
              <Link
                to="/settings"
                className="sidebar-link"
                style={location.pathname === "/settings" ? activeLinkStyle : {}}
              >
                <span>
                  <i className="ti ti-settings"></i>
                </span>
                <span className="hide-menu">Settings</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/logout" className="sidebar-link">
                <span>
                  <i className="ti ti-login"></i>
                </span>
                <span className="hide-menu">Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
