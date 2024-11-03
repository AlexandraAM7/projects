import { useProfileData } from "../../../../hooks";
import styles from "../DashboardHeader.module.scss";
import newClientsLogo from "../../../../images/New_clients.svg";
import graph from "../../../../images/Graph.svg";

const NewClientsCard = () => {
  const { data } = useProfileData();
  return (
    <>
      {data && (
        <div className={styles.card}>
          <img
            src={newClientsLogo}
            alt="newClients"
            className={styles.cardLogo}
          />
          <div className={styles.infoWrapper}>
            <p>New Clients</p>
            <p className={styles.newClients}>{data.newClients}</p>
          </div>
          <img src={graph} alt="graph" className={styles.graph} />
        </div>
      )}
    </>
  );
};

export default NewClientsCard;
