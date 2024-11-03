import { useProfileData } from "../../../../hooks";
import styles from "../DashboardHeader.module.scss";
import earnings from "../../../../images/Earnings.svg";

const EarningsCard = () => {
  const { data } = useProfileData();
  return (
    <>
      {data && (
        <div className={styles.card}>
          <img src={earnings} alt="newClients" className={styles.cardLogo} />
          <div className={styles.infoWrapper}>
            <p>Earnings</p>
            <p className={styles.earnings}>
              {data.currency}
              {data.earnings}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default EarningsCard;
