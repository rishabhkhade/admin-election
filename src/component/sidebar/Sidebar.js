import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
const Sidebar = ({ handleLogout }) => {
  
  const links = [
    {
      link_name: "Dashboard",
      link_path: "/",
    },
    {
      link_name: "Prabhak list",
      link_path: "/prabhak",
    },
    {
      link_name: "Voters list",
      link_path: "/voterlist",
    },
  ];

  return (
    <>
      <div class="sidebar">
        <div class="list">
          {/* <img src={logo} alt="Dahsboard" /> */}
          <h2>Admin Dashboard</h2>

          <div class="links">
            {links.map((item, index) => (
              <Link to={item.link_path} key={index}>
                {item.link_name}
              </Link>
            ))}
          </div>
          <div class="btn" onClick={handleLogout}>
            logout
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
