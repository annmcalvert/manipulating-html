let div = document.createElement('div');
let btn = document.createElement('button');
let btnText = document.createTextNode('Click Me');
let h3 = document.createElement('h3');
let h3Text = document.createTextNode('1.');

h3.appendChild(h3Text);
div.appendChild(h3);
btn.appendChild(btnText);
div.appendChild(btn);
document.body.appendChild(div);

//1. button with nice message
btn.addEventListener('click', function () {
    alert('Have a nice day!');
});

//3. div hover color
let divSquare = document.getElementById('div');
divSquare.addEventListener('mouseover', function() {
    (this).style.backgroundColor = 'blue';
});
divSquare.addEventListener('mouseleave', function() {
    (this).style.backgroundColor = 'black';
});

//4. <p> that will change to a random color
let para = document.getElementById('para');
para.addEventListener('click', function() {
    let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    (this).style.color = randomColor;
});

