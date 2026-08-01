const artists = [
  { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
  { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
  { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
  { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
  { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];

// Recorremos artistas
for (const artist of artists) {

  console.log(artist.name + ":");

  // Recorremos las influencias del artista que estamos recorriendo
  for (const influence of artist.influences) {
    console.log("  - " + influence);
  }

  console.log("");
}
