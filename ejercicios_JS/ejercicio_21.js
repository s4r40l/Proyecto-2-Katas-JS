const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

const arrayMenores = [];
const arrayMayores = [];

function showUsersByAge(users) {

  for (const user of users) {
    if (user.years < 18) {
      arrayMenores.push(user.name);
    } else {
      arrayMayores.push(user.name);
    }
  }

  console.log("Usuarios menores de edad:", arrayMenores);
  console.log("Usuarios mayores de edad:", arrayMayores);
}

showUsersByAge(users);
