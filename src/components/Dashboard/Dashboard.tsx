import Header from "../Header/Header";
import DashboardMain from "./DashboardMain/Main";
import styles from "./Dashboard.module.scss";
import { useProfileData } from "../../hooks";
import Sidebar from "../SharedComponents/SideBar/SideBar";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import { useState } from "react";

const Dashboard = () => {
  const { data } = useProfileData();
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleMainClick = () => {
    if (isSidebarOpen) {
      setSidebarOpen(false); 
    }
  };
  return (
    <>
      {data && (
        <div className={styles.wrapper}>
          <Sidebar
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
          <div className={styles.right} onClick={handleMainClick}>
            <Header username={data.username} toggleSidebar={toggleSidebar} />
            <DashboardHeader />
            <DashboardMain />
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
