import React from "react";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => (
  <div className={styles.bg}>
    <table className={styles["transaction-history"]}>
      <thead>
        <tr className={styles.thead_tr}>
          <th className={styles.type}>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {transactions.map(element => (
          <tr key={element.id} className={styles.tbody_tr}>
            <td className={styles.type_td}>{element.type}</td>
            <td className={styles.amount_td}>{element.amount}</td>
            <td className={styles.currency_td}>{element.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TransactionHistory;
