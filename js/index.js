const link = document.querySelector('a');
link.textContent = 'Programming Mentor';
link.href = 'https://programmingmentor.com';

const sect = document.querySelector('section');
for (let i = 0; i < 100; i++) {
    const para = document.createElement('p');
    para.textContent = i + 1 + ': You have won the prize!';
    sect.appendChild(para);
    para.classList.add('highlight');
}

const img = document.querySelector('img');
sect.appendChild(img);

const h1 = document.querySelector('h1');
h1.parentNode.removeChild(h1);


$('.hide-pars').click(hidePars);
function hidePars() {
    $('p').toggle(1000);
}

document.querySelectorAll('.digits, .operation')
    .forEach( el => el.addEventListener('click', digitOperClick ) );

function digitOperClick(e) {
    const target = e.target;
    const display = document.querySelector('.display');
    display.value += target.innerText;
}

document.querySelector('.equal')
    .addEventListener('click', equal);
    
function equal() {
    const display = document.querySelector('.display');
    display.value = eval(display.value);
}
