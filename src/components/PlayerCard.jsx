import React from "react";

export const PlayerCard = ({player, IMG_URL}) => {
  return (
    <div className="player">
      <div>
        <p>{player.username}</p>
      </div>
      <div>
        <img src={IMG_URL} alt="user image" />
      </div>
      <div>
        <span>{player.username}</span>
        <h3>{`Blitz: ${player.perfs.blitz.rating}`}</h3>
      </div>
    </div>
  );
};
