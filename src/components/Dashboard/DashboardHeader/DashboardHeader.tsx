import { useProfileData } from "../../../hooks";
import ActivityCard from "./Cards/ActivityCard";
import EarningsCard from "./Cards/EarningsCard";
import MSpentCard from "./Cards/MSpentCard";
import NewClientsCard from "./Cards/NewClientsCard";
import styles from "./DashboardHeader.module.scss";

const DashboardHeader = () => {
  const { data } = useProfileData();
  return (
    <>
      {data && (
        <div className={styles.wrapper}>
          <MSpentCard />
          <NewClientsCard />
          <EarningsCard />
          <ActivityCard />
        </div>
      )}
    </>
  );
};

export default DashboardHeader;
