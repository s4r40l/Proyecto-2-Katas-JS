const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];


function showWord(products, searchString) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].includes(searchString)) {
      console.log(products[i]);
    }
  }
}

showWord(products, "Camiseta");


