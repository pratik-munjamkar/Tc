import React from "react";
import logo from "../Assets/logo.png";
import "../cssFile/SideBar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={logo} alt="logo" />
      <ul>
        <li>Dashboard</li>
        <li>Trainings</li>
        <li>Users</li>
        <li>Analytics</li>
        <li>My account</li>
        <li>Support</li>
      </ul>
    </div>
  );
}

export default Sidebar;