const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

function removePlacesNewArray(placesToTravel, idsToExclude) {
  const filteredPlaces = [];

  for (let i = 0; i < placesToTravel.length; i++) {
    if (!idsToExclude.includes(placesToTravel[i].id)) {
      filteredPlaces.push(placesToTravel[i]);
    }
  }

  console.log(filteredPlaces);
}

removePlacesNewArray(placesToTravel, [11, 40]);
