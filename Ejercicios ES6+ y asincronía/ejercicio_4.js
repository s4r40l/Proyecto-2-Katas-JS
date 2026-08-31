const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];



const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const over18 = ages.filter(age => age > 18);
console.log(over18);



const nPares = ages.filter(age => age % 2 === 0);
console.log(nPares);



const lolPlayers = streamers.filter(s => s.gameMorePlayed === 'League of Legends');
console.log(lolPlayers);



const withU = streamers.filter(s => s.name.includes('u'));
console.log(withU);



const legends = streamers
  .filter(s => s.gameMorePlayed.includes('Legends'))
  .map(s => s.age > 35 ? { ...s, gameMorePlayed: s.gameMorePlayed.toUpperCase() } : s);
console.log(legends);
