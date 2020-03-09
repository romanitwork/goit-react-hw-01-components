import React from "react";
import styles from './StatisticsItem.module.css';

const StatisticsItem = ({stat}) => {
  return (
    <li>
      <span className="label">{stat.label}: </span>
      <span className="percentage">{stat.percentage}%</span>
    </li>
  );
};

export default StatisticsItem;
