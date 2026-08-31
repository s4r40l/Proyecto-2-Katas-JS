const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul1 = document.createElement('ul');
countries.forEach(country => {
  const li = document.createElement('li');
  li.textContent = country;
  ul1.appendChild(li);
});
document.body.appendChild(ul1);



const removeMe = document.querySelector('.fn-remove-me');
removeMe.remove();



const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ul2 = document.createElement('ul');
cars.forEach(car => {
  const li = document.createElement('li');
  li.textContent = car;
  ul2.appendChild(li);
});
document.querySelector('[data-function="printHere"]').appendChild(ul2);



const countries2 = [
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const container = document.createElement('div');

countries2.forEach(item => {
  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  const img = document.createElement('img');
  h4.textContent = item.title;
  img.src = item.imgUrl;
  div.appendChild(h4);
  div.appendChild(img);
  container.appendChild(div);
});

document.body.appendChild(container);



const btnDeleteLast = document.createElement('button');
btnDeleteLast.textContent = 'Eliminar último';
btnDeleteLast.addEventListener('click', () => {
  const last = container.lastElementChild;
  if (last) last.remove();
});
document.body.appendChild(btnDeleteLast);



Array.from(container.children).forEach(div => {
  const btn = document.createElement('button');
  btn.textContent = 'Eliminar este';
  btn.addEventListener('click', () => div.remove());
  div.appendChild(btn);
});
