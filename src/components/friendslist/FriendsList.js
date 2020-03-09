import React from "react";
import styles from "./FriendsList.module.css";
import FriendsListItem from "./friendslistitem/FriendsListItem";

const FriendsList = ({ friends }) => (
  <div className={styles.bg}>
    <ul className={styles.friends__list}>
      {friends.map(element => (
        <FriendsListItem key={element.id} friend={element} />
      ))}
    </ul>
  </div>
);

export default FriendsList;
