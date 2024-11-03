import clsx from "clsx";
import { useProfileData } from "../../../../hooks";
import MonthlyChart from "../../../SharedComponents/MontlyChart/MontlyChart";
import styles from "../DashboardHeader.module.scss";

const MSpentCard = () => {
  const { data } = useProfileData();
  const roundedSpentMonth =
    data && data.spentMonth ? parseFloat(data.spentMonth.toFixed(1)) : 0;
  return (
    <>
      {data && (
        <div className={clsx(styles.mSpentCardWrapper, styles.card)}>
          <div className={styles.infoWrapper}>
            <p>Spent this month</p>
            <p className={styles.amount}>{data.currency}{roundedSpentMonth}</p>
          </div>
          <div className={styles.chart}>
            <MonthlyChart barSize={5} barsToDisplay={5} tooltipEnabled={false} />
          </div>
        </div>
      )}
    </>
  );
};

export default MSpentCard;
