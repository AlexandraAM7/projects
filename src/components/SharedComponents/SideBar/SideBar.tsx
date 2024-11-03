import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./SideBar.module.scss";
import dashboardIcon from "../../../images/Dashboard.svg";
import logo from "../../../images/Logo.svg";
import activityIcon from "../../../images/Activity.svg";
import libraryIcon from "../../../images/Library.svg";
import securityIcon from "../../../images/Security.svg";
import schedulesIcon from "../../../images/Schedules.svg";
import payoutsIcon from "../../../images/Payouts.svg";
import settingsIcon from "../../../images/Settings.svg";
import logoutIcon from "../../../images/Logout.svg";
import clsx from "clsx";
import { ISidebarProps } from "../../../interfaces";

const Sidebar: React.FC<ISidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const handleLogout = () => {
    alert("You are logged out!");
  };

  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <div className={clsx(styles.sidebar, { [styles.open]: isSidebarOpen, [styles.closed]: !isSidebarOpen })}>
      <div className={styles.sidebarLogo}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <ul className={styles.sidebarMenu}>
        <li className={isActive("/") ? styles.activeLink : ""}>
          <Link to="/">
            <img src={dashboardIcon} alt="Dashboard" className={styles.icon} />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className={isActive("/activity") ? styles.activeLink : ""}>
          <Link to="/activity">
            <img src={activityIcon} alt="Activity" className={styles.icon} />
            <span>Activity</span>
          </Link>
        </li>
        <li className={isActive("/library") ? styles.activeLink : ""}>
          <Link to="/library">
            <img src={libraryIcon} alt="Library" className={styles.icon} />
            <span>Library</span>
          </Link>
        </li>
        <li className={isActive("/security") ? styles.activeLink : ""}>
          <Link to="/security">
            <img src={securityIcon} alt="Security" className={styles.icon} />
            <span>Security</span>
          </Link>
        </li>
        <li className={isActive("/schedules") ? styles.activeLink : ""}>
          <Link to="/schedules">
            <img src={schedulesIcon} alt="Schedules" className={styles.icon} />
            <span>Schedules</span>
          </Link>
        </li>
        <li className={isActive("/payouts") ? styles.activeLink : ""}>
          <Link to="/payouts">
            <img src={payoutsIcon} alt="Payouts" className={styles.icon} />
            <span>Payouts</span>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <img src={settingsIcon} alt="Settings" className={styles.icon} />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
      <div className={styles.logout} onClick={handleLogout}>
        <img src={logoutIcon} alt="Logout" className={styles.icon} />
        <span>Log Out</span>
      </div>
    </div>
  );
};

export default Sidebar;
