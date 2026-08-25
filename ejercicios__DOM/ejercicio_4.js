const btn = document.createElement('button');
btn.id = 'btnToClick';
btn.textContent = 'Click aquí';
document.body.appendChild(btn);
btn.addEventListener('click', event => console.log(event));




const inputFocus = document.querySelector('.focus');
inputFocus.addEventListener('focus', () => console.log(inputFocus.value));




const inputValue = document.querySelector('.value');
inputValue.addEventListener('input', () => console.log(inputValue.value));
