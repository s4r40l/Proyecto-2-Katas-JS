const div1 = document.createElement('div');
document.body.appendChild(div1);



const div2 = document.createElement('div');
const p2 = document.createElement('p');
p2.textContent = 'Hola!';
div2.appendChild(p2);
document.body.appendChild(div2);



const div3 = document.createElement('div');
for (let i = 1; i <= 6; i++) {
  const p3 = document.createElement('p');
  p3.textContent = `Parrafo ${i}`;
  div3.appendChild(p3);
}
document.body.appendChild(div3);



const p4 = document.createElement('p');
p4.textContent = 'Soy dinámico!';
document.body.appendChild(p4);



const h2Insert = document.querySelector('.fn-insert-here');
h2Insert.textContent = 'Wubba Lubba dub dub';



const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ulApps = document.createElement('ul');
apps.forEach(app => {
  const li = document.createElement('li');
  li.textContent = app;
  ulApps.appendChild(li);
});
document.body.appendChild(ulApps);



const removeNodes = document.querySelectorAll('.fn-remove-me');
removeNodes.forEach(node => node.remove());



const allDivs = document.querySelectorAll('div');
const pMiddle = document.createElement('p');
pMiddle.textContent = 'Voy en medio!';
allDivs[0].insertAdjacentElement('afterend', pMiddle);



const divsInside = document.querySelectorAll('.fn-insert-here');
divsInside.forEach(div => {
  const pInside = document.createElement('p');
  pInside.textContent = 'Voy dentro!';
  div.appendChild(pInside);
});
