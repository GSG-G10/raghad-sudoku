import React from "react";
import StatisticsCard from "./statisticsCard";

function Statistics() {
  const gamesData = JSON.parse(localStorage.getItem("game"));
  return (
    <div>
      <h1>Track your Statistics</h1>
      <div>
        {gamesData ? (
          <div>
            <StatisticsCard gamesData={gamesData} contentH={"Game Number"} />
            <StatisticsCard gamesData={gamesData} contentH={"Game Level"} />
            <StatisticsCard gamesData={gamesData} contentH={"Game Time"} />
          </div>
        ) : (
          <p>'No games'</p>
        )}
      </div>
    </div>
  );
}

export default Statistics;
