import { useProfileData } from "../../../../hooks";
import styles from "../DashboardHeader.module.scss";
import charthGraph from "../../../../images/Chart.svg";
import clsx from "clsx";

const ActivityCard = () => {
  const { data } = useProfileData();
  return (
    <>
      {data && (
        <div className={clsx(styles.activityCardWrapper, styles.card)}>
          <div className={styles.infoWrapper}>
            <p>Activity</p>
            <p className={styles.activity}>
              {data.currency}
              {data.activity}
            </p>
          </div>
          <img
            src={charthGraph}
            alt="charthGraph"
            className={styles.chartGraph}
          />
        </div>
      )}
    </>
  );
};

export default ActivityCard;
