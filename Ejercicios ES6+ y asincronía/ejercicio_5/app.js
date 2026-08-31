const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const input = document.querySelector('[data-function="toFilterStreamers"]');
const results = document.getElementById('results');

function renderList(list) {
  results.innerHTML = '';
  list.forEach(streamer => {
    const li = document.createElement('li');
    li.textContent = `${streamer.name} — ${streamer.gameMorePlayed}`;
    results.appendChild(li);
  });
}

input.addEventListener('input', () => {
  const value = input.value.toLowerCase();
  const filtered = streamers.filter(s =>
    s.name.toLowerCase().includes(value)
  );
  renderList(filtered);
});
