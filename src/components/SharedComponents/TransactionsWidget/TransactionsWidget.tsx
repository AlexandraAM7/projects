import React from "react";
import { useProfileData } from "../../../hooks";
import styles from "./TransactionsWidget.module.scss";
import { ITransactions } from "../../../interfaces";
import arrowIcon from "../../../images/view_all_arrow.svg";

const TransactionsWidget: React.FC = () => {
  const { data } = useProfileData();
  const { transactions } = data;

  if (!data && !transactions) {
    return <p>Loading...</p>;
  }

  const handleViewAll = () => {
    if (transactions) {
      const transactionDetails = transactions
        .map((transaction) => {
          return `${transaction.name}: ${formatDate(transaction.date)}`;
        })
        .join("\n");

      alert(transactionDetails);
    } else {
      alert("No transactions available.");
    }
  };

  const formatDate = (timestamp: number): string => {
    return new Date(timestamp).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Your transactions</h2>
      <div className={styles.transactionList}>
        {transactions &&
          transactions
            .slice(0, 3)
            .map((transaction: ITransactions, index: number) => (
              <div key={index} className={styles.transactionItem}>
                <img
                  src={transaction.icon}
                  alt={transaction.name}
                  className={styles.icon}
                />
                <div className={styles.transactionDetails}>
                  <span className={styles.transactionName}>
                    {transaction.name}
                  </span>
                  <span className={styles.transactionDate}>
                    {formatDate(transaction.date)}
                  </span>
                </div>
              </div>
            ))}
      </div>
      <button className={styles.viewAllButton} onClick={handleViewAll}>
        View all
        <img src={arrowIcon} alt="Arrow" className={styles.arrowIcon} />
      </button>
    </div>
  );
};

export default TransactionsWidget;
