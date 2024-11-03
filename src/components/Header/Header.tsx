import { IUserData } from "../../interfaces";
import SearchBar from "../SharedComponents/SearchBar/SearchBar";
import styles from "./Header.module.scss";

const Header = (props: IUserData) => {
  const { username , toggleSidebar} = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.hamburger} onClick={toggleSidebar}>
        ☰
      </div>
      <div className={styles.left}>
        <span className={styles.username}>Hi {username}!</span>
        <span className={styles.welcomeMsg}>Welcome to Venus!</span>
      </div>
      <div className={styles.right}>
        <SearchBar />
        {/* <MonthlyChart barsToDisplay={7} /> */}
      </div>
    </div>
  );
};

export default Header;
