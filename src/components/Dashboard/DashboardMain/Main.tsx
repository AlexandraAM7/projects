import clsx from "clsx";
import ProfileWidget from "../../SharedComponents/ProfileWidget/ProfileWidget";
import TotalSpentChart from "../../SharedComponents/TotalSpentChart/TotalSpentChart";
import styles from "./Main.module.scss";
import MonthlySpendingWidget from "../../SharedComponents/MonthlySpendingWidget/MonthlySpendingWidget";
import TransactionsWidget from "../../SharedComponents/TransactionsWidget/TransactionsWidget";
import CalendarWidget from "../../SharedComponents/CalendarWidget/CalendarWidget";

const DashboardMain = () => {
  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.rowOne, styles.row)}>
        <TotalSpentChart />
        <ProfileWidget />
      </div>
      <div className={clsx(styles.rowTwo, styles.row)}>
        <div className={styles.flexTwo}>
          <MonthlySpendingWidget />
          <TransactionsWidget />
        </div>
        <CalendarWidget />
      </div>
    </div>
  );
};

export default DashboardMain;
