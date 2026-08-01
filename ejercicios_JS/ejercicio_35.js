const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  const found = mutants.filter(mutante => mutante.power === power);

  if (found.length > 0) {
    return `Mutantes encontrados con el poder "${power}": ${found.map(mutante => mutante.name).join(', ')}`;
  }

  return `No existe ningún mutante con el poder "${power}".`;
}

console.log(findMutantByPower(mutants, "telepathy"));
console.log(findMutantByPower(mutants, "flight"));
S
