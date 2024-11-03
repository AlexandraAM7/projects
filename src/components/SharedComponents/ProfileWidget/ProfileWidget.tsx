import { useProfileData } from "../../../hooks";
import styles from "./ProfileWidget.module.scss";
import locationIcon from "../../../images/Location_icon.svg";

const ProfileWidget = () => {
  const { data } = useProfileData();

  if (!data) {
    return <p>Loading...</p>;
  }
  const { profilePicture, fullName, address, projects, following, followers } =
    data;
  const userData = [
    { title: "Projects", info: projects },
    { title: "Followers", info: followers },
    { title: "Following", info: following },
  ];

  return (
    <div className={styles.wrapper}>
      <img
        src={profilePicture}
        alt="Profile"
        className={styles.profilePicture}
      />
      <div className={styles.userInfo}>
        <p className={styles.name}>{fullName}</p>
        <div className={styles.location}>
          <img src={locationIcon} alt="Location" width={10} height={15} />
          <span>{address}</span>
        </div>
      </div>

      <div className={styles.userData}>
        {userData.map(({ title, info }) => (
          <div className={styles.data} key={title}>
            <p className={styles.dataTitle}>{title}</p>
            <p className={styles.dataInfo}>{info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileWidget;
