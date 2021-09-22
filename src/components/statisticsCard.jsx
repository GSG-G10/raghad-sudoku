import React from "react";

function StatisticsCard(props) {
  const { gamesData, contentH } = props;
  return (
    <div>
      <h2>{contentH}</h2>
      {gamesData.map((elem, index) => {
        let contentP = "";
        if (contentH === "Game Number") {
          contentP = `${index + 1}`;
        } else if (contentH === "Game Level") {
          contentP = `${elem.level}`;
        } else {
          contentP = `${elem.time}`;
        }
        return <p>{contentP}</p>;
      })}
    </div>
  );
}

export default StatisticsCard;
