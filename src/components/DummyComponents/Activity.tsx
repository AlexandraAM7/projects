
import Sidebar from "../SharedComponents/SideBar/SideBar";
import styles from "./Dummy.module.scss";

const Activity = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.right}>Page currently under Construction</div>
    </div>
  );
};

export default Activity;