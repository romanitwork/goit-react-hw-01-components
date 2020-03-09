import React from "react";
import Profile from "./profile/Profile";
import user from "../json/user.json";
import styles from "./App.module.css";
import Statistics from "./statistics/Statistics";
import FriendsList from "./friendslist/FriendsList";
import friends from "../json/friends.json";
import TransactionHistory from "./transactionhistory/TransactionHistory";
import transactions from "../json/transactions.json";

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;
