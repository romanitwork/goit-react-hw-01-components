import React from "react";
import styles from "./FriendsListItem.module.css";

const FriendsListItem = ({ friend }) => (
  <li className={styles.item}>
    <span
      className={friend.isOnline === true ? styles.onLine : styles.offLine}
    />
    <img
      className={styles.avatar}
      src={friend.avatar}
      alt="friend_img"
      width="80"
    />
    <p className={styles.name}>{friend.name}</p>
  </li>
);

export default FriendsListItem;
