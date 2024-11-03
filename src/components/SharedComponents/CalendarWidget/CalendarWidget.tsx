import React from "react";
import { useProfileData } from "../../../hooks"; // Update the import path as needed
import styles from "./CalendarWidget.module.scss"; // Create this CSS module for styles
import arrowIcon from "../../../images/view_all_arrow.svg"; // Ensure the icon path is correct

const CalendarWidget: React.FC = () => {
  const { data } = useProfileData();
  const { todayCalendar } = data || {}; // Use optional chaining to avoid errors

  const formatTime = (timestamp: number): string => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const timeString = new Date(timestamp).toLocaleTimeString([], options);
    return timeString.toUpperCase();
  };

  const handleViewAll = () => {
    if (todayCalendar) {
      const eventDetails = todayCalendar
        .map(
          (event) =>
            `${event.name}: ${formatTime(event.from)} - ${formatTime(event.to)}`
        )
        .join("\n");

      alert(eventDetails);
    } else alert("No events available.");
  };

  // Get today's date for the header
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{formattedDate}</h2>
      <div className={styles.eventList}>
        {todayCalendar &&
          todayCalendar.slice(0, 3).map((event, index) => (
            <div key={index} className={styles.eventWrap}>
              <div className={styles.verticalBar}></div>
              <div className={styles.eventItem}>
                <span className={styles.eventName}>{event.name}</span>
                <span className={styles.eventTime}>
                  {formatTime(event.from)} - {formatTime(event.to)}
                </span>
              </div>
            </div>
          ))}
      </div>
      <button className={styles.viewAllButton} onClick={handleViewAll}>
        View all Tasks
        <img src={arrowIcon} alt="Arrow" className={styles.arrowIcon} />
      </button>
    </div>
  );
};

export default CalendarWidget;
