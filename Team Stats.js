const team = {
  _players: [
    { firstName: "Kevin", lastName: "Durant", age: 32 },
    { firstName: "Giannis", lastName: "Ant", age: 32 },
    { firstName: "LeBron", lastName: "James", age: 37 },
  ],
  
  _games: [
    {
      opponent: "Heat",
      teamPoints: 42,
      opponentPoints: 45,
    },
    {
      opponent: "Bucks",
      teamPoints: +8465,
      opponentPoints: 545,
    },
    {
      opponent: "Warriors",
      teamPoints: 546,
      opponentPoints: 89,
    },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    this._players.push({
      firstName,
      lastName,
      age,
    });
  },

  addGame(opponent, teamPoints, opponentPoints) {
    this._games.push({ opponent, teamPoints, opponentPoints });
  },
};

team.addPlayer("Steph", "Curry", "28");
team.addPlayer("Lisa", "Leslie", "44");
team.addPlayer("Bugs", "Bunny", "54");

team.addGame("Jag", 78, 546);
team.addGame("Yeet", 57, 54);
team.addGame("Boogy", 87, 65);

console.log(team.players);
console.log(team.games);
