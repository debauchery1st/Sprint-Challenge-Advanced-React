const getEndPoints = () => {
  const endpoints = {
    wordlcupAPI: {
      players: "http://localhost:5000/api/players",
      matches: "https://worldcup.sfg.io/matches",
      mDetails: "https://worldcup.sfg.io/matches/?details=true",
      teams: "https://worldcup.sfg.io/teams",
      tResults: "https://worldcup.sfg.io/teams/results"
    }
  };
  return endpoints;
};

export default getEndPoints;
