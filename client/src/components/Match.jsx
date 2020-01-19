import React from "react";

const Match = props => {
  const { game } = props;
  console.log(game);
  return (
    <div class="pa3 pa5-ns">
      <h4 class="f6 fw6">
        {game.home_team.code} vs {game.away_team.code}
      </h4>
      <dl class="f6 lh-title mv2">
        <dt class="dib b">W: {game.winner}</dt>
        <dd class="dib ml0 gray">Winner</dd>
      </dl>
      <dl class="f6 lh-title mv2">
        <dt class="dib b">V: {game.venue}</dt>
        <dd class="dib ml0 gray">Venue</dd>
      </dl>
      <dl class="f6 lh-title mv2">
        <dt class="dib b">L: {game.location}</dt>
        <dd class="dib ml0 gray">Location</dd>
      </dl>
      <dl class="f6 lh-title mv2">
        <dt class="dib b">S: {game.status}</dt>
        <dd class="dib ml0 gray">Status</dd>
      </dl>
      <dl class="f6 lh-title mv2">
        <dt class="dib b">T: {game.datetime}</dt>
        <dd class="dib ml0 gray">Time</dd>
      </dl>
    </div>
  );
};

export default Match;
