import React from "react";
import statistics from '../../json/statistics.json';
import StatisticsItem from './statisticsitem/StatisticsItem';

const Statistics = () => {
    return (
        <>
        <h2 className="title">Upload stats</h2>
        <ul>
            {statistics.map(stat =>  <StatisticsItem key = {stat.id} stat={stat}/>)}
        </ul>
        </>
    );
}

export default Statistics;