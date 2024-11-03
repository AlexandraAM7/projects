import { useProfileData } from "../../../hooks";
import styles from "./MonthlySpendingWidget.module.scss";
import progressIcon from "../../../images/arrow_drop_up.svg";
import regressIcon from "../../../images/arrow_drop_down.svg";
import checkmark from "../../../images/checkmark.svg";
import xmark from "../../../images/xmark.svg";
import MonthlyChart from "../MontlyChart/MontlyChart";
import { useEffect, useState } from "react";
import clsx from "clsx";

const MonthlySpendingWidget = () => {
  const { data } = useProfileData();
  const [isProgress, setIsProgress] = useState(true);

  const { spentMonth, progress, currency } = data;
  const statusText = isProgress ? "On track" : "Off track";

  const roundedSpentMonth =
    data && spentMonth ? parseFloat(spentMonth.toFixed(1)) : 0;

  const checkProgress = () => {
    if (progress && progress.includes("+")) {
      setIsProgress(true);
    } else {
      setIsProgress(false);
    }
  };

  useEffect(() => {
    checkProgress();
  }, [data, progress]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <p>Spent this month</p>
          <p className={styles.amount}>
            {currency}
            {roundedSpentMonth}
          </p>
        </div>
        <div className={styles.topRight}>
          <img
            src={isProgress ? progressIcon : regressIcon}
            alt="progressIcon"
            width={18}
            height={18}
          />
          <p
            className={clsx(
              styles.progressValue,
              !isProgress && styles.redColor
            )}
          >
            {progress}
          </p>
        </div>
      </div>
      <div className={styles.middle}>
        <img
          src={isProgress ? checkmark : xmark}
          alt="checkmark"
          width={15}
          height={15}
          className={styles.checkmark}
        />
        <p className={clsx(styles.checkmark, !isProgress && styles.redColor)}>
          {statusText}
        </p>
      </div>
      <MonthlyChart barSize={15} barsToDisplay={7} height={145} />
    </div>
  );
};

export default MonthlySpendingWidget;
