let div1 = document.getElementById('div1');
let btn1 = document.createElement('button');
let btnText = document.createTextNode('Click Me');
let btn2 = document.getElementById('btn2');
let div3 = document.getElementById('div3');
let para = document.getElementById('para');
let btn5 = document.getElementById('btn5');
let nameP = document.createElement('p');
let name = document.createTextNode('Ann Calvert');
let nameDiv = document.getElementById('nameDiv');
let friends = ['Dennis', 'Steve', 'Everett', 'Anna', 'Ashley', 'Melissa', 'Pracilla', 'Rainey', 'Polly', 'Ripley'];
let btn6 = document.getElementById('btn6');
let list = document.getElementById('list');

btn1.appendChild(btnText);
div1.appendChild(btn1);
nameP.appendChild(name);

//1. button with nice message
btn1.addEventListener('click', function () {
    alert('Have a nice day!');
});

//2. alert message in input box
btn2.addEventListener('click', function () {
    let text = document.getElementById('text').value;
    alert(text);
});

//3. div hover color
div3.addEventListener('mouseover', function () {
    (this).style.backgroundColor = 'blue';
});
div3.addEventListener('mouseleave', function () {
    (this).style.backgroundColor = 'black';
});

//4. <p> that will change to a random color
para.addEventListener('click', function () {
    let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    (this).style.color = randomColor;
});

//5. button that shows name
btn5.addEventListener('click', function () {
    nameDiv.appendChild(nameP);
});

//6. button that adds friends to list
btn6.addEventListener('click', function () {
    friends.forEach(listEach);
    function listEach(friends) {
        let li = document.createElement('li');
        let liText = document.createTextNode(friends);
        li.appendChild(liText);
        document.body.appendChild(li);
    };
});

